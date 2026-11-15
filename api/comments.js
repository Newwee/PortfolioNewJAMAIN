const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = process.env.SUPABASE_URL || "https://nbmjzhhvpksbxvqcxjpn.supabase.co";
const SUPABASE_KEY =
  process.env.SUPABASE_SECRET_KEY ||
  process.env.SUPABASE_KEY ||
  process.env.SUPABASE_PUBLISHABLE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ibWp6aGh2cGtzYnh2cWN4anBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMzNjIxMzMsImV4cCI6MjEwODkzODEzM30.1FnjKoPb2ONKQOXLQSoPbgp7utWuHkYUR-dg-nLRJoM";
const ADMIN_PASS = "Admin1230S_asdl133";

let supabase = null;
if (SUPABASE_KEY) {
  try {
    supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  } catch (e) {
    console.error("Supabase init error:", e);
  }
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

// In-Memory Fallback State (ensures 100% uptime fallback)
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
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const isAdmin = req.headers["x-admin-key"] === ADMIN_PASS || req.query?.key === ADMIN_PASS;

  // 1. GET: Fetch Comments (Filtered for public, all for Admin)
  if (req.method === "GET") {
    if (supabase) {
      try {
        // Try dedicated comments table first
        let query = supabase
          .from("comments")
          .select("id, name, message, avatar, is_flagged, flag_reason, created_at")
          .order("created_at", { ascending: false })
          .limit(100);

        if (!isAdmin) {
          query = query.or("is_flagged.is.null,is_flagged.eq.false");
        }

        const { data, error } = await query;
        if (!error && Array.isArray(data)) {
          return res.status(200).json({ ok: true, comments: data, source: "supabase" });
        }

        // If comments table does not exist, use portfolio_items table (type='comment')
        if (error && error.code === "PGRST205") {
          let pQuery = supabase
            .from("portfolio_items")
            .select("id, title, description, category, competition_type, competition_level, created_at")
            .eq("type", "comment")
            .order("created_at", { ascending: false })
            .limit(100);

          if (!isAdmin) {
            pQuery = pQuery.or("competition_type.is.null,competition_type.eq.false");
          }

          const { data: pData, error: pErr } = await pQuery;
          if (!pErr && Array.isArray(pData)) {
            const mapped = pData.map(r => ({
              id: r.id,
              name: r.title,
              message: r.description,
              avatar: r.category || (r.title ? r.title.slice(0, 2).toUpperCase() : "NJ"),
              is_flagged: r.competition_type === "true",
              flag_reason: r.competition_level || null,
              created_at: r.created_at
            }));

            return res.status(200).json({ ok: true, comments: mapped, source: "supabase" });
          }
        }
      } catch (err) {
        console.error("Supabase GET comments error:", err);
      }
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
        name: cleanName,
        message: cleanMsg,
        avatar: cleanAvatar || "NJ",
        is_flagged: isFlagged,
        flag_reason: flagReason,
        created_at: new Date().toISOString()
      };

      if (supabase) {
        try {
          // 1. Try insert into dedicated comments table
          const { data, error } = await supabase
            .from("comments")
            .insert([newComment])
            .select();

          if (!error && data && data.length) {
            return res.status(201).json({
              ok: true,
              comment: data[0],
              flagged: isFlagged,
              source: "supabase"
            });
          }

          // 2. If comments table not found, insert into portfolio_items (type='comment')
          if (error && error.code === "PGRST205") {
            const { data: pData, error: pErr } = await supabase
              .from("portfolio_items")
              .insert([{
                type: "comment",
                title: newComment.name,
                description: newComment.message,
                category: newComment.avatar,
                competition_type: isFlagged ? "true" : "false",
                competition_level: flagReason || null
              }])
              .select();

            if (!pErr && pData && pData.length) {
              const mapped = {
                id: pData[0].id,
                name: pData[0].title,
                message: pData[0].description,
                avatar: pData[0].category || "NJ",
                is_flagged: pData[0].competition_type === "true",
                flag_reason: pData[0].competition_level || null,
                created_at: pData[0].created_at
              };

              return res.status(201).json({
                ok: true,
                comment: mapped,
                flagged: isFlagged,
                source: "supabase"
              });
            }
          }
        } catch (e) {
          console.error("Supabase POST error:", e);
        }
      }

      // In-Memory Fallback
      newComment.id = `c-${Date.now()}`;
      fallbackComments.unshift(newComment);
      if (fallbackComments.length > 100) fallbackComments.pop();

      return res.status(201).json({
        ok: true,
        comment: newComment,
        flagged: isFlagged,
        source: "local"
      });
    } catch (err) {
      return res.status(500).json({ error: "ไม่สามารถบันทึกความคิดเห็นได้: " + err.message });
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
          const { error } = await supabase
            .from("comments")
            .update({ is_flagged: isFlagged, flag_reason: null })
            .eq("id", id);

          if (error && error.code === "PGRST205") {
            await supabase
              .from("portfolio_items")
              .update({
                competition_type: isFlagged ? "true" : "false",
                competition_level: isFlagged ? "แบนโดยผู้ดูแลระบบ" : null
              })
              .eq("id", id)
              .eq("type", "comment");
          }
        } catch (e) {
          console.error("Supabase PATCH error:", e);
        }
      }

      const item = fallbackComments.find(c => c.id === id);
      if (item) {
        item.is_flagged = isFlagged;
        if (!isFlagged) item.flag_reason = null;
      }

      return res.status(200).json({ ok: true, action, is_flagged: isFlagged });
    } catch (err) {
      return res.status(500).json({ error: "Failed to update comment" });
    }
  }

  // 4. DELETE: Permanent deletion (Admin Only)
  if (req.method === "DELETE") {
    if (!isAdmin) return res.status(401).json({ error: "Unauthorized" });

    const id = req.query?.id;
    if (!id) return res.status(400).json({ error: "Missing comment id" });

    if (supabase) {
      try {
        const { error } = await supabase.from("comments").delete().eq("id", id);
        if (error && error.code === "PGRST205") {
          await supabase.from("portfolio_items").delete().eq("id", id).eq("type", "comment");
        }
      } catch (e) {
        console.error("Supabase DELETE error:", e);
      }
    }

    fallbackComments = fallbackComments.filter(c => c.id !== id);

    return res.status(200).json({ ok: true, deleted: id });
  }

  return res.status(405).json({ error: "Method not allowed" });
};
