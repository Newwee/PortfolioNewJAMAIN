const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = process.env.SUPABASE_URL || "https://nbmjzhhvpksbxvqcxjpn.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_KEY || process.env.SUPABASE_PUBLISHABLE_KEY || "";
const ADMIN_PASS = "Admin1230S_asdl133";

let supabase = null;
if (SUPABASE_KEY) {
  try {
    supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  } catch (e) {}
}

const PROFANITY_WORDS = [
  'ไอเหี้ย', 'ไอ้เหี้ย', 'เหี้ย', 'เชี่ย', 'เชี้ย', 'ไอ้เชี่ย', 'สัส', 'สัด',
  'ไอ้สัส', 'ไอ้สัด', 'ไอัส', 'ไอสัส', 'สัตว์', 'ควย', 'ไอ้ควย', 'เย็ด', 'เยด',
  'ไอ้เย็ด', 'เย็ดแม่', 'เย็ดพ่อ', 'เย็ดมึง', 'หี', 'แตด', 'รูหี', 'หัวควย',
  'หัวดอ', 'ดอ', 'ดอกทอง', 'อีดอก', 'อีเหี้ย', 'อีสัส', 'อีควย', 'อีห่า',
  'อีแก่', 'อีเวร', 'อีชั่ว', 'ไอ้เวร', 'ไอ้ระยำ', 'ระยำ', 'ชาติหมา', 'ไอ้ชาติหมา',
  'ชาติชั่ว', 'ไอ้ชาติชั่ว', 'ส้นตีน', 'หน้าหมา', 'ไอ้หน้าหมา', 'หน้าส้นตีน',
  'ไอ้หน้าส้นตีน', 'แม่ง', 'แม่มึง', 'พ่อมึง', 'พ่อมึงตาย', 'แม่มึงตาย', 'พ่อแม่มึง',
  'พ่อแม่มึงตาย', 'พ่อมึงเป็นเหี้ย', 'แม่มึงเป็นเหี้ย', 'มึงตาย', 'ไอ้เลว', 'ไอ้ควาย',
  'โคตรโง่', 'ไอ้โง่', 'ไอ้หมา', 'ไอ้สถุน', 'สถุน', 'ถ่อย', 'อัปรีย์', 'จัญไร',
  'อีจัญไร', 'ห่า', 'ไอ้ห่า', 'เหี้ยมาก', 'โคตรเหี้ย', 'โคตรสัส', 'โคตรควย',
  'สัสเอ้ย', 'เหี้ยเอ้ย', 'ควยเอ้ย', 'ไอ้เหี้ยเอ้ย', 'ไอ้สัสเอ้ย', 'เย็ดเข้',
  'เย็ดแม่ง', 'เย็ดโคตร', 'ไปตาย', 'ไปตายซะ', 'ขอให้มึงตาย', 'ขอให้แม่มึงตาย',
  'ขอให้พ่อมึงตาย', 'ฆ่าตัวตาย', 'ตายห่า', 'ตายซะ', 'ไปลงนรก', 'สาปแช่ง',
  'fuck', 'fucker', 'fucking', 'bitch', 'shit', 'asshole', 'dick', 'pussy', 'cunt'
];

function checkProfanity(text) {
  if (!text) return { hasProfanity: false };
  const str = String(text).toLowerCase();
  for (const w of PROFANITY_WORDS) {
    if (str.includes(w.toLowerCase())) return { hasProfanity: true, matchedWord: w };
  }
  return { hasProfanity: false };
}

// In-Memory Fallback State (persists across warm serverless invocations)
let fallbackComments = [
  {
    id: "welcome-1",
    name: "New JA",
    message: "ยินดีต้อนรับสู่ Portfolio ของผมครับ! สามารถคอมเมนต์พูดคุยหรือติชมผลงานไว้ได้เลยครับ 👋🚀",
    avatar: "NJ",
    is_flagged: false,
    created_at: new Date().toISOString()
  }
];

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Admin-Key");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const isAdmin = req.headers["x-admin-key"] === ADMIN_PASS || req.query?.key === ADMIN_PASS;

  // 1. GET: Fetch Comments (Filtered for public, all for Admin)
  if (req.method === "GET") {
    if (supabase) {
      try {
        let query = supabase
          .from("comments")
          .select("id, name, message, avatar, is_flagged, flag_reason, created_at")
          .order("created_at", { ascending: false })
          .limit(100);

        if (!isAdmin) {
          query = query.or("is_flagged.is.null,is_flagged.eq.false");
        }

        const { data, error } = await query;
        if (!error && data) {
          return res.status(200).json({ ok: true, comments: data, source: "supabase" });
        }
      } catch (err) {}
    }

    const filtered = isAdmin
      ? fallbackComments
      : fallbackComments.filter(c => !c.is_flagged);

    return res.status(200).json({ ok: true, comments: filtered, source: "local" });
  }

  // 2. POST: Create new comment (with automated profanity moderation)
  if (req.method === "POST") {
    try {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
      const { name, message, avatar } = body;

      if (!name || !message) {
        return res.status(400).json({ error: "กรุณากรอกชื่อและข้อความ" });
      }

      const cleanName = String(name).trim().slice(0, 50);
      const cleanMsg = String(message).trim().slice(0, 500);
      const cleanAvatar = String(avatar || cleanName.slice(0, 2)).trim().toUpperCase().slice(0, 4);

      const checkName = checkProfanity(cleanName);
      const checkMsg = checkProfanity(cleanMsg);
      const isFlagged = checkName.hasProfanity || checkMsg.hasProfanity;
      const flagReason = checkMsg.matchedWord || checkName.matchedWord || null;

      const newComment = {
        id: `c-${Date.now()}`,
        name: cleanName,
        message: cleanMsg,
        avatar: cleanAvatar || "NJ",
        is_flagged: isFlagged,
        flag_reason: flagReason,
        created_at: new Date().toISOString()
      };

      if (supabase) {
        try {
          const { data, error } = await supabase
            .from("comments")
            .insert([{
              name: newComment.name,
              message: newComment.message,
              avatar: newComment.avatar,
              is_flagged: newComment.is_flagged,
              flag_reason: newComment.flag_reason
            }])
            .select();

          if (!error && data && data.length) {
            return res.status(201).json({
              ok: true,
              comment: data[0],
              flagged: isFlagged,
              source: "supabase"
            });
          }
        } catch (e) {}
      }

      fallbackComments.unshift(newComment);
      if (fallbackComments.length > 100) fallbackComments.pop();

      return res.status(201).json({
        ok: true,
        comment: newComment,
        flagged: isFlagged,
        source: "local"
      });
    } catch (err) {
      return res.status(500).json({ error: "ไม่สามารถบันทึกความคิดเห็นได้" });
    }
  }

  // 3. PATCH: Moderation Action (Unban / Approve / Ban)
  if (req.method === "PATCH") {
    if (!isAdmin) return res.status(401).json({ error: "Unauthorized" });

    try {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
      const { id, action } = body;

      if (!id) return res.status(400).json({ error: "Missing comment id" });

      const isFlagged = action === "unban" ? false : true;

      if (supabase) {
        try {
          await supabase
            .from("comments")
            .update({ is_flagged: isFlagged, flag_reason: null })
            .eq("id", id);
        } catch (e) {}
      }

      const item = fallbackComments.find(c => c.id === id);
      if (item) {
        item.is_flagged = isFlagged;
        if (!isFlagged) item.flag_reason = null;
      }

      return res.status(200).json({ ok: true, action, id });
    } catch (err) {
      return res.status(500).json({ error: "Failed to update comment status" });
    }
  }

  // 4. DELETE: Delete comment
  if (req.method === "DELETE") {
    if (!isAdmin) return res.status(401).json({ error: "Unauthorized" });

    try {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
      const id = body.id || req.query?.id;

      if (!id) return res.status(400).json({ error: "Missing comment id" });

      if (supabase) {
        try {
          await supabase.from("comments").delete().eq("id", id);
        } catch (e) {}
      }

      fallbackComments = fallbackComments.filter(c => c.id !== id);
      return res.status(200).json({ ok: true, deleted: id });
    } catch (err) {
      return res.status(500).json({ error: "Failed to delete comment" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
};