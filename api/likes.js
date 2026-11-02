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
  } catch (e) {}
}

// In-Memory store as emergency fallback
let inMemoryLikes = {
  "utcc-hackathon": 1,
  "kmitl-hackathon": 1,
  "j3a-store": 1,
  "j3a-discord": 1
};

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  // 1. GET: Fetch current real like counts from Supabase
  if (req.method === "GET") {
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from("likes")
          .select("item_id, count");

        if (!error && Array.isArray(data)) {
          const likesMap = { ...inMemoryLikes };
          data.forEach((row) => {
            if (row.item_id) {
              likesMap[row.item_id] = Number(row.count) || 0;
            }
          });
          return res.status(200).json({ ok: true, likes: likesMap, source: "supabase" });
        }
      } catch (err) {
        console.error("Supabase likes fetch error:", err);
      }
    }

    return res.status(200).json({ ok: true, likes: inMemoryLikes, source: "memory_fallback" });
  }

  // 2. POST: Increment real like count in Supabase atomically
  if (req.method === "POST") {
    try {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
      const { id } = body;

      if (!id) return res.status(400).json({ error: "Missing like target id" });

      const targetId = String(id).trim();
      let newCount = (inMemoryLikes[targetId] || 0) + 1;
      inMemoryLikes[targetId] = newCount;

      if (supabase) {
        try {
          // Use atomic stored procedure increment_like
          const { data: rpcCount, error: rpcErr } = await supabase.rpc("increment_like", {
            target_id: targetId
          });

          if (!rpcErr && typeof rpcCount === "number") {
            newCount = rpcCount;
            inMemoryLikes[targetId] = newCount;
          } else {
            // Fallback manual upsert
            const { data: existing } = await supabase
              .from("likes")
              .select("count")
              .eq("item_id", targetId)
              .single();

            const next = existing ? (Number(existing.count) || 0) + 1 : 1;
            await supabase
              .from("likes")
              .upsert({ item_id: targetId, count: next, updated_at: new Date().toISOString() });
            newCount = next;
            inMemoryLikes[targetId] = newCount;
          }

          // Fetch fresh map
          const { data: allRows } = await supabase.from("likes").select("item_id, count");
          const freshMap = { ...inMemoryLikes };
          if (Array.isArray(allRows)) {
            allRows.forEach((r) => {
              if (r.item_id) freshMap[r.item_id] = Number(r.count) || 0;
            });
          }

          return res.status(200).json({
            ok: true,
            id: targetId,
            count: newCount,
            likes: freshMap,
            source: "supabase"
          });
        } catch (dbErr) {
          console.error("Supabase update error:", dbErr);
        }
      }

      return res.status(200).json({
        ok: true,
        id: targetId,
        count: newCount,
        likes: inMemoryLikes,
        source: "memory_fallback"
      });
    } catch (err) {
      return res.status(500).json({ error: "Failed to update like: " + err.message });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
};
