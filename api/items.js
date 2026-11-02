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

// In-Memory store for warm serverless fallback if Supabase ever hiccups
let fallbackItems = [];

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
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Admin-Key");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // 1. GET: Fetch all public portfolio items (projects, achievements, certificates)
  if (req.method === "GET") {
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from("portfolio_items")
          .select("*")
          .order("created_at", { ascending: false });

        if (!error && Array.isArray(data)) {
          return res.status(200).json({ ok: true, items: data, source: "supabase" });
        }
      } catch (err) {}
    }

    return res.status(200).json({ ok: true, items: fallbackItems, source: "fallback" });
  }

  // 2. POST: Create a new portfolio item (Admin Only)
  if (req.method === "POST") {
    if (!checkAdmin(req)) {
      return res.status(401).json({ error: "Unauthorized: Invalid Admin Key" });
    }

    try {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
      const {
        type,
        title,
        category,
        year,
        description,
        images,
        frame_style,
        competition_level,
        award_title,
        prize_money,
        competition_type,
        team_name,
        project_name,
        tags,
        demo_url,
        canva_url,
        github_url,
        issuer,
        verify_url
      } = body;

      if (!type || !title) {
        return res.status(400).json({ error: "Missing required fields: type and title" });
      }

      const itemPayload = {
        type: String(type).toLowerCase(),
        title: String(title).trim(),
        category: category ? String(category).trim() : null,
        year: year ? String(year).trim() : "2026",
        description: description ? String(description).trim() : null,
        images: Array.isArray(images) ? images.slice(0, 5) : [],
        frame_style: frame_style || "none",
        competition_level: competition_level ? String(competition_level).trim() : null,
        award_title: award_title ? String(award_title).trim() : null,
        prize_money: Number(prize_money) || 0,
        competition_type: competition_type ? String(competition_type).trim() : null,
        team_name: team_name ? String(team_name).trim() : null,
        project_name: project_name ? String(project_name).trim() : null,
        tags: Array.isArray(tags) ? tags : typeof tags === "string" ? tags.split(",").map(t => t.trim()).filter(Boolean) : [],
        demo_url: demo_url ? String(demo_url).trim() : null,
        canva_url: canva_url ? String(canva_url).trim() : null,
        github_url: github_url ? String(github_url).trim() : null,
        issuer: issuer ? String(issuer).trim() : null,
        verify_url: verify_url ? String(verify_url).trim() : null,
        created_at: new Date().toISOString()
      };

      if (supabase) {
        try {
          const { data, error } = await supabase
            .from("portfolio_items")
            .insert([itemPayload])
            .select();

          if (!error && data && data.length) {
            return res.status(201).json({ ok: true, item: data[0], source: "supabase" });
          } else if (error) {
            console.error("Supabase insert error:", error);
          }
        } catch (err) {
          console.error("Supabase error:", err);
        }
      }

      // Fallback
      itemPayload.id = "local-" + Date.now();
      fallbackItems.unshift(itemPayload);
      return res.status(201).json({ ok: true, item: itemPayload, source: "fallback" });
    } catch (err) {
      return res.status(500).json({ error: "Failed to create item: " + err.message });
    }
  }

  // 3. DELETE: Remove a portfolio item (Admin Only)
  if (req.method === "DELETE") {
    if (!checkAdmin(req)) {
      return res.status(401).json({ error: "Unauthorized: Invalid Admin Key" });
    }

    const id = req.query?.id;
    if (!id) {
      return res.status(400).json({ error: "Missing required query parameter: id" });
    }

    if (supabase) {
      try {
        const { error } = await supabase
          .from("portfolio_items")
          .delete()
          .eq("id", id);

        if (!error) {
          fallbackItems = fallbackItems.filter(item => item.id !== id);
          return res.status(200).json({ ok: true, id, message: "Deleted from Supabase" });
        }
      } catch (err) {}
    }

    fallbackItems = fallbackItems.filter(item => item.id !== id);
    return res.status(200).json({ ok: true, id, message: "Deleted locally" });
  }

  return res.status(405).json({ error: "Method not allowed" });
};
