const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = process.env.SUPABASE_URL || "https://nbmjzhhvpksbxvqcxjpn.supabase.co";
const SUPABASE_KEY =
  process.env.SUPABASE_SECRET_KEY ||
  process.env.SUPABASE_KEY ||
  process.env.SUPABASE_PUBLISHABLE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ibWp6aGh2cGtzYnh2cWN4anBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMzNjIxMzMsImV4cCI6MjEwODkzODEzM30.1FnjKoPb2ONKQOXLQSoPbgp7utWuHkYUR-dg-nLRJoM";

let supabase = null;
if (SUPABASE_KEY) {
  try {
    supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  } catch (e) {
    console.error("Supabase init error in visitors.js:", e);
  }
}

// In-Memory store as emergency fallback
let inMemoryCount = 0;

async function getViews() {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("likes")
        .select("count")
        .eq("item_id", "site_views")
        .maybeSingle();

      if (!error && data && typeof data.count === "number") {
        inMemoryCount = data.count;
        return data.count;
      }
    } catch (err) {
      console.error("Supabase getViews error:", err);
    }
  }
  return inMemoryCount;
}

async function incrementViews() {
  inMemoryCount++;
  if (supabase) {
    try {
      // 1. Atomic RPC call via Postgres stored procedure
      const { data: rpcCount, error: rpcErr } = await supabase.rpc("increment_like", {
        target_id: "site_views"
      });

      if (!rpcErr && typeof rpcCount === "number") {
        inMemoryCount = rpcCount;
        return rpcCount;
      }

      // 2. Fallback upsert if RPC is unavailable
      const { data: existing } = await supabase
        .from("likes")
        .select("count")
        .eq("item_id", "site_views")
        .maybeSingle();

      const next = existing ? (Number(existing.count) || 0) + 1 : 1;
      await supabase
        .from("likes")
        .upsert({ item_id: "site_views", count: next, updated_at: new Date().toISOString() });

      inMemoryCount = next;
      return next;
    } catch (dbErr) {
      console.error("Supabase incrementViews error:", dbErr);
    }
  }
  return inMemoryCount;
}

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");

  if (req.method === "OPTIONS") return res.status(200).end();

  // 1. GET: Fetch view count, or increment if ?hit=1 / ?increment=true
  if (req.method === "GET") {
    const shouldHit = req.query && (req.query.hit === "1" || req.query.increment === "true");

    if (shouldHit) {
      const count = await incrementViews();
      return res.status(200).json({
        ok: true,
        totalViews: count,
        totalVisitors: count,
        count: count,
        incremented: true,
        source: supabase ? "supabase" : "memory"
      });
    }

    const count = await getViews();
    return res.status(200).json({
      ok: true,
      totalViews: count,
      totalVisitors: count,
      count: count,
      source: supabase ? "supabase" : "memory"
    });
  }

  // 2. POST: Record visitor session & increment atomically
  if (req.method === "POST") {
    try {
      const count = await incrementViews();
      return res.status(200).json({
        ok: true,
        totalViews: count,
        totalVisitors: count,
        count: count,
        recorded: true,
        source: supabase ? "supabase" : "memory"
      });
    } catch (err) {
      console.error("Visitors POST error:", err);
      return res.status(500).json({ error: "Failed to record visitor: " + err.message });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
};
