// api/admin-notify.js — Sends real-time login alerts to Pongpataradanai@gmail.com
module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    const { username, device, userAgent, ip, time, date } = body;

    const emailPayload = {
      _subject: `🚨 [SECURITY ALERT] มีการเข้าสู่ระบบ Admin Panel บนเว็บไซต์ New JA Portfolio`,
      _template: "table",
      _captcha: "false",
      "ผู้ใช้งาน (Username)": username || "Admin",
      "วันและเวลา (Bangkok Time)": time || new Date().toLocaleString("th-TH", { timeZone: "Asia/Bangkok" }),
      "อุปกรณ์ / ระบบปฏิบัติการ": device || userAgent || "Unknown Device",
      "หมายเลข IP": ip || req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "Unknown IP",
      "ระบบความปลอดภัย": "Verified Admin Clearance (Single User)"
    };

    // Forward notification to Pongpataradanai@gmail.com via verified token
    fetch("https://formsubmit.co/ajax/fa521c79a3af82c9fb8a6f503ff81e3d", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(emailPayload)
    }).catch(() => {});

    return res.status(200).json({ ok: true, message: "Login notification dispatched" });
  } catch (err) {
    return res.status(500).json({ error: "Failed to dispatch notification" });
  }
};
