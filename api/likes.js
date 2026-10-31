const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = process.env.SUPABASE_URL || "https://nbmjzhhvpksbxvqcxjpn.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_KEY || process.env.SUPABASE_PUBLISHABLE_KEY || "";

let supabase = null;
if (SUPABASE_KEY) {
  try {
    supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  } catch (e) {}
}

// In-Memory store starting at 0 for real counting
let globalLikes = {
  "j3a-store": 0,
  "j3a-discord": 0,
  "utcc-hackathon": 0,
  "kmitl-hackathon": 0
};

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  // 1. GET: Fetch current real like counts
  if (req.method === "GET") {
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from("likes")
          .select("id, count");

        if (!error && data && data.length) {
          data.forEach(item => {
            if (item.id) globalLikes[item.id] = Number(item.count || 0);
          });
        }
      } catch (err) {}
    }
    return res.status(200).json({ ok: true, likes: globalLikes });
  }

  // 2. POST: Increment real like count by +1
  if (req.method === "POST") {
    try {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
      const { id } = body;

      if (!id) return res.status(400).json({ error: "Missing like target id" });

      const current = Number(globalLikes[id] || 0) + 1;
      globalLikes[id] = current;

      if (supabase) {
        try {
          await supabase
            .from("likes")
            .upsert({ id, count: current });
        } catch (e) {}
      }

      return res.status(200).json({ ok: true, id, count: current });
    } catch (err) {
      return res.status(500).json({ error: "Failed to update like" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
};
