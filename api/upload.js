const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = process.env.SUPABASE_URL || "https://nbmjzhhvpksbxvqcxjpn.supabase.co";
const SUPABASE_KEY =
  process.env.SUPABASE_SECRET_KEY ||
  process.env.SUPABASE_KEY ||
  process.env.SUPABASE_PUBLISHABLE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ibWp6aGh2cGtzYnh2cWN4anBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMzNjIxMzMsImV4cCI6MjEwODkzODEzM30.1FnjKoPb2ONKQOXLQSoPbgp7utWuHkYUR-dg-nLRJoM";

const ADMIN_PASSES = ["Admin1230S_asdl133", "newja2026", "admin2026"];

let supabase = null;
if (SUPABASE_KEY) {
  try {
    supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  } catch (e) {}
}

function checkAdmin(req) {
  const headerKey = req.headers["x-admin-key"];
  const queryKey = req.query?.key;
  let bodyKey = null;
  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    bodyKey = body.adminKey;
  } catch (e) {}

  const key = headerKey || queryKey || bodyKey;
  return key && ADMIN_PASSES.includes(String(key).trim());
}

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Admin-Key");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!checkAdmin(req)) {
    return res.status(401).json({ error: "Unauthorized: Invalid Admin Key" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    const { filename, data, contentType } = body;

    if (!data) {
      return res.status(400).json({ error: "Missing image data" });
    }

    // Clean base64 and ext
    const mimeMatch = data.match(/^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+);base64,/);
    const mime = contentType || (mimeMatch ? mimeMatch[1] : "image/jpeg");
    const base64Data = data.replace(/^data:image\/[a-zA-Z0-9-.+]+;base64,/, "");
    const buffer = Buffer.from(base64Data, "base64");

    const ext = mime.includes("png") ? "png" : mime.includes("webp") ? "webp" : "jpg";
    const timestamp = Date.now();
    const randomHex = Math.random().toString(36).substring(2, 8);
    const safeBaseName = (filename || "upload").replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 30);
    const cleanFilename = `${timestamp}_${randomHex}_${safeBaseName}.${ext}`;

    if (supabase) {
      try {
        const { error: uploadErr } = await supabase.storage
          .from("portfolio_uploads")
          .upload(cleanFilename, buffer, {
            contentType: mime,
            upsert: true
          });

        if (!uploadErr) {
          const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/portfolio_uploads/${cleanFilename}`;
          return res.status(200).json({ ok: true, url: publicUrl, source: "supabase_storage" });
        } else {
          console.error("Storage upload error:", uploadErr);
        }
      } catch (err) {
        console.error("Storage upload exception:", err);
      }
    }

    // Fallback: return data URL directly so image is never lost
    return res.status(200).json({
      ok: true,
      url: data.startsWith("data:") ? data : `data:${mime};base64,${base64Data}`,
      source: "data_url_fallback"
    });
  } catch (err) {
    return res.status(500).json({ error: "Failed to process upload: " + err.message });
  }
};
