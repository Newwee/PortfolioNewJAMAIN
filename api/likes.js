const fs = require("fs");
const path = require("path");

const CACHE_FILE = path.join("/tmp", "portfolio_likes.json");

// In-Memory store starting at 0 for real counting
let globalLikes = {
  "j3a-store": 0,
  "j3a-discord": 0,
  "utcc-hackathon": 0,
  "kmitl-hackathon": 0
};

// Try to read from disk cache if exists
try {
  if (fs.existsSync(CACHE_FILE)) {
    const cached = JSON.parse(fs.readFileSync(CACHE_FILE, "utf8"));
    if (cached && typeof cached === "object") {
      Object.assign(globalLikes, cached);
    }
  }
} catch (e) {}

function persistLikes() {
  try {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(globalLikes), "utf8");
  } catch (e) {}
}

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  // 1. GET: Fetch current real like counts
  if (req.method === "GET") {
    return res.status(200).json({ ok: true, likes: globalLikes });
  }

  // 2. POST: Increment real like count by +1
  if (req.method === "POST") {
    try {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
      const { id } = body;

      if (!id) return res.status(400).json({ error: "Missing like target id" });

      const nextCount = Number(globalLikes[id] || 0) + 1;
      globalLikes[id] = nextCount;
      persistLikes();

      return res.status(200).json({ ok: true, id, count: nextCount, likes: globalLikes });
    } catch (err) {
      return res.status(500).json({ error: "Failed to update like" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
};
