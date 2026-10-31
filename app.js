/* ==============================================================================
   🚀 New JA Portfolio — Senior Creative Developer Engine
   Supabase Realtime Comments • 3D Lanyard Physics • Mask Reveal • 3D Laptop Stage
   Web Audio Synthesizer • Typewriter • Spotlight Cards
   ============================================================================== */

// ─── 1. GLOBAL STATE & CONFIGURATION ─────────────────────────────────────────
// 🎵 SPOTIFY CONFIGURATION: ปรับเปลี่ยนลิงก์ Playlist หรือ Track ได้ที่นี่โดยตรง
const SPOTIFY_CONFIG = {
  title: "A little music.<br /><span class=\"text-blue-400\">A lot of ideas.</span>",
  playlistUrl: "https://open.spotify.com/playlist/6qM9smcDFHdPK2UTYKzAzd?si=264c5e89d1584525",
  embedUrl: "https://open.spotify.com/embed/playlist/6qM9smcDFHdPK2UTYKzAzd?utm_source=generator&theme=0"
};

const state = {
  soundEnabled: true,
  soundVolume: 0.75,
  audioCtx: null,
  comments: [],
  spotify: SPOTIFY_CONFIG,
  projects: {
    "J3A STORE": {
      title: "J3A STORE",
      tag: "Web Application & Commerce Automation",
      desc: `พัฒนาเว็บแอปพลิเคชันสำหรับจำหน่ายซอฟต์แวร์และสินค้าดิจิทัล โดยมีระบบสมาชิก การสั่งซื้อสินค้า การเติมเงิน ระบบจัดการคำสั่งซื้อ และการออก License Key อัตโนมัติ พร้อมระบบแจ้งเตือนผ่าน Discord และหน้าจัดการสำหรับผู้ดูแลระบบ\n\nมุ่งเน้นการลดขั้นตอนการซื้อขายด้วยมือและเพิ่มความสะดวกให้แก่ผู้ใช้งาน ผลงานนี้แสดงถึงความสนใจในการพัฒนา Web Application การเชื่อมต่อ API การจัดการฐานข้อมูล และการออกแบบระบบอัตโนมัติ`,
      techs: ["React", "Node.js", "Express", "Discord API", "Tailwind CSS", "Database Automation"],
      image: "assets/j3a-store.png",
      canva: "https://canva.link/u57aa4fqg7cvr0y",
      liveUrl: "https://j3a-store.vercel.app/"
    },
    "J3A Discord Manager": {
      title: "J3A Discord Manager",
      tag: "Discord Bot & Role Studio Automation",
      desc: `พัฒนาโปรแกรมสำหรับสร้างและจัดการโครงสร้างเซิร์ฟเวอร์ Discord โดยรองรับการสร้างห้องและหมวดหมู่ การจัดการยศและสิทธิ์การเข้าถึงหลายรายการพร้อมกัน รวมถึงการใช้แม่แบบสำเร็จรูปเพื่อช่วยลดขั้นตอนการตั้งค่าเซิร์ฟเวอร์\n\nมีหน้าจอควบคุมสำหรับติดตามการทำงานและแสดงความคืบหน้าของระบบ ผลงานนี้แสดงถึงความสนใจในการพัฒนาโปรแกรม การเชื่อมต่อ Discord API การออกแบบระบบอัตโนมัติ และการแก้ปัญหาด้วยกระบวนการทางซอฟต์แวร์`,
      techs: ["Discord API", "Role Studio", "Channel Architect", "JavaScript / TS", "Template Engine", "Process Monitor"],
      image: "assets/j3a-discord-manager.png",
      canva: "https://canva.link/x9hqhoiqjwvr499",
      liveUrl: null
    }
  }
};

// ─── 2. TOAST NOTIFICATION HELPER (React Bits SwipeToast Engine) ────────────
let swipeToastManager = null;
async function getSwipeToastManager() {
  if (swipeToastManager) return swipeToastManager;
  try {
    const { createSwipeToastManager } = await import("./swipe-toast.js");
    swipeToastManager = createSwipeToastManager();
    return swipeToastManager;
  } catch (err) {
    return null;
  }
}

async function showToast(titleOrMsg, description = "", options = {}) {
  playBeep(600, 0.05);

  try {
    const manager = await getSwipeToastManager();
    if (manager) {
      let title = typeof titleOrMsg === "string" ? titleOrMsg : (titleOrMsg?.title || "แจ้งเตือนระบบ");
      let desc = description;
      if (!desc && typeof titleOrMsg === "string" && titleOrMsg.length > 25) {
        desc = titleOrMsg;
        title = "แจ้งเตือนระบบ";
      }
      manager.show({
        title,
        description: desc,
        duration: options.duration || 4200,
        fuseColor: options.fuseColor || "#38bdf8",
        ...options
      });
      return;
    }
  } catch (e) {}

  // Native fallback if dynamic import unavailable
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = typeof titleOrMsg === "string" ? titleOrMsg : titleOrMsg.title;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// ─── 3. WEB AUDIO SYNTHESIZER (No External Files Required) ───────────────────
function playBeep(freq = 440, duration = 0.08, type = "sine") {
  if (!state.soundEnabled) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!state.audioCtx) state.audioCtx = new AudioContext();
    if (state.audioCtx.state === "suspended") {
      state.audioCtx.resume();
    }

    const osc = state.audioCtx.createOscillator();
    const gain = state.audioCtx.createGain();

    const masterVol = typeof state.soundVolume === "number" ? state.soundVolume : 0.75;
    const peakGain = 0.1 * masterVol;

    osc.type = type;
    osc.frequency.setValueAtTime(freq, state.audioCtx.currentTime);

    gain.gain.setValueAtTime(Math.max(peakGain, 0.001), state.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, state.audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(state.audioCtx.destination);

    osc.start();
    osc.stop(state.audioCtx.currentTime + duration);
  } catch (e) {}
}

// Toggle Sound
const soundBtn = document.getElementById("sound-btn");
if (soundBtn) {
  soundBtn.addEventListener("click", () => {
    state.soundEnabled = !state.soundEnabled;
    soundBtn.innerHTML = state.soundEnabled
      ? '<i data-lucide="volume-2" class="w-4 h-4"></i>'
      : '<i data-lucide="volume-x" class="w-4 h-4 text-rose-400"></i>';
    if (window.lucide) lucide.createIcons();
    showToast(state.soundEnabled ? "เปิดเสียง UI เอฟเฟกต์แล้ว" : "ปิดเสียง UI เอฟเฟกต์แล้ว");
    if (state.soundEnabled) playBeep(880, 0.1);
  });
}

// ─── 4. PRELOADER COUNTUP (0% -> 100%) ──────────────────────────────────────
function initPreloader() {
  const loader = document.getElementById("welcome-screen") || document.getElementById("loader");
  const percentEl = document.getElementById("loader-percent");
  const barEl = document.getElementById("loader-bar");
  if (!loader || !percentEl || !barEl) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 12) + 6;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => {
        loader.classList.add("is-leaving");
        loader.classList.add("loaded");
        playBeep(523.25, 0.12);
        setTimeout(() => playBeep(659.25, 0.12), 80);
        setTimeout(() => playBeep(783.99, 0.2), 160);
        setTimeout(() => {
          if (loader.parentNode) loader.parentNode.removeChild(loader);
        }, 800);
      }, 250);
    }
    if (percentEl.firstChild && percentEl.firstChild.nodeType === Node.TEXT_NODE) {
      percentEl.firstChild.nodeValue = progress;
    } else {
      percentEl.innerHTML = `${progress}<span>%</span>`;
    }
    barEl.style.transform = `scaleX(${progress / 100})`;
    barEl.style.width = `${progress}%`;
  }, 50);
}

// ─── 5.1. NAVBAR SCROLLSPY & SMOOTH NAVIGATION ──────────────────────────
function initNavbarScrollSpy() {
  const navWrap = document.querySelector(".nav-pill-wrap");
  const navItems = document.querySelectorAll(".nav-item");
  const sectionIds = ["home", "about", "portfolio", "services", "contact"];
  const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

  if (!navItems.length || !sections.length) return;

  function setActive(id) {
    navItems.forEach((item) => {
      const href = item.getAttribute("href");
      if (href === `#${id}`) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  let ticking = false;
  function updateActiveNav() {
    const scrollPos = window.scrollY;

    // Header scrolled elevation style
    if (navWrap) {
      if (scrollPos > 30) {
        navWrap.classList.add("nav-scrolled");
      } else {
        navWrap.classList.remove("nav-scrolled");
      }
    }

    // Bottom of page check -> activate contact
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
      setActive("contact");
      return;
    }

    // Determine active section using viewport boundary
    let currentId = sections[0].id;
    const triggerOffset = Math.max(180, window.innerHeight * 0.3);

    for (let i = sections.length - 1; i >= 0; i--) {
      const sec = sections[i];
      const rect = sec.getBoundingClientRect();
      if (rect.top <= triggerOffset && rect.bottom >= 60) {
        currentId = sec.id;
        break;
      }
    }

    setActive(currentId);
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveNav();
        ticking = false;
      });
      ticking = true;
    }
  }

  // Smooth click navigation
  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      const href = item.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const targetId = href.replace("#", "");
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        e.preventDefault();
        playBeep(440, 0.05);
        setActive(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
        if (history.pushState) {
          history.pushState(null, "", `#${targetId}`);
        }
      }
    });
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.replace("#", "");
    if (hash && document.getElementById(hash)) {
      setActive(hash);
    }
  });

  // Initial position check
  setTimeout(() => {
    const initialHash = window.location.hash.replace("#", "");
    if (initialHash && document.getElementById(initialHash)) {
      setActive(initialHash);
    } else {
      updateActiveNav();
    }
  }, 50);
}

// ─── 5. BACKGROUND STARFIELD CANVAS ─────────────────────────────────────────
function initStarfield() {
  const canvas = document.getElementById("starfield");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let stars = [];
  let shootingStars = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = Array.from({ length: 140 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.3 + 0.3,
      alpha: Math.random() * 0.7 + 0.3,
      speed: Math.random() * 0.35 + 0.08
    }));
  }

  function spawnShootingStar() {
    if (Math.random() < 0.015 && shootingStars.length < 3) {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * (canvas.height * 0.4),
        len: Math.random() * 80 + 40,
        speed: Math.random() * 7 + 9,
        angle: Math.PI / 4,
        alpha: 1
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Drifting Stars
    ctx.fillStyle = "#ffffff";
    stars.forEach((s) => {
      ctx.globalAlpha = s.alpha;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fill();

      s.y -= s.speed;
      if (s.y < 0) s.y = canvas.height;
    });

    // Shooting Stars
    spawnShootingStar();
    shootingStars.forEach((st, idx) => {
      ctx.strokeStyle = `rgba(56, 189, 248, ${st.alpha})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(st.x, st.y);
      ctx.lineTo(st.x - Math.cos(st.angle) * st.len, st.y - Math.sin(st.angle) * st.len);
      ctx.stroke();

      st.x += Math.cos(st.angle) * st.speed;
      st.y += Math.sin(st.angle) * st.speed;
      st.alpha -= 0.02;

      if (st.alpha <= 0 || st.x > canvas.width || st.y > canvas.height) {
        shootingStars.splice(idx, 1);
      }
    });

    ctx.globalAlpha = 1;
    requestAnimationFrame(animate);
  }

  window.addEventListener("resize", resize);
  resize();
  animate();
}

// ─── 6. 3D INTERACTIVE LANYARD PHYSICS & FLIP (React Bits Engine) ───────────
async function initLanyard() {
  const container = document.getElementById("lanyard-container");
  if (!container) return;

  try {
    const { initLanyard: mountLanyard } = await import("./lanyard.js");
    const isDesktop = window.innerWidth >= 768;
    const lanyard = mountLanyard(container, {
      frontImage: "assets/badge-front.png",
      backImage: "assets/badge-back.png",
      strapImage: "assets/badge-strap.png",
      cardColor: "#04010e",
      strapColor: "#111827",
      strapWidth: 0.62,
      strapLength: 0.52,
      anchor: isDesktop ? 0.85 : 0.5,
      size: isDesktop ? 0.50 : 0.46,
      cornerRadius: 0.25,
      finish: "glossy",
      metal: "silver",
      gravity: 1.2,
      damping: 0.35,
      elasticity: 0.7,
      breeze: 0.15,
      interactive: true,
      autoFlip: true,
      intro: false
    });

    const flipBtn = document.getElementById("lanyard-flip-btn");
    if (flipBtn && lanyard) {
      flipBtn.addEventListener("click", () => {
        lanyard.flip();
        playBeep(480, 0.08);
      });
    }
  } catch (err) {
    console.error("Failed to initialize 3D Lanyard:", err);
  }
}

// ─── 7. MOUSE HOVER MASK REVEAL (Hero Mask Effect) ──────────────────────────
function initMaskReveal() {
  const container = document.getElementById("mask-container");
  const layer = document.getElementById("mask-layer");
  if (!container || !layer) return;

  const updateMask = (clientX, clientY) => {
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    layer.style.setProperty("--reveal-x", `${x}px`);
    layer.style.setProperty("--reveal-y", `${y}px`);
  };

  container.addEventListener("mousemove", (e) => updateMask(e.clientX, e.clientY));
  container.addEventListener("touchmove", (e) => {
    if (e.touches && e.touches[0]) {
      updateMask(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  container.addEventListener("mouseleave", () => {
    layer.style.setProperty("--reveal-x", "-300px");
    layer.style.setProperty("--reveal-y", "-300px");
  });
  container.addEventListener("touchend", () => {
    layer.style.setProperty("--reveal-x", "-300px");
    layer.style.setProperty("--reveal-y", "-300px");
  });
}

// ─── 8. TYPEWRITER SUBTITLE EFFECT ──────────────────────────────────────────
function initTypewriter() {
  const target = document.getElementById("typewriter");
  if (!target) return;

  const roles = [
    "Problem Solver & Bug Fixer",
    "Web Maintenance & Developer",
    "Fullstack & Discord Architect",
    "AI & STEM Innovator (แชมป์ระดับชาติ)",
    "NMRTUP Grade 12 | Sci - Math"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function type() {
    const current = roles[roleIdx];
    target.textContent = current.substring(0, charIdx);

    if (!isDeleting && charIdx < current.length) {
      charIdx++;
      setTimeout(type, 65);
    } else if (isDeleting && charIdx > 0) {
      charIdx--;
      setTimeout(type, 35);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        roleIdx = (roleIdx + 1) % roles.length;
      }
      setTimeout(type, isDeleting ? 1600 : 350);
    }
  }

  type();
}

// ─── 9. SPOTLIGHT CARD TRACKER ──────────────────────────────────────────────
function initSpotlightCards() {
  document.querySelectorAll(".spotlight-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    });
  });
}

// ─── 10. PORTFOLIO TABS SWITCHER ────────────────────────────────────────────
window.switchTab = function(tabName) {
  playBeep(520, 0.06);

  document.querySelectorAll(".tab-content").forEach((el) => el.classList.add("hidden"));
  const targetContent = document.getElementById(`content-${tabName}`);
  if (targetContent) targetContent.classList.remove("hidden");

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove(
      "bg-blue-600",
      "text-white",
      "bg-gradient-to-r",
      "from-amber-500",
      "via-yellow-500",
      "to-amber-500",
      "text-slate-950",
      "shadow-[0_0_28px_rgba(245,158,11,0.65)]"
    );
    if (btn.id !== "tab-achievements") {
      btn.classList.add("text-slate-400");
    } else {
      btn.classList.add("text-amber-300");
    }
  });

  const activeBtn = document.getElementById(`tab-${tabName}`);
  if (activeBtn) {
    if (tabName === "achievements") {
      activeBtn.classList.add(
        "bg-gradient-to-r",
        "from-amber-500",
        "via-yellow-500",
        "to-amber-500",
        "text-slate-950",
        "shadow-[0_0_28px_rgba(245,158,11,0.65)]"
      );
      activeBtn.classList.remove("text-amber-300");
      triggerAchievementsCountUps();
    } else {
      activeBtn.classList.add("bg-blue-600", "text-white");
      activeBtn.classList.remove("text-slate-400");
    }
  }

  if (window.lucide) lucide.createIcons();
};

let countUpModule = null;
async function triggerAchievementsCountUps() {
  try {
    if (!countUpModule) {
      countUpModule = await import("./count-up.js");
    }
    const container = document.getElementById("content-achievements");
    if (!container) return;
    const counters = container.querySelectorAll("[data-countup-to]");
    counters.forEach((el) => {
      countUpModule.animateCountUp(el);
    });
  } catch (err) {
    console.warn("CountUp trigger error:", err);
  }
}

// ─── 11. CERTIFICATES EXPAND & LIGHTBOX MODAL ───────────────────────────────
window.toggleMoreCertificates = function() {
  playBeep(520, 0.06);
  const moreCerts = document.getElementById("more-certificates");
  const txt = document.getElementById("txt-toggle-certs");
  const icon = document.getElementById("icon-toggle-certs");
  if (!moreCerts) return;

  const isHidden = moreCerts.classList.contains("hidden");
  if (isHidden) {
    moreCerts.classList.remove("hidden");
    if (txt) txt.textContent = "ย่อใบรับรองกลับ ↑";
    if (icon) icon.style.transform = "rotate(180deg)";
  } else {
    moreCerts.classList.add("hidden");
    if (txt) txt.textContent = "ดูใบรับรองเพิ่มเติม (+8 ใบเซอร์)";
    if (icon) icon.style.transform = "rotate(0deg)";
  }
  if (window.lucide) lucide.createIcons();
};

window.openCertModal = function(imgSrc, title, issuer) {
  playBeep(640, 0.08);
  const modal = document.getElementById("cert-lightbox-modal");
  const imgEl = document.getElementById("cert-modal-img");
  const titleEl = document.getElementById("cert-modal-title");
  const issuerEl = document.getElementById("cert-modal-issuer");

  if (imgEl) imgEl.src = imgSrc;
  if (titleEl) titleEl.textContent = title;
  if (issuerEl) issuerEl.textContent = issuer;

  if (modal) {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
  if (window.lucide) lucide.createIcons();
};

window.closeCertModal = function() {
  playBeep(420, 0.06);
  const modal = document.getElementById("cert-lightbox-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
};

// ─── 12. PROJECT DETAIL MODAL (3D LAPTOP MOCKUP VIEW) ───────────────────────
window.openProjectDetail = function(title) {
  playBeep(640, 0.08);
  const p = state.projects[title];
  if (!p) return;

  const modal = document.getElementById("project-modal");
  document.getElementById("modal-title").textContent = p.title;
  document.getElementById("modal-breadcrumb").textContent = p.title;
  document.getElementById("modal-tag").textContent = p.tag;
  document.getElementById("modal-desc").textContent = p.desc;
  document.getElementById("modal-screen-img").src = p.image;

  // Live URL Button
  const liveBtn = document.getElementById("modal-live-link");
  if (liveBtn) {
    if (p.liveUrl) {
      liveBtn.href = p.liveUrl;
      liveBtn.classList.remove("hidden");
      liveBtn.innerHTML = `<i data-lucide="globe" class="w-4 h-4"></i><span>เข้าชมเว็บไซต์จริง (Live Demo) ↗</span>`;
    } else {
      liveBtn.classList.add("hidden");
    }
  }

  // Canva Presentation Link
  const canvaLink = document.getElementById("modal-canva-link");
  if (canvaLink) canvaLink.href = p.canva;

  const techsWrap = document.getElementById("modal-techs");
  if (techsWrap) {
    techsWrap.innerHTML = p.techs
      .map(
        (t) =>
          `<span class="px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-xs font-semibold text-slate-200">${t}</span>`
      )
      .join("");
  }

  if (modal) {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
  if (window.lucide) lucide.createIcons();
};

window.closeProjectDetail = function() {
  playBeep(420, 0.06);
  const modal = document.getElementById("project-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
};

// ─── 12. REALTIME COMMENTS WITH SUPABASE & LOCAL STORAGE FALLBACK ─────────
const DEFAULT_COMMENTS = [
  {
    id: "welcome-1",
    name: "New JA",
    message: "ยินดีต้อนรับสู่ Portfolio ของผมครับ! สามารถคอมเมนต์พูดคุยหรือติชมผลงานไว้ได้เลยครับ 👋🚀",
    avatar: "NJ",
    created_at: new Date().toISOString()
  }
];

async function loadComments() {
  const listEl = document.getElementById("comment-list");
  const countEl = document.getElementById("comment-count");

  let comments = [];

  try {
    const res = await fetch("/api/comments");
    if (res.ok) {
      const data = await res.json();
      const list = Array.isArray(data) ? data : (data.comments || []);
      if (list && list.length) {
        comments = list;
        try {
          localStorage.setItem("newja_comments", JSON.stringify(comments));
        } catch (e) {}
      }
    }
  } catch (err) {}

  if (!comments.length) {
    try {
      const cached = localStorage.getItem("newja_comments");
      if (cached) {
        comments = JSON.parse(cached);
      }
    } catch (e) {}
  }

  if (!comments.length) {
    comments = DEFAULT_COMMENTS;
  }

  state.comments = comments;
  if (countEl) countEl.textContent = state.comments.length;

  if (listEl) {
    if (state.comments.length === 0) {
      listEl.innerHTML = `<p class="text-xs text-slate-500 text-center py-6">ยังไม่มีความคิดเห็น เป็นคนแรกที่แสดงความคิดเห็นได้เลยครับ!</p>`;
      return;
    }

    listEl.innerHTML = state.comments
      .map((c) => {
        const avatar = c.avatar || (c.name ? c.name.slice(0, 2).toUpperCase() : "NJ");
        const timeStr = c.created_at ? new Date(c.created_at).toLocaleDateString("th-TH") : "ล่าสุด";

        return `
          <div class="p-4 rounded-2xl bg-slate-900/90 border border-white/10 flex items-start gap-3.5 group hover:border-blue-500/30 transition">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-xs shrink-0 shadow-md">
              ${avatar}
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex justify-between items-center">
                <span class="text-xs font-bold text-white truncate">${c.name}</span>
                <span class="text-[10px] text-slate-500">${timeStr}</span>
              </div>
              <p class="text-xs text-slate-300 mt-1 leading-relaxed break-words">${c.message}</p>
            </div>
          </div>
        `;
      })
      .join("");

    if (window.lucide) lucide.createIcons();
  }
}

window.handlePostComment = async function(e) {
  e.preventDefault();
  const nameInput = document.getElementById("comment-name");
  const avatarInput = document.getElementById("comment-avatar");
  const msgInput = document.getElementById("comment-text");
  const btn = document.getElementById("comment-submit-btn");

  const name = nameInput?.value.trim();
  const avatar = avatarInput?.value.trim();
  const message = msgInput?.value.trim();

  if (!name || !message) {
    showToast("กรุณากรอกชื่อและข้อความ");
    return;
  }

  if (btn) btn.disabled = true;

  const newComment = {
    id: `c-${Date.now()}`,
    name,
    avatar: (avatar || name.slice(0, 2)).toUpperCase(),
    message,
    created_at: new Date().toISOString()
  };

  try {
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, avatar, message })
    });

    if (res.ok) {
      if (msgInput) msgInput.value = "";
      showToast("โพสต์ความคิดเห็นสำเร็จ!");
      playBeep(700, 0.1);
      await loadComments();
      return;
    }
  } catch (err) {}

  // Local Storage Fallback ensures instant responsiveness
  try {
    let localComments = [];
    const cached = localStorage.getItem("newja_comments");
    if (cached) localComments = JSON.parse(cached);
    if (!localComments.length) localComments = [...DEFAULT_COMMENTS];
    localComments.unshift(newComment);
    localStorage.setItem("newja_comments", JSON.stringify(localComments));
    if (msgInput) msgInput.value = "";
    showToast("โพสต์ความคิดเห็นสำเร็จ!");
    playBeep(700, 0.1);
    await loadComments();
  } catch (err) {
    showToast("เกิดข้อผิดพลาดในการบันทึกความคิดเห็น");
  } finally {
    if (btn) btn.disabled = false;
  }
};

window.handleDeleteComment = function() {
  showToast({
    title: "ไม่อนุญาตให้ลบ",
    description: "เฉพาะผู้ดูแลระบบ (Admin) เท่านั้นที่สามารถลบหรือจัดการความคิดเห็นได้",
    fuseColor: "#f43f5e"
  });
};

// ─── 13. SPOTIFY PLAYLIST INITIALIZATION ────────────────────────────────────
function initSpotify() {
  const iframe = document.getElementById("spotify-iframe");
  const heading = document.getElementById("spotify-heading");
  const link = document.getElementById("spotify-external-link");

  if (heading && SPOTIFY_CONFIG.title) {
    heading.innerHTML = SPOTIFY_CONFIG.title;
  }
  if (iframe && SPOTIFY_CONFIG.embedUrl) {
    iframe.src = SPOTIFY_CONFIG.embedUrl;
  }
  if (link && SPOTIFY_CONFIG.playlistUrl) {
    link.href = SPOTIFY_CONFIG.playlistUrl;
  }
}

// ─── 14. CONTACT FORM SUBMISSION ────────────────────────────────────────────
window.handleSendContact = async function(e) {
  e.preventDefault();
  const name = document.getElementById("contact-name")?.value.trim() || "";
  const email = document.getElementById("contact-email")?.value.trim() || "";
  const msg = document.getElementById("contact-msg")?.value.trim() || "";
  const submitBtn = document.getElementById("contact-submit-btn");

  // Strict email validation: Must be valid format AND end with @gmail.com
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
  if (!gmailRegex.test(email)) {
    showToast({
      title: "อีเมลต้องเป็น @gmail.com เท่านั้น",
      description: "ระบบบังคับให้ใช้อีเมล @gmail.com เท่านั้น เพื่อความปลอดภัยและยืนยันตัวตนจริง กรุณาตรวจสอบอีเมลของคุณอีกครั้ง (ตัวอย่าง: yourname@gmail.com)",
      fuseColor: "#f43f5e"
    });
    return;
  }

  const userPart = email.split("@")[0];
  if (userPart.length < 3 || userPart.includes("..")) {
    showToast({
      title: "รูปแบบอีเมลไม่ถูกต้อง",
      description: "กรุณาระบุชื่อบัญชี Gmail ที่ถูกต้อง",
      fuseColor: "#f43f5e"
    });
    return;
  }

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>กำลังส่งข้อความ...</span>`;
  }

  try {
    const res = await fetch("https://formsubmit.co/ajax/fa521c79a3af82c9fb8a6f503ff81e3d", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        _subject: `📬 ข้อความใหม่จากแบบฟอร์มติดต่อ (Portfolio New JA): ${name}`,
        _captcha: "false",
        "ชื่อผู้ติดต่อ": name,
        "อีเมล Gmail": email,
        "ข้อความ": msg,
        _template: "table"
      })
    });

    if (!res.ok) throw new Error("HTTP " + res.status);

    showToast({
      title: "ส่งข้อความสำเร็จแล้ว!",
      description: `ขอบคุณครับคุณ ${name} ข้อมูลถูกส่งตรงไปยัง Pongpataradanai@gmail.com เรียบร้อยแล้ว`,
      fuseColor: "#10b981"
    });
    document.getElementById("contact-form")?.reset();
    playBeep(660, 0.1);
  } catch (err) {
    // If FormSubmit blocked, direct mailto without _blank
    const mailtoUrl = `mailto:Pongpataradanai@gmail.com?subject=${encodeURIComponent("ติดต่อจากเว็บ Portfolio: " + name)}&body=${encodeURIComponent("ชื่อผู้ติดต่อ: " + name + "\nอีเมล: " + email + "\n\nข้อความ:\n" + msg)}`;
    window.location.href = mailtoUrl;

    showToast({
      title: "เปิดโปรแกรมส่งอีเมล",
      description: `ขอบคุณครับคุณ ${name}! ระบบกำลังเปิดโปรแกรมส่งเมลเพื่อส่งหา Pongpataradanai@gmail.com`,
      fuseColor: "#38bdf8"
    });
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span>ส่งข้อความ</span><i data-lucide="send" class="w-4 h-4"></i>`;
      if (window.lucide) lucide.createIcons();
    }
  }
};

// ─── 15. REACT BITS INTEGRATIONS ───────────────────────────────────────────
async function initHeroGradientASCII() {
  const container = document.getElementById("gradient-ascii-hero");
  if (!container) return;
  try {
    const { initGradientASCII } = await import("./gradient-ascii.js");
    initGradientASCII(container, {
      shape: "horizon",
      characters: " =+xX0S8#@",
      cellSize: 18,
      density: 0.9,
      glyphOpacity: 0.85,
      gradientOpacity: 0.85,
      glow: 0.25,
      flicker: 0.15,
      softness: 0.6,
      scale: 1.8,
      flow: 0.5,
      speed: 0.75,
      grain: 0.08,
      mouseInteraction: true,
      scrambleRadius: 0.12,
      clickEffect: "wave",
      colors: ["#090d16", "#1e3fd8", "#0284c7", "#38bdf8", "#f6f8ff"]
    });
  } catch (err) {
    console.warn("GradientASCII failed to mount:", err);
  }
}

async function initVolumeElasticSlider() {
  const mount = document.getElementById("elastic-slider-mount");
  if (!mount) return;
  try {
    const { createElasticSlider } = await import("./elastic-slider.js");
    createElasticSlider(mount, {
      defaultValue: Math.round((state.soundVolume ?? 0.75) * 100),
      min: 0,
      max: 100,
      step: 1,
      onChange: (val) => {
        state.soundVolume = val / 100;
        if (val === 0) {
          state.soundEnabled = false;
        } else {
          state.soundEnabled = true;
        }
        playBeep(350 + val * 5, 0.04);
      }
    });
  } catch (err) {
    console.warn("ElasticSlider failed to mount:", err);
  }
}

async function initCountUps() {
  try {
    if (!countUpModule) {
      countUpModule = await import("./count-up.js");
    }
    countUpModule.initAllCountUps();
  } catch (err) {
    console.warn("CountUp failed to init:", err);
  }
}


// ─── 17. REACT BITS: PULSE HEART & ELECTRIC BORDER ──────────────────────────
async function initPulseHearts() {
  const mounts = document.querySelectorAll(".pulse-heart-mount");
  if (!mounts.length) return;
  try {
    const { createPulseHeart } = await import("./pulse-heart.js");
    let serverLikes = {};
    try {
      const res = await fetch("/api/likes");
      if (res.ok) {
        const data = await res.json();
        if (data && data.likes) serverLikes = data.likes;
      }
    } catch (e) {}

    mounts.forEach(mount => {
      const id = mount.dataset.heartId || "item";
      const initialCount = typeof serverLikes[id] === "number" ? serverLikes[id] : Number(mount.dataset.heartCount || 0);
      const heartInstance = createPulseHeart(mount, {
        id,
        initialCount,
        size: 32,
        corner: 20,
        likedColor: "#ff4d6d",
        onLike: async (count) => {
          playBeep(750, 0.08);
          showToast({
            title: "ขอบคุณสำหรับการกดหัวใจ! ❤️",
            description: `คุณได้ส่งกำลังใจให้ผลงานนี้เรียบร้อยแล้ว (ยอดรวม: ${count})`,
            fuseColor: "#ff4d6d"
          });
          try {
            const postRes = await fetch("/api/likes", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ id })
            });
            if (postRes.ok) {
              const postData = await postRes.json();
              if (postData && typeof postData.count === "number" && heartInstance && heartInstance.setCount) {
                heartInstance.setCount(postData.count);
              }
            }
          } catch (e) {}
        },
        onAlreadyLiked: () => {
          showToast({
            title: "คุณเคยกดหัวใจให้รายการนี้แล้ว",
            description: "ขอบคุณมากครับสำหรับการสนับสนุน! ❤️",
            fuseColor: "#fda4af"
          });
        }
      });
    });
  } catch (e) {
    console.warn("PulseHeart failed to mount:", e);
  }
}

async function initElectricBorder() {
  const container = document.getElementById("electric-border-utcc");
  if (!container) return;
  try {
    const { createElectricBorder } = await import("./electric-border.js");
    createElectricBorder(container, {
      color: "#f59e0b",
      glowColor: "#fbbf24",
      speed: 1.0,
      chaos: 0.5,
      spread: 0.6,
      thickness: 1.6,
      strands: 3,
      borderRadius: 24
    });
  } catch (e) {
    console.warn("ElectricBorder failed to mount:", e);
  }
}

// ─── 17.1. REACT BITS: BOUNCE CARDS (EDUCATION JOURNEY) ─────────────────────
async function initEducationBounceCards() {
  const mount = document.getElementById("education-bounce-cards-mount");
  if (!mount) return;
  try {
    const { createBounceCards } = await import("./bounce-cards.js");
    createBounceCards(mount, {
      images: [
        {
          src: "assets/school_bangpleepat.png",
          alt: "รร.บางพลีพัฒนศึกษาลัย (อนุบาล - ป.6)",
          url: "https://www.bangpleepat.com/"
        },
        {
          src: "assets/school_nmrtup.png",
          alt: "รร.นวมินทราชินูทิศ เตรียมอุดมศึกษาพัฒนาการ (ม.1 - ม.6)",
          url: "https://nmrtup.ac.th/"
        }
      ],
      containerWidth: "100%",
      containerHeight: 330,
      cardSize: 210,
      spread: 110,
      rotation: 9,
      pushDistance: 130,
      hoverScale: 1.08,
      bounciness: 0.6,
      borderWidth: 3,
      borderColor: "rgba(56, 189, 248, 0.4)",
      radius: 20,
      shadow: true,
      enableHover: true,
      onCardClick: (idx, card) => {
        playBeep(650, 0.08);
        if (card?.url) {
          window.open(card.url, "_blank", "noopener,noreferrer");
        }
      }
    });
  } catch (err) {
    console.warn("BounceCards failed to mount:", err);
  }
}

// ─── 17.2. REACT BITS: PIXEL CARD (SERVICES & HIRE ME) ──────────────────────
async function initServicesPixelCards() {
  const card1 = document.getElementById("pixel-card-1");
  const card2 = document.getElementById("pixel-card-2");
  const card3 = document.getElementById("pixel-card-3");

  if (!card1 && !card2 && !card3) return;

  try {
    const { createPixelCard } = await import("./pixel-card.js");

    if (card1) {
      createPixelCard(card1, {
        variant: "cyan",
        pixelSize: 2.5,
        speed: 30,
        spotlight: 0.65,
        glow: 0.55,
        radius: 24,
        clickPulse: true
      });
    }

    if (card2) {
      createPixelCard(card2, {
        variant: "purple",
        pixelSize: 2.5,
        speed: 30,
        spotlight: 0.65,
        glow: 0.55,
        radius: 24,
        clickPulse: true
      });
    }

    if (card3) {
      createPixelCard(card3, {
        variant: "amber",
        pixelSize: 2.5,
        speed: 25,
        spotlight: 0.7,
        glow: 0.6,
        radius: 24,
        clickPulse: true
      });
    }
  } catch (err) {
    console.warn("PixelCard failed to mount:", err);
  }
}

// ─── 18. SECRET ADMIN CLEARANCE SYSTEM (RightAlt 1.5s or Mobile Trigger) ──────
let altPressTimer = null;
let altStartTime = 0;
const ALT_HOLD_DURATION = 1500;

function setupAdminSecretTrigger() {
  const hud = document.getElementById("admin-secret-hud");
  const timerLabel = document.getElementById("admin-hud-timer");

  let animFrame = 0;
  function updateHudTimer() {
    if (!altStartTime) return;
    const elapsed = Date.now() - altStartTime;
    const remaining = Math.max(0, (ALT_HOLD_DURATION - elapsed) / 1000);
    if (timerLabel) timerLabel.textContent = `${remaining.toFixed(1)}s`;
    if (elapsed < ALT_HOLD_DURATION) {
      animFrame = requestAnimationFrame(updateHudTimer);
    }
  }

  window.addEventListener("keydown", (e) => {
    const isRightAlt = e.code === "AltRight" || (e.key === "Alt" && e.location === 2);
    if (isRightAlt && !altPressTimer) {
      altStartTime = Date.now();
      if (hud) {
        hud.classList.remove("opacity-0", "translate-y-4");
        hud.classList.add("opacity-100", "translate-y-0");
      }
      updateHudTimer();

      altPressTimer = setTimeout(() => {
        if (hud) {
          hud.classList.remove("opacity-100", "translate-y-0");
          hud.classList.add("opacity-0", "translate-y-4");
        }
        playBeep(880, 0.15, "triangle");
        openAdminLoginModal();
        altPressTimer = null;
        altStartTime = 0;
      }, ALT_HOLD_DURATION);
    }
  });

  window.addEventListener("keyup", (e) => {
    const isRightAlt = e.code === "AltRight" || (e.key === "Alt" && e.location === 2);
    if (isRightAlt) {
      if (altPressTimer) {
        clearTimeout(altPressTimer);
        altPressTimer = null;
        altStartTime = 0;
        cancelAnimationFrame(animFrame);
        if (hud) {
          hud.classList.remove("opacity-100", "translate-y-0");
          hud.classList.add("opacity-0", "translate-y-4");
        }
      }
    }
  });
}

window.openAdminLoginModal = function() {
  playBeep(700, 0.08);
  const modal = document.getElementById("admin-login-modal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.getElementById("admin-user-input")?.focus();
  }
};

window.closeAdminLoginModal = function() {
  const modal = document.getElementById("admin-login-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
};

window.openAdminDashboardModal = function() {
  playBeep(800, 0.08);
  const modal = document.getElementById("admin-dashboard-modal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    loadAdminComments();
  }
};

window.closeAdminDashboardModal = function() {
  const modal = document.getElementById("admin-dashboard-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
};

window.handleAdminLogout = function() {
  sessionStorage.removeItem("newja_admin_session");
  closeAdminDashboardModal();
  showToast({
    title: "ออกจากระบบแล้ว",
    description: "ระบบล็อกเอาต์เซสชัน Admin เรียบร้อยแล้ว",
    fuseColor: "#94a3b8"
  });
};

window.handleAdminLogin = async function(e) {
  e.preventDefault();
  const user = document.getElementById("admin-user-input")?.value.trim();
  const pass = document.getElementById("admin-pass-input")?.value.trim();

  if (user === "Admin" && pass === "Admin1230S_asdl133") {
    sessionStorage.setItem("newja_admin_session", pass);
    closeAdminLoginModal();
    openAdminDashboardModal();

    showToast({
      title: "ยินดีต้อนรับ Admin New JA",
      description: "ยืนยันตัวตนสำเร็จ! ระบบกำลังส่งบันทึกการเข้าใช้งานไปยัง Pongpataradanai@gmail.com",
      fuseColor: "#06b6d4"
    });

    const deviceInfo = `${navigator.userAgent} (${window.screen.width}x${window.screen.height})`;
    const bangkokTime = new Date().toLocaleString("th-TH", { timeZone: "Asia/Bangkok" });

    fetch("/api/admin/notify-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "Admin",
        device: deviceInfo,
        time: bangkokTime
      })
    }).catch(() => {});

    fetch("https://formsubmit.co/ajax/fa521c79a3af82c9fb8a6f503ff81e3d", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        _subject: "🚨 [ADMIN LOGIN ALERT] มีการเข้าสู่ระบบ Admin Panel (New JA Portfolio)",
        _captcha: "false",
        "User": "Admin",
        "Device": deviceInfo,
        "Time (Bangkok)": bangkokTime,
        _template: "table"
      })
    }).catch(() => {});

  } else {
    playBeep(300, 0.2, "sawtooth");
    showToast({
      title: "การยืนยันตัวตนล้มเหลว",
      description: "Username หรือ Password ไม่ถูกต้อง ระบบนี้จำกัดเฉพาะผู้ดูแลระบบคนเดียวเท่านั้น",
      fuseColor: "#f43f5e"
    });
  }
};

window.loadAdminComments = async function() {
  const container = document.getElementById("admin-comments-table");
  if (!container) return;
  container.innerHTML = `<div class="text-center py-6 text-xs text-slate-400">กำลังดึงข้อมูล...</div>`;

  let comments = [];
  try {
    const res = await fetch("/api/comments?admin=true&key=Admin1230S_asdl133");
    if (res.ok) {
      const data = await res.json();
      comments = data.comments || [];
    }
  } catch (e) {}

  if (!comments.length) {
    try {
      comments = JSON.parse(localStorage.getItem("newja_comments") || "[]");
    } catch (e) {}
  }

  const total = comments.length;
  const flagged = comments.filter(c => c.is_flagged).length;
  const active = total - flagged;

  const statTotal = document.getElementById("admin-stat-total");
  const statFlagged = document.getElementById("admin-stat-flagged");
  const statActive = document.getElementById("admin-stat-active");
  if (statTotal) statTotal.textContent = total;
  if (statFlagged) statFlagged.textContent = flagged;
  if (statActive) statActive.textContent = active;

  if (!comments.length) {
    container.innerHTML = `<div class="text-center py-8 text-xs text-slate-500">ไม่มีความคิดเห็นในระบบ</div>`;
    return;
  }

  container.innerHTML = comments.map(c => `
    <div class="p-4 rounded-2xl bg-slate-950/70 border ${c.is_flagged ? 'border-amber-500/40 bg-amber-950/10' : 'border-white/10'} space-y-2">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-blue-600/30 border border-blue-500/30 text-blue-300 font-bold text-xs flex items-center justify-center">${c.avatar || 'NJ'}</span>
          <span class="font-bold text-sm text-white">${c.name}</span>
          ${c.is_flagged ? `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">⚠️ รอปลดแบน: ${c.flag_reason || 'คำไม่สุภาพ'}</span>` : `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">✓ อนุมัติแล้ว</span>`}
        </div>
        <span class="text-[11px] text-slate-500">${new Date(c.created_at).toLocaleString('th-TH')}</span>
      </div>
      <p class="text-xs text-slate-300 leading-relaxed">${c.message}</p>
      <div class="flex items-center gap-2 pt-1 border-t border-white/5">
        ${c.is_flagged ? `
          <button onclick="handleAdminUnbanComment('${c.id}')" class="px-3 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 text-xs font-bold transition flex items-center gap-1">
            <i data-lucide="check" class="w-3.5 h-3.5"></i> <span>ปลดแบน (Approve)</span>
          </button>
        ` : `
          <button onclick="handleAdminBanComment('${c.id}')" class="px-3 py-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500 hover:text-slate-950 text-xs font-bold transition flex items-center gap-1">
            <i data-lucide="shield-alert" class="w-3.5 h-3.5"></i> <span>แบน (Hide)</span>
          </button>
        `}
        <button onclick="handleAdminDeletePermanent('${c.id}')" class="px-3 py-1.5 rounded-lg bg-rose-500/20 border border-rose-500/40 text-rose-300 hover:bg-rose-500 hover:text-white text-xs font-bold transition flex items-center gap-1">
          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i> <span>ลบทิ้ง</span>
        </button>
      </div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
};

window.handleAdminUnbanComment = async function(id) {
  try {
    await fetch("/api/comments", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "X-Admin-Key": "Admin1230S_asdl133" },
      body: JSON.stringify({ id, action: "unban" })
    });
  } catch (e) {}

  try {
    let list = JSON.parse(localStorage.getItem("newja_comments") || "[]");
    const item = list.find(c => c.id === id);
    if (item) {
      item.is_flagged = false;
      item.flag_reason = null;
    }
    localStorage.setItem("newja_comments", JSON.stringify(list));
  } catch (e) {}

  showToast({ title: "ปลดแบนเรียบร้อย", description: "ความคิดเห็นได้รับการอนุมัติและแสดงต่อสาธารณะแล้ว", fuseColor: "#10b981" });
  loadAdminComments();
  loadComments();
};

window.handleAdminBanComment = async function(id) {
  try {
    await fetch("/api/comments", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "X-Admin-Key": "Admin1230S_asdl133" },
      body: JSON.stringify({ id, action: "ban" })
    });
  } catch (e) {}

  try {
    let list = JSON.parse(localStorage.getItem("newja_comments") || "[]");
    const item = list.find(c => c.id === id);
    if (item) item.is_flagged = true;
    localStorage.setItem("newja_comments", JSON.stringify(list));
  } catch (e) {}

  showToast({ title: "แบนความคิดเห็นเรียบร้อย", description: "ซ่อนความคิดเห็นนี้ออกจากหน้าสาธารณะแล้ว", fuseColor: "#f59e0b" });
  loadAdminComments();
  loadComments();
};

function showCustomConfirm({ title, desc, okText, onConfirm }) {
  const modal = document.getElementById("admin-confirm-modal");
  if (!modal) {
    if (confirm(desc || title || "คุณต้องการดำเนินการนี้หรือไม่?")) {
      if (typeof onConfirm === "function") onConfirm();
    }
    return;
  }
  const titleEl = document.getElementById("admin-confirm-title");
  const descEl = document.getElementById("admin-confirm-desc");
  const okBtn = document.getElementById("admin-confirm-ok-btn");
  const cancelBtn = document.getElementById("admin-confirm-cancel-btn");

  if (title && titleEl) titleEl.textContent = title;
  if (desc && descEl) descEl.textContent = desc;
  if (okText && okBtn) okBtn.textContent = okText;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  if (window.lucide) lucide.createIcons();

  const cleanup = () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    if (okBtn) okBtn.onclick = null;
    if (cancelBtn) cancelBtn.onclick = null;
  };

  if (cancelBtn) cancelBtn.onclick = cleanup;

  if (okBtn) {
    okBtn.onclick = async () => {
      cleanup();
      if (typeof onConfirm === "function") {
        await onConfirm();
      }
    };
  }
}

window.handleAdminDeletePermanent = function(id) {
  showCustomConfirm({
    title: "ยืนยันการลบความคิดเห็นถาวร",
    desc: "คุณแน่ใจว่าต้องการลบความคิดเห็นนี้ทิ้งถาวรหรือไม่? การกระทำนี้ไม่สามารถย้อนกลับได้",
    okText: "ลบทิ้งถาวร",
    onConfirm: async () => {
      try {
        await fetch(`/api/comments?id=${id}&key=Admin1230S_asdl133`, {
          method: "DELETE",
          headers: { "X-Admin-Key": "Admin1230S_asdl133" }
        });
      } catch (e) {}

      try {
        let list = JSON.parse(localStorage.getItem("newja_comments") || "[]");
        list = list.filter(c => c.id !== id);
        localStorage.setItem("newja_comments", JSON.stringify(list));
      } catch (e) {}

      showToast({ title: "ลบคอมเมนต์เรียบร้อย", description: "นำความคิดเห็นออกจากระบบถาวรแล้ว", fuseColor: "#f43f5e" });
      loadAdminComments();
      loadComments();
    }
  });
};

// ─── 19. REACT BITS FESTIVAL LAB: ANIMATED LIST + COUNTER + STROKE TEXT ─────
function getDaysRemaining(targetDateStr) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [y, m, d] = targetDateStr.split("-").map(Number);
  const target = new Date(y, m - 1, d);
  const diff = Math.ceil((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  return Math.max(0, diff);
}

const UPCOMING_FESTIVALS = [
  {
    id: "halloween",
    title: "Halloween & Día de los Muertos",
    thaiTitle: "วันปล่อยผี & วันแห่งผู้ล่วงลับ",
    targetDate: "2026-10-31",
    dateText: "31 ต.ค. – 2 พ.ย. 2026",
    location: "ทั่วโลก / เม็กซิโก (Mexico City, Oaxaca)",
    description: "งานเฉลิมฉลองคืนปล่อยผีทั่วโลก ควบคู่กับเทศกาลมรดกโลกของเม็กซิโกที่ผู้คนจะแต่งหน้าเป็นโครงกระดูก (Catrina) ประดับดอกดาวเรือง และเดินขบวนพาเหรดสุดคึกคัก",
    icon: "🎃",
    highlight: true,
    highlightBadge: "🎃 TODAY"
  },
  {
    id: "diwali",
    title: "Diwali Festival of Lights",
    thaiTitle: "เทศกาลดิวาลี (เทศกาลแห่งแสงไฟ)",
    targetDate: "2026-11-06",
    dateText: "6 – 10 พ.ย. 2026 (วันหลัก 8 พ.ย.)",
    location: "อินเดีย และชุมชนชาวฮินดูทั่วโลก",
    description: "เทศกาลที่ยิ่งใหญ่ที่สุดของอินเดีย สว่างไสวไปด้วยตะเกียงดินเผา (Diyas) นับล้านดวง การทำลวดลายรังโกลี และจุดดอกไม้ไฟเฉลิมฉลองชัยชนะของความดีเหนือความชั่ว",
    icon: "🪔"
  },
  {
    id: "loykrathong",
    title: "Yi Peng & Loy Krathong",
    thaiTitle: "เทศกาลยี่เป็ง และ วันลอยกระทง",
    targetDate: "2026-11-24",
    dateText: "24 – 25 พ.ย. 2026",
    location: "เชียงใหม่ สุโขทัย และทั่วประเทศไทย",
    description: "เทศกาลระดับโลกที่นักท่องเที่ยวปักหมุดมาชมภาพโคมลอยนับพันดวงสว่างไสวเต็มท้องฟ้าเชียงใหม่ และการลอยกระทงประดับประทีปตามสายน้ำทั่วไทย",
    icon: "🏮",
    highlight: true,
    highlightBadge: "🏮 LOY KRATHONG"
  },
  {
    id: "christmas-markets",
    title: "European Christmas Markets",
    thaiTitle: "ตลาดคริสต์มาสยุโรป",
    targetDate: "2026-11-25",
    dateText: "25 พ.ย. – 25 ธ.ค. 2026",
    location: "เยอรมนี ออสเตรีย ฝรั่งเศส (Nuremberg, Vienna, Strasbourg)",
    description: "การเนรมิตจัตุรัสใจกลางเมืองเก่าในยุโรปให้กลายเป็นหมู่บ้านคริสต์มาส ประดับไฟสวยงาม พร้อมร้านค้างานฝีมือและขนมประจำเทศกาลตลอดทั้งเดือน",
    icon: "🎄"
  },
  {
    id: "thanksgiving",
    title: "Macy's Thanksgiving Parade",
    thaiTitle: "ขบวนพาเหรดวันขอบคุณพระเจ้า เมซีส์",
    targetDate: "2026-11-26",
    dateText: "26 พ.ย. 2026",
    location: "นิวยอร์ก สหรัฐอเมริกา",
    description: "ขบวนพาเหรดวันขอบคุณพระเจ้าระดับตำนานของสหรัฐฯ โดดเด่นด้วยบอลลูนคาแรกเตอร์ยักษ์ลอยฟ้าไปตามถนนแมนฮัตตัน",
    icon: "🦃"
  },
  {
    id: "tomorrowland",
    title: "Tomorrowland Thailand 2026",
    thaiTitle: "เทศกาลดนตรีทูมอร์โรว์แลนด์ ไทยแลนด์",
    targetDate: "2026-12-11",
    dateText: "11 – 13 ธ.ค. 2026",
    location: "Wisdom Valley (เขาไม้แก้ว พัทยา) จ.ชลบุรี ประเทศไทย",
    description: "ประวัติศาสตร์หน้าใหม่ เทศกาลดนตรีอิเล็กทรอนิกส์ (EDM) อันดับ 1 ของโลกมาจัดเต็มรูปแบบในเอเชียตะวันออกเฉียงใต้เป็นครั้งแรกที่ประเทศไทย",
    icon: "🎧"
  },
  {
    id: "christmas",
    title: "Christmas Day 2026",
    thaiTitle: "วันคริสต์มาส (Christmas)",
    targetDate: "2026-12-25",
    dateText: "25 ธ.ค. 2026",
    location: "ทั่วโลก / ลอนดอน ปารีส นิวยอร์ก โตเกียว กรุงเทพฯ",
    description: "เทศกาลแห่งความสุขและการเฉลิมฉลองระดับโลก การประดับต้นคริสต์มาส แสงไฟระยิบระยับ การแลกของขวัญ และบทเพลงคริสต์มาสทั่วทุกมุมเมือง",
    icon: "🎄",
    highlight: true,
    highlightBadge: "🎄 CHRISTMAS"
  },
  {
    id: "countdown",
    title: "New Year's Eve Countdown 2027",
    thaiTitle: "เคานต์ดาวน์ส่งท้ายปีเก่า ต้อนรับปีใหม่ 2027",
    targetDate: "2026-12-31",
    dateText: "31 ธ.ค. 2026 – 1 ม.ค. 2027",
    location: "ไอคอนสยาม เซ็นทรัลเวิลด์ ซิดนีย์ ไทม์สแควร์ โตเกียว ลอนดอน",
    description: "มหกรรมเฉลิมฉลองเคานต์ดาวน์ข้ามปีที่ยิ่งใหญ่ที่สุด การแสดงพลุดอกไม้ไฟอลังการริมแม่น้ำเจ้าพระยาและแลนด์มาร์กสำคัญทั่วโลก",
    icon: "🎆",
    highlight: true,
    highlightBadge: "🎆 NEW YEAR 2027"
  },
  {
    id: "harbin-ice",
    title: "Harbin Ice & Snow Festival",
    thaiTitle: "เทศกาลน้ำแข็งฮาร์บิน",
    targetDate: "2027-01-05",
    dateText: "5 ม.ค. – ก.พ. 2027",
    location: "เมืองฮาร์บิน ประเทศจีน",
    description: "เทศกาลประติมากรรมน้ำแข็งและหิมะที่ใหญ่ที่สุดในโลก ปราสาทน้ำแข็งขนาดยักษ์ประดับไฟหลากสีสันท่ามกลางอุณหภูมิติดลบ",
    icon: "❄️"
  },
  {
    id: "venice-carnival",
    title: "Venice Carnival 2027",
    thaiTitle: "เทศกาลหน้ากากเวนิส",
    targetDate: "2027-01-30",
    dateText: "30 ม.ค. – 9 ก.พ. 2027",
    location: "เมืองเวนิส ประเทศอิตาลี",
    description: "เทศกาลคาร์นิวัลสุดคลาสสิกที่ผู้คนสวมหน้ากากเวนิสและชุดย้อนยุคสุดวิจิตรตระการตาออกมาเดินทั่วเมืองและล่องเรือในคลองเวนิส",
    icon: "🎭"
  },
  {
    id: "sapporo-snow",
    title: "Sapporo Snow Festival",
    thaiTitle: "เทศกาลหิมะซัปโปโร",
    targetDate: "2027-02-04",
    dateText: "4 – 11 ก.พ. 2027",
    location: "เมืองซัปโปโร ฮอกไกโด ประเทศญี่ปุ่น",
    description: "งานแสดงประติมากรรมหิมะและน้ำแข็งแกะสลักขนาดใหญ่ใจกลางสวนโอโดริ ดึงดูดนักท่องเที่ยวหลายล้านคนจากทั่วโลก",
    icon: "⛄"
  },
  {
    id: "lunar-new-year",
    title: "Lunar New Year 2027",
    thaiTitle: "เทศกาลตรุษจีน (ปีมะแม)",
    targetDate: "2027-02-06",
    dateText: "6 ก.พ. 2027",
    location: "จีน ไต้หวัน ฮ่องกง สิงคโปร์ เยาวราชไทย",
    description: "การเฉลิมฉลองก้าวเข้าสู่ปีมะแม (ปีแพะ) ตามปฏิทินจันทรคติ เชิดสิงโต เชิดมังกร โคมไฟสีแดง และดอกไม้ไฟ",
    icon: "🧧",
    highlight: true,
    highlightBadge: "🧧 CHINESE NEW YEAR"
  },
  {
    id: "holi",
    title: "Holi Festival of Colours",
    thaiTitle: "เทศกาลโฮลี (เทศกาลสาดสี)",
    targetDate: "2027-03-21",
    dateText: "21 – 22 มี.ค. 2027",
    location: "อินเดีย และเนปาล",
    description: "เทศกาลต้อนรับฤดูใบไม้ผลิของชาวฮินดู สาดผงสีธรรมชาติ (Gulal) และน้ำใส่กันอย่างสนุกสนานทั่วท้องถนน",
    icon: "🎨"
  },
  {
    id: "sakura",
    title: "Cherry Blossom Hanami",
    thaiTitle: "เทศกาลชมดอกซากุระ",
    targetDate: "2027-03-25",
    dateText: "ปลาย มี.ค. – เม.ย. 2027",
    location: "ญี่ปุ่น เกาหลีใต้ และไต้หวัน",
    description: "ช่วงเวลาที่ดอกซากุระผลิบานเปลี่ยนเมืองให้กลายเป็นสีชมพู ผู้คนออกมานั่งปิกนิกชมดอกไม้ (ฮานามิ) ตามสวนสาธารณะ",
    icon: "🌸"
  },
  {
    id: "coachella",
    title: "Coachella Music & Arts",
    thaiTitle: "เทศกาลดนตรีโคเชลลา 2027",
    targetDate: "2027-04-09",
    dateText: "9 – 18 เม.ย. 2027",
    location: "แคลิฟอร์เนีย สหรัฐอเมริกา",
    description: "เทศกาลดนตรีและศิลปะระดับโลกกลางทะเลทรายโคเชลลา รวมศิลปินตัวท็อปจากทุกมุมโลกและเวทีกำหนดเทรนด์แฟชั่น",
    icon: "🎡"
  },
  {
    id: "songkran",
    title: "Maha Songkran Festival (สงกรานต์)",
    thaiTitle: "เทศกาลมหาสงกรานต์ (ปีใหม่ไทย)",
    targetDate: "2027-04-13",
    dateText: "13 – 15 เม.ย. 2027",
    location: "ถนนข้าวสาร ถนนสีลม เชียงใหม่ และทั่วประเทศไทย (มรดกโลก UNESCO)",
    description: "เทศกาลปีใหม่ไทย มรดกทางวัฒนธรรมโดย UNESCO มหกรรมสาดน้ำคลายร้อนและประเพณีไทยอันงดงามที่โด่งดังไปทั่วโลก",
    icon: "💦",
    highlight: true,
    highlightBadge: "💦 SONGKRAN (UNESCO)"
  },
  {
    id: "kings-day",
    title: "King's Day (Koningsdag)",
    thaiTitle: "วันพระราชา เนเธอร์แลนด์",
    targetDate: "2027-04-27",
    dateText: "27 เม.ย. 2027",
    location: "อัมสเตอร์ดัม และทั่วประเทศเนเธอร์แลนด์",
    description: "ปาร์ตี้กลางแจ้งที่ใหญ่ที่สุดของเนเธอร์แลนด์ ผู้คนพร้อมใจกันแต่งกายด้วยสีส้ม ออกมาล่องเรือตามลำคลองและจัดตลาดนัดทั่วเมือง",
    icon: "👑"
  }
];

// Initialize dynamic days remaining & meta
UPCOMING_FESTIVALS.forEach(item => {
  item.days = getDaysRemaining(item.targetDate);
  item.meta = item.days === 0 ? "เริ่มวันนี้!" : `อีก ${item.days} วัน`;
});

let festivalCounterInstance = null;
let festivalStrokeInstance = null;
let festivalListInstance = null;
let festivalLabMounted = false;

async function initFestivalLab() {
  if (festivalLabMounted) return;

  const counterMount = document.getElementById("festival-counter-mount");
  const strokeMount = document.getElementById("festival-stroke-mount");
  const listMount = document.getElementById("festival-animated-list-mount");

  if (!counterMount || !strokeMount || !listMount) return;

  try {
    const [{ createCounter }, { createStrokeText }, { createAnimatedList }] = await Promise.all([
      import("./counter.js"),
      import("./stroke-text.js"),
      import("./animated-list.js")
    ]);

    const initialItem = UPCOMING_FESTIVALS[0];

    // 1. Mount Counter
    festivalCounterInstance = createCounter(counterMount, {
      value: initialItem.days,
      fontSize: 64,
      fontWeight: 800,
      textColor: "#38bdf8",
      bounce: 0.2,
      duration: 0.7,
      motionBlur: true
    });

    // 2. Mount StrokeText
    festivalStrokeInstance = createStrokeText(strokeMount, {
      text: initialItem.title,
      strokeColor: "#38bdf8",
      fillColor: "#ffffff",
      fontSize: 26,
      fontWeight: 800,
      drawDuration: 0.9,
      fillDelay: 0.15,
      wipeFrom: "left",
      shadow: true
    });

    // Function to update details view
    const updateFestivalDisplay = (item) => {
      if (!item) return;
      const emojiEl = document.getElementById("festival-badge-emoji");
      const badgeWrap = document.getElementById("festival-badge-wrap");
      const badgeSub = document.getElementById("festival-badge-sub");
      const thaiTitleEl = document.getElementById("festival-thai-title");
      const dateEl = document.getElementById("festival-info-date");
      const locEl = document.getElementById("festival-info-location");
      const descEl = document.getElementById("festival-info-desc");

      if (emojiEl) emojiEl.textContent = item.icon || "🎉";
      if (item.highlight) {
        if (badgeSub) badgeSub.textContent = `⭐ ไฮไลท์ • ${item.highlightBadge || 'เทศกาลสำคัญ'}`;
        if (badgeWrap) {
          badgeWrap.className = "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-200 text-xs font-extrabold shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all";
        }
      } else {
        if (badgeSub) badgeSub.textContent = "กำลังดูเทศกาล";
        if (badgeWrap) {
          badgeWrap.className = "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 text-xs font-semibold transition-all";
        }
      }

      if (thaiTitleEl) thaiTitleEl.textContent = `${item.thaiTitle || ''} • ${item.dateText || ''}`;
      if (dateEl) dateEl.textContent = item.dateText || "";
      if (locEl) locEl.textContent = item.location || "";
      if (descEl) descEl.textContent = item.description || "";

      // Roll Counter digits
      if (festivalCounterInstance) {
        festivalCounterInstance.setValue(item.days);
      }

      // Redraw StrokeText
      if (festivalStrokeInstance) {
        festivalStrokeInstance.setText(item.title);
      }

      playBeep(520, 0.05);
    };

    // 3. Mount AnimatedList
    festivalListInstance = createAnimatedList(listMount, {
      items: UPCOMING_FESTIVALS,
      initialSelectedIndex: 0,
      selectOnHover: true,
      enableArrowNavigation: true,
      loop: true,
      maxHeight: 280,
      accentColor: "#38bdf8",
      onItemSelect: (item) => {
        updateFestivalDisplay(item);
      }
    });

    updateFestivalDisplay(initialItem);
    festivalLabMounted = true;
  } catch (err) {
    console.warn("Festival Lab failed to mount:", err);
  }
}

window.openFestivalModal = function() {
  playBeep(640, 0.08);
  const modal = document.getElementById("festival-modal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    initFestivalLab();
    if (window.lucide) lucide.createIcons();
  }
};

window.closeFestivalModal = function() {
  const modal = document.getElementById("festival-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
};

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeFestivalModal();
  }
});

// ─── 16. BOOTSTRAP APPLICATION ──────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) lucide.createIcons();
  initPreloader();
  initStarfield();
  initNavbarScrollSpy();
  initLanyard();
  initMaskReveal();
  initTypewriter();
  initSpotlightCards();
  loadComments();
  initSpotify();

  // React Bits Components
  initHeroGradientASCII();
  initVolumeElasticSlider();
  initCountUps();
  initPulseHearts();
  initElectricBorder();
  initEducationBounceCards();
  initServicesPixelCards();
  getSwipeToastManager();

  // Admin secret trigger
  setupAdminSecretTrigger();
});
