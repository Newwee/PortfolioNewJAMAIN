const { describe, it, before, after } = require("node:test");
const assert = require("node:assert");
const http = require("node:http");

describe("Portfolio Backend & API Test Suite", () => {
  let server;
  let baseUrl;
  let testUserCookie = "";
  let adminCookie = "";

  before(async () => {
    process.env.ADMIN_EMAIL = "admin@example.com";
    process.env.ADMIN_PASSWORD = "AdminPassword123!";
    process.env.ADMIN_NAME = "Test Admin";

    const { pool, migrate } = require("../db");
    await migrate();

    const { app, start } = require("../server");
    // Start listening on ephemeral port
    await new Promise((resolve) => {
      server = app.listen(0, "127.0.0.1", () => {
        const address = server.address();
        baseUrl = `http://127.0.0.1:${address.port}`;
        resolve();
      });
    });
  });

  after(async () => {
    if (server) {
      await new Promise((resolve) => server.close(resolve));
    }
  });

  it("checks database connection and migration", async () => {
    const { pool } = require("../db");
    const res = await pool.query("SELECT 1 as alive");
    assert.strictEqual(res.rows[0].alive, 1);
  });

  it("GET /health returns ok", async () => {
    const res = await fetch(`${baseUrl}/health`);
    assert.strictEqual(res.status, 200);
    const body = await res.json();
    assert.strictEqual(body.ok, true);
    assert.strictEqual(body.service, "newja-portfolio");
  });

  it("POST /api/auth/register registers new user and sets session cookie", async () => {
    const email = `test-${Date.now()}@example.com`;
    const res = await fetch(`${baseUrl}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "Tester",
        email: email,
        password: "SecurePassword123!",
        age: 20
      })
    });
    assert.strictEqual(res.status, 201);
    const cookie = res.headers.get("set-cookie");
    assert.ok(cookie && cookie.includes("newja_session"));
    testUserCookie = cookie.split(";")[0];
    const data = await res.json();
    assert.strictEqual(data.user.email, email);
    assert.strictEqual(data.user.role, "user");
  });

  it("GET /api/auth/me returns current user with session cookie", async () => {
    const res = await fetch(`${baseUrl}/api/auth/me`, {
      headers: { Cookie: testUserCookie }
    });
    assert.strictEqual(res.status, 200);
    const data = await res.json();
    assert.ok(data.user);
    assert.strictEqual(data.user.username, "Tester");
  });

  it("POST /api/projects/:projectId/like toggles likes", async () => {
    // Like
    const res1 = await fetch(`${baseUrl}/api/projects/hackathon-manita/like`, {
      method: "POST",
      headers: { Cookie: testUserCookie }
    });
    assert.strictEqual(res1.status, 200);
    const data1 = await res1.json();
    assert.strictEqual(data1.liked, true);

    // Verify in likes
    const likesRes = await fetch(`${baseUrl}/api/projects/likes`, {
      headers: { Cookie: testUserCookie }
    });
    const likesData = await likesRes.json();
    assert.ok(likesData.likedProjectIds.includes("hackathon-manita"));
    assert.ok(likesData.counts["hackathon-manita"] >= 1);

    // Unlike
    const res2 = await fetch(`${baseUrl}/api/projects/hackathon-manita/like`, {
      method: "POST",
      headers: { Cookie: testUserCookie }
    });
    const data2 = await res2.json();
    assert.strictEqual(data2.liked, false);
  });

  it("POST /api/auth/logout clears session", async () => {
    const res = await fetch(`${baseUrl}/api/auth/logout`, {
      method: "POST",
      headers: { Cookie: testUserCookie }
    });
    assert.strictEqual(res.status, 204);

    const meRes = await fetch(`${baseUrl}/api/auth/me`, {
      headers: { Cookie: testUserCookie }
    });
    const meData = await meRes.json();
    assert.strictEqual(meData.user, null);
  });

  it("admin login and access to /api/admin/overview & /api/admin/logs", async () => {
    // Seed admin if not already seeded
    const bcrypt = require("bcryptjs");
    const { pool } = require("../db");
    const passwordHash = await bcrypt.hash("AdminPassword123!", 12);
    await pool.query(
      `INSERT INTO users (username, email, password_hash, age, role)
       VALUES ($1, $2, $3, $4, 'admin')
       ON CONFLICT (email) DO UPDATE SET role = 'admin', password_hash = EXCLUDED.password_hash`,
      ["Test Admin", "admin@example.com", passwordHash, 17]
    );

    const loginRes = await fetch(`${baseUrl}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "admin@example.com",
        password: "AdminPassword123!"
      })
    });
    assert.strictEqual(loginRes.status, 200);
    const cookie = loginRes.headers.get("set-cookie").split(";")[0];
    const data = await loginRes.json();
    assert.strictEqual(data.user.role, "admin");

    const overviewRes = await fetch(`${baseUrl}/api/admin/overview`, {
      headers: { Cookie: cookie }
    });
    assert.strictEqual(overviewRes.status, 200);
    const overview = await overviewRes.json();
    assert.ok(Array.isArray(overview.users));
    assert.ok(Array.isArray(overview.likes));

    const logsRes = await fetch(`${baseUrl}/api/admin/logs`, {
      headers: { Cookie: cookie }
    });
    assert.strictEqual(logsRes.status, 200);
    const logs = await logsRes.json();
    assert.ok(Array.isArray(logs.logs));
  });
});
