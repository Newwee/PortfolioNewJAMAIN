const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = process.env.SUPABASE_URL || "https://nbmjzhhvpksbxvqcxjpn.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_KEY || process.env.SUPABASE_PUBLISHABLE_KEY || "";

let supabase = null;
if (SUPABASE_KEY) {
  try {
    supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  } catch (e) {}
}

// In-Memory store for visitors fallback
let inMemoryVisitors = {
  totalCount: 1,
  totalViews: 1,
  sessions: {}
};

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  // 1. GET: Fetch overall visitor statistics
  if (req.method === "GET") {
    if (supabase) {
      try {
        const { count, error } = await supabase
          .from("visitors")
          .select("*", { count: "exact", head: true });

        if (!error && typeof count === "number") {
          return res.status(200).json({ ok: true, totalVisitors: count });
        }
      } catch (err) {}
    }
    return res.status(200).json({ ok: true, totalVisitors: inMemoryVisitors.totalCount });
  }

  // 2. POST: Record visitor session
  if (req.method === "POST") {
    try {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
      const { visitorId, language, timezone, referrer, screenWidth, screenHeight } = body;

      if (!visitorId) {
        return res.status(400).json({ error: "Missing visitorId" });
      }

      const now = new Date().toISOString();

      if (supabase) {
        try {
          // Check if visitor exists
          const { data: existing } = await supabase
            .from("visitors")
            .select("visitor_id, page_views")
            .eq("visitor_id", visitorId)
            .maybeSingle();

          if (existing) {
            await supabase
              .from("visitors")
              .update({
                last_visit: now,
                page_views: (existing.page_views || 1) + 1,
                preferred_lang: language || "th",
                timezone: timezone || "Asia/Bangkok"
              })
              .eq("visitor_id", visitorId);
          } else {
            await supabase
              .from("visitors")
              .insert({
                visitor_id: visitorId,
                first_visit: now,
                last_visit: now,
                page_views: 1,
                preferred_lang: language || "th",
                timezone: timezone || "Asia/Bangkok",
                referrer: referrer || "",
                screen_res: `${screenWidth || 0}x${screenHeight || 0}`
              });
          }
        } catch (dbErr) {}
      } else {
        if (!inMemoryVisitors.sessions[visitorId]) {
          inMemoryVisitors.sessions[visitorId] = { views: 1, first: now };
          inMemoryVisitors.totalCount++;
        } else {
          inMemoryVisitors.sessions[visitorId].views++;
        }
        inMemoryVisitors.totalViews++;
      }

      return res.status(200).json({ ok: true, recorded: true });
    } catch (err) {
      return res.status(500).json({ error: "Failed to record visitor" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
};
