const { describe, it, before, after } = require("node:test");
const assert = require("node:assert");

describe("Comprehensive E2E Runtime & Asset QA", () => {
  let server;
  let baseUrl;

  before(async () => {
    process.env.ADMIN_EMAIL = "admin@example.com";
    process.env.ADMIN_PASSWORD = "AdminPassword123!";
    process.env.ADMIN_NAME = "Test Admin";

    const { pool, migrate } = require("../db");
    await migrate();

    const { app, start } = require("../server");
    await new Promise((resolve) => {
      server = app.listen(0, "127.0.0.1", () => {
        const addr = server.address();
        baseUrl = `http://127.0.0.1:${addr.port}`;
        resolve();
      });
    });
  });

  after(async () => {
    if (server) await new Promise(r => server.close(r));
  });

  it("serves index.html with all required React Bits components", async () => {
    const res = await fetch(`${baseUrl}/`);
    assert.strictEqual(res.status, 200);
    const html = await res.text();

    // Check required React Bits & UI components
    assert.ok(html.includes('id="webThreadsCanvas"'), "Web Threads canvas must be present");
    assert.ok(html.includes('id="heroPromptBar"'), "Prompt Bar must be present in Hero");
    assert.ok(html.includes('id="openAddProjectBtn"'), "Add Project button must be present");
    assert.ok(html.includes('id="addProjectModal"'), "Add Project modal must be present");
    assert.ok(html.includes('id="navToggleBtn"'), "Mobile nav toggle button must be present");
    assert.ok(html.includes('id="heroHeadline"'), "Hero headline with SplitText must be present");
    assert.ok(html.includes('FlexCarousel.css'), "FlexCarousel.css link must be present");
    assert.ok(html.includes('class="flex-carousel-shell'), "FlexCarousel shell container must be present");
  });

  it("serves styles.css and FlexCarousel.css with responsive & UI rules", async () => {
    const res = await fetch(`${baseUrl}/styles.css`);
    assert.strictEqual(res.status, 200);
    const css = await res.text();

    assert.ok(css.includes(".web-threads-canvas"), "Web Threads CSS present");
    assert.ok(css.includes(".prompt-bar-container"), "Prompt Bar CSS present");
    assert.ok(css.includes(".peek-rating-container"), "Peek Rating CSS present");
    assert.ok(css.includes(".spotlight-card"), "Spotlight Card CSS present");
    assert.ok(css.includes(".shiny-text"), "Shiny Text CSS present");
    assert.ok(css.includes(".add-project-trigger-btn"), "Add project button CSS present");
    assert.ok(css.includes(".flex-carousel"), "FlexCarousel CSS present");

    const fcRes = await fetch(`${baseUrl}/FlexCarousel.css`);
    assert.strictEqual(fcRes.status, 200);
    const fcCss = await fcRes.text();
    assert.ok(fcCss.includes(".flex-carousel__reel"), "FlexCarousel.css reel rule present");
  });

  it("serves app.js with React Bits runtime engines including FlexCarousel", async () => {
    const res = await fetch(`${baseUrl}/app.js`);
    assert.strictEqual(res.status, 200);
    const js = await res.text();

    assert.ok(js.includes("function initWebThreads"), "initWebThreads present");
    assert.ok(js.includes("function initPromptBar"), "initPromptBar present");
    assert.ok(js.includes("function initLifecycleThoughtLine"), "initLifecycleThoughtLine present");
    assert.ok(js.includes("function initSpotlightCards"), "initSpotlightCards present");
    assert.ok(js.includes("function initPeekRating"), "initPeekRating present");
    assert.ok(js.includes("function initTextAnimations"), "initTextAnimations present");
    assert.ok(js.includes("function initFlexCarousel"), "initFlexCarousel present");
  });

  it("serves key portfolio assets and images", async () => {
    const images = [
      "/assets/myface.jpg",
      "/assets/UTCCcer.jpg",
      "/assets/UTCC.jpg",
      "/assets2/17-1.png",
      "/assets2/1-1.png"
    ];

    for (const imgPath of images) {
      const res = await fetch(`${baseUrl}${imgPath}`);
      assert.strictEqual(res.status, 200, `Image ${imgPath} should return 200`);
      assert.ok(res.headers.get("content-type"), `Image ${imgPath} should have content-type`);
    }
  });

  it("verifies user lifecycle: register -> login -> like multiple projects -> admin view -> logout", async () => {
    const email = `qa-${Date.now()}@example.com`;
    const password = "ValidPassword123#";

    // 1. Register
    const regRes = await fetch(`${baseUrl}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "QATester", email, password, age: 22 })
    });
    assert.strictEqual(regRes.status, 201);
    const cookie = regRes.headers.get("set-cookie").split(";")[0];

    // 2. Like UTCC project
    const like1 = await fetch(`${baseUrl}/api/projects/hackathon-manita/like`, {
      method: "POST",
      headers: { Cookie: cookie }
    });
    assert.strictEqual(like1.status, 200);
    const data1 = await like1.json();
    assert.strictEqual(data1.liked, true);

    // 3. Like drone autonomy project
    const like2 = await fetch(`${baseUrl}/api/projects/drone-autonomy/like`, {
      method: "POST",
      headers: { Cookie: cookie }
    });
    assert.strictEqual(like2.status, 200);
    const data2 = await like2.json();
    assert.strictEqual(data2.liked, true);

    // 4. Verify likes list
    const likesRes = await fetch(`${baseUrl}/api/projects/likes`, {
      headers: { Cookie: cookie }
    });
    const likesData = await likesRes.json();
    assert.ok(likesData.likedProjectIds.includes("hackathon-manita"));
    assert.ok(likesData.likedProjectIds.includes("drone-autonomy"));
    assert.ok(likesData.counts["hackathon-manita"] >= 1);
    assert.ok(likesData.counts["drone-autonomy"] >= 1);

    // 5. Logout
    const logoutRes = await fetch(`${baseUrl}/api/auth/logout`, {
      method: "POST",
      headers: { Cookie: cookie }
    });
    assert.strictEqual(logoutRes.status, 204);
  });
});
