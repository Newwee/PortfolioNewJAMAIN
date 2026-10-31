const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = process.env.SUPABASE_URL || "https://nbmjzhhvpksbxvqcxjpn.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_KEY || process.env.SUPABASE_PUBLISHABLE_KEY || "";

let supabase = null;
if (SUPABASE_KEY) {
  try {
    supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  } catch (e) {}
}

const BAD_WORDS_REGEX = /(ควย|เหี้ย|สัส|เย็ด|กู|มึง|จวย|ดอ|หอย|ปี้|fuck|shit|bitch|asshole|dick|pussy|cunt)/gi;
function filterBadWords(text) {
  return String(text || "").replace(BAD_WORDS_REGEX, (match) => "*".repeat(match.length));
}

// In-Memory Fallback State (persists across warm serverless invocations)
let fallbackComments = [
  {
    id: "welcome-1",
    name: "New JA",
    message: "ยินดีต้อนรับสู่ Portfolio ของผมครับ! สามารถคอมเมนต์พูดคุยหรือติชมผลงานไว้ได้เลยครับ 👋🚀",
    avatar: "NJ",
    created_at: new Date().toISOString()
  }
];

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "GET") {
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from("comments")
          .select("id, name, message, avatar, created_at")
          .order("created_at", { ascending: false })
          .limit(50);

        if (!error && data && data.length) {
          return res.status(200).json({ ok: true, comments: data, source: "supabase" });
        }
      } catch (err) {}
    }
    return res.status(200).json({ ok: true, comments: fallbackComments, source: "local" });
  }

  if (req.method === "POST") {
    try {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
      const { name, message, avatar } = body;

      if (!name || !message) {
        return res.status(400).json({ error: "กรุณากรอกชื่อและข้อความ" });
      }

      const cleanName = filterBadWords(String(name).trim().slice(0, 50));
      const cleanMsg = filterBadWords(String(message).trim().slice(0, 500));
      const cleanAvatar = String(avatar || cleanName.slice(0, 2)).trim().toUpperCase().slice(0, 4);

      const newComment = {
        id: `c-${Date.now()}`,
        name: cleanName,
        message: cleanMsg,
        avatar: cleanAvatar || "NJ",
        created_at: new Date().toISOString()
      };

      if (supabase) {
        try {
          const { data, error } = await supabase
            .from("comments")
            .insert([{ name: newComment.name, message: newComment.message, avatar: newComment.avatar }])
            .select();

          if (!error && data && data.length) {
            return res.status(201).json({ ok: true, comment: data[0], source: "supabase" });
          }
        } catch (e) {}
      }

      // Fallback in-memory
      fallbackComments.unshift(newComment);
      if (fallbackComments.length > 50) fallbackComments.pop();

      return res.status(201).json({ ok: true, comment: newComment, source: "local" });
    } catch (err) {
      return res.status(500).json({ error: "ไม่สามารถบันทึกความคิดเห็นได้" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
};
