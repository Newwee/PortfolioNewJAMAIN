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
    document.querySelectorAll(".mobile-nav-item").forEach((item) => {
      const href = item.getAttribute("href");
      if (href === `#${id}`) {
        item.classList.add("active", "text-cyan-300", "bg-blue-600/30");
        item.classList.remove("text-slate-300");
      } else {
        item.classList.remove("active", "text-cyan-300", "bg-blue-600/30");
        item.classList.add("text-slate-300");
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

  // Smooth click navigation (Desktop)
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

  // Mobile Drawer Navigation & Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenuDrawer = document.getElementById("mobile-menu-drawer");
  const mobileNavItems = document.querySelectorAll(".mobile-nav-item");

  if (mobileMenuBtn && mobileMenuDrawer) {
    mobileMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isHidden = mobileMenuDrawer.classList.contains("hidden");
      if (isHidden) {
        mobileMenuDrawer.classList.remove("hidden");
        mobileMenuDrawer.classList.add("flex");
        mobileMenuBtn.setAttribute("aria-expanded", "true");
        if (window.lucide?.createIcons) window.lucide.createIcons();
      } else {
        mobileMenuDrawer.classList.add("hidden");
        mobileMenuDrawer.classList.remove("flex");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      }
      playBeep(520, 0.06);
    });

    mobileNavItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        const href = item.getAttribute("href");
        if (!href || !href.startsWith("#")) return;
        const targetId = href.replace("#", "");
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          e.preventDefault();
          playBeep(440, 0.05);
          setActive(targetId);
          mobileMenuDrawer.classList.add("hidden");
          mobileMenuDrawer.classList.remove("flex");
          mobileMenuBtn.setAttribute("aria-expanded", "false");
          targetSection.scrollIntoView({ behavior: "smooth" });
          if (history.pushState) {
            history.pushState(null, "", `#${targetId}`);
          }
        }
      });
    });

    document.addEventListener("click", (e) => {
      if (!mobileMenuDrawer.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenuDrawer.classList.add("hidden");
        mobileMenuDrawer.classList.remove("flex");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

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
    const calcLanyardAnchor = () => {
      const w = window.innerWidth;
      if (w < 768) return 0.5;
      const contentWidth = Math.min(w, 1152);
      const targetX = (w / 2) + (contentWidth * 0.22);
      return Math.min(0.85, Math.max(0.5, targetX / w));
    };

    const isDesktop = window.innerWidth >= 768;
    const lanyard = mountLanyard(container, {
      frontImage: "assets/badge-front.png",
      backImage: "assets/badge-back.png",
      strapImage: "assets/badge-strap.png",
      cardColor: "#04010e",
      strapColor: "#111827",
      strapWidth: 0.62,
      strapLength: 0.52,
      anchor: calcLanyardAnchor(),
      size: isDesktop ? 0.52 : 0.44,
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

    window.addEventListener("resize", () => {
      if (lanyard?.update) {
        lanyard.update({
          anchor: calcLanyardAnchor(),
          size: window.innerWidth >= 768 ? 0.52 : 0.44
        });
      }
    }, { passive: true });

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

  const rolesTh = [
    "Problem Solver & Bug Fixer",
    "Web Maintenance & Developer",
    "Fullstack & Discord Architect",
    "AI & STEM Innovator (แชมป์ระดับชาติ)",
    "NMRTUP Grade 12 | Sci - Math"
  ];
  const rolesEn = [
    "Problem Solver & Bug Fixer",
    "Web Maintenance & Developer",
    "Full-Stack Web Architect",
    "AI & STEM Innovator (National Champion)",
    "NMRTUP Grade 12 | Sci - Math"
  ];

  let currentLang = localStorage.getItem("newja_lang") || (navigator.language?.startsWith("th") ? "th" : "en");
  let roles = currentLang === "en" ? rolesEn : rolesTh;

  window.addEventListener("newja_language_changed", e => {
    currentLang = e.detail?.lang || "th";
    roles = currentLang === "en" ? rolesEn : rolesTh;
    roleIdx = 0;
    charIdx = 0;
    isDeleting = false;
  });

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

    window._pulseHeartInstances = window._pulseHeartInstances || {};
    mounts.forEach(mount => {
      const id = mount.dataset.heartId || "item";

      // If already mounted, update count safely without destroying the DOM!
      if (mount._pulseHeartInstance) {
        if (typeof serverLikes[id] === "number" && serverLikes[id] !== mount._pulseHeartInstance.getCount()) {
          mount._pulseHeartInstance.setCount(serverLikes[id], false);
        }
        return;
      }

      const initialCount = typeof serverLikes[id] === "number" ? serverLikes[id] : Number(mount.dataset.heartCount || 1);
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
                heartInstance.setCount(postData.count, true);
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
      mount._pulseHeartInstance = heartInstance;
      window._pulseHeartInstances[id] = heartInstance;
    });

    // Start single realtime cross-user poller
    if (!window._pulseHeartInterval) {
      window._pulseHeartInterval = setInterval(async () => {
        if (document.hidden) return;
        try {
          const res = await fetch("/api/likes");
          if (res.ok) {
            const data = await res.json();
            if (data && data.likes) {
              Object.entries(data.likes).forEach(([itemId, liveCount]) => {
                const inst = window._pulseHeartInstances?.[itemId];
                if (inst && typeof liveCount === "number" && liveCount !== inst.getCount()) {
                  inst.setCount(liveCount, true);
                }
              });
            }
          }
        } catch (e) {}
      }, 3500);
    }
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

    const getResponsiveConfig = () => {
      const w = window.innerWidth;
      if (w < 400) {
        return { cardSize: 220, spread: 90, height: 340, push: 100 };
      } else if (w < 480) {
        return { cardSize: 250, spread: 120, height: 370, push: 130 };
      } else if (w < 768) {
        return { cardSize: 300, spread: 160, height: 420, push: 160 };
      } else {
        return { cardSize: 360, spread: 220, height: 480, push: 220 };
      }
    };

    const cfg = getResponsiveConfig();

    createBounceCards(mount, {
      images: [
        {
          src: "assets/school_bangpleepat.png?v=logo2",
          alt: "รร.บางพลีพัฒนศึกษาลัย (อนุบาล - ป.6)",
          url: "https://www.bangpleepat.com/"
        },
        {
          src: "assets/school_nmrtup.png?v=logo2",
          alt: "รร.นวมินทราชินูทิศ เตรียมอุดมศึกษาพัฒนาการ (ม.1 - ม.6)",
          url: "https://nmrtup.ac.th/"
        }
      ],
      containerWidth: "100%",
      containerHeight: cfg.height,
      cardSize: cfg.cardSize,
      spread: cfg.spread,
      rotation: 8,
      pushDistance: cfg.push,
      hoverScale: 1.08,
      bounciness: 0.6,
      borderWidth: 4,
      borderColor: "rgba(56, 189, 248, 0.45)",
      radius: 24,
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

  // 1. RightAlt 1.5s Hold Listener (PC)
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
        
        // If already logged in, jump straight to Admin Control Room!
        if (sessionStorage.getItem("newja_admin_session") === "Admin1230S_asdl133") {
          openAdminDashboardModal();
        } else {
          openAdminLoginModal();
        }

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

  // 2. Mobile Secret Trigger: Long-press on Navbar Logo for 1.5s
  const brandLogo = document.querySelector('header a[href="#home"]') || document.querySelector('nav a[href="#home"]');
  if (brandLogo) {
    let touchTimer = null;
    brandLogo.addEventListener("touchstart", () => {
      touchTimer = setTimeout(() => {
        playBeep(880, 0.15, "triangle");
        if (sessionStorage.getItem("newja_admin_session") === "Admin1230S_asdl133") {
          openAdminDashboardModal();
        } else {
          openAdminLoginModal();
        }
      }, 1500);
    }, { passive: true });
    brandLogo.addEventListener("touchend", () => {
      if (touchTimer) clearTimeout(touchTimer);
    });
    brandLogo.addEventListener("touchcancel", () => {
      if (touchTimer) clearTimeout(touchTimer);
    });
  }
}

window.openAdminLoginModal = function() {
  // If already authenticated, skip login and open Control Room
  if (sessionStorage.getItem("newja_admin_session") === "Admin1230S_asdl133") {
    openAdminDashboardModal();
    return;
  }
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
    renderAdminManageList();
    if (window.lucide) lucide.createIcons();
  }
};

window.switchAdminRoomTab = function(tab) {
  playBeep(520, 0.06);
  const roomComments = document.getElementById("admin-room-comments");
  const roomPortfolio = document.getElementById("admin-room-portfolio");
  const btnComments = document.getElementById("btn-admin-room-comments");
  const btnPortfolio = document.getElementById("btn-admin-room-portfolio");

  if (tab === "comments") {
    if (roomComments) roomComments.classList.remove("hidden");
    if (roomPortfolio) roomPortfolio.classList.add("hidden");
    if (btnComments) {
      btnComments.className = "px-4 py-2.5 rounded-t-xl text-xs font-bold text-white bg-slate-800 border-t-2 border-cyan-400 flex items-center gap-2 transition";
    }
    if (btnPortfolio) {
      btnPortfolio.className = "px-4 py-2.5 rounded-t-xl text-xs font-bold text-slate-400 hover:text-white flex items-center gap-2 transition";
    }
    loadAdminComments();
  } else {
    if (roomComments) roomComments.classList.add("hidden");
    if (roomPortfolio) roomPortfolio.classList.remove("hidden");
    if (btnPortfolio) {
      btnPortfolio.className = "px-4 py-2.5 rounded-t-xl text-xs font-bold text-white bg-slate-800 border-t-2 border-cyan-400 flex items-center gap-2 transition";
    }
    if (btnComments) {
      btnComments.className = "px-4 py-2.5 rounded-t-xl text-xs font-bold text-slate-400 hover:text-white flex items-center gap-2 transition";
    }
    renderAdminManageList();
  }
  if (window.lucide) lucide.createIcons();
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
const THAI_DAYS = ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"];
const THAI_MONTHS_FULL = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];

function formatThaiDate(date = new Date()) {
  const d = date.getDate();
  const m = THAI_MONTHS_FULL[date.getMonth()];
  const y = date.getFullYear() + 543;
  const dayName = THAI_DAYS[date.getDay()];
  return `${dayName}ที่ ${d} ${m} ${y}`;
}

function getDaysDiff(targetDateStr) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [y, m, d] = targetDateStr.split("-").map(Number);
  const target = new Date(y, m - 1, d);
  const diffTime = target.getTime() - today.getTime();
  return Math.round(diffTime / (1000 * 60 * 60 * 24));
}

// ⏳ เทศกาลที่จะถึงนี้ (Upcoming Festivals: พฤศจิกายน 2026 เป็นต้นไป)
const UPCOMING_FESTIVALS = [
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

// 📜 เทศกาลและวันสำคัญที่พึ่งผ่านไป (Past Festivals: ย้อนหลัง 2 เดือน กันยายน – ตุลาคม 2026)
const PAST_FESTIVALS = [
  {
    id: "halloween-past",
    title: "Halloween & Día de los Muertos",
    thaiTitle: "เทศกาลฮาโลวีน (วันปล่อยผี)",
    targetDate: "2026-10-31",
    dateText: "31 ต.ค. – 2 พ.ย. 2026",
    location: "ทั่วโลก / เม็กซิโก (Mexico City, Oaxaca)",
    description: "เทศกาลเฉลิมฉลองประจำปีระดับสากล มีกิจกรรมแต่งกายแฟนซี เล่าเรื่องสยองขวัญ และเด็กๆ เดินเคาะประตูเพื่อเล่น Trick or Treat",
    icon: "🎃",
    highlight: true,
    highlightBadge: "🎃 พึ่งจัดไป"
  },
  {
    id: "awk-phansa",
    title: "Awk Phansa & Tak Bat Devo",
    thaiTitle: "วันออกพรรษาและประเพณีตักบาตรเทโว",
    targetDate: "2026-10-26",
    dateText: "26 – 27 ต.ค. 2026",
    location: "ริมแม่น้ำโขง (หนองคาย-บึงกาฬ) และวัดทั่วประเทศไทย",
    description: "วันสิ้นสุดการจำพรรษา 3 เดือนของพระสงฆ์ มีประเพณีสืบทอดเอกลักษณ์เฉพาะถิ่น เช่น ปรากฏการณ์บั้งไฟพญานาคริมแม่น้ำโขง (หนองคาย-บึงกาฬ) และประเพณีตักบาตรเทโวโรหณะทั่วประเทศ",
    icon: "🪷",
    highlight: true,
    highlightBadge: "🪷 ประเพณีไทย"
  },
  {
    id: "chulalongkorn-memorial",
    title: "Chulalongkorn & Navamindra Memorial",
    thaiTitle: "วันปิยมหาราช (23 ต.ค.) & วันนวมินทรมหาราช (13 ต.ค.)",
    targetDate: "2026-10-23",
    dateText: "13 และ 23 ต.ค. 2026",
    location: "พระบรมมหาราชวัง ลานพระบรมรูปทรงม้า และทั่วประเทศไทย",
    description: "วันคล้ายวันสวรรคตของพระบาทสมเด็จพระบรมชนกาธิเบศร มหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร (ร.9) และ พระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว (ร.5)",
    icon: "🇹🇭"
  },
  {
    id: "world-food-day",
    title: "World Food Day 2026",
    thaiTitle: "วันอาหารโลก (World Food Day)",
    targetDate: "2026-10-16",
    dateText: "16 ต.ค. 2026",
    location: "องค์การอาหารและเกษตรแห่งสหประชาชาติ (FAO) กรุงโรม และทั่วโลก",
    description: "จัดตั้งโดยองค์การอาหารและการเกษตรแห่งสหประชาชาติ (FAO) เพื่อรณรงค์เรื่องความมั่นคงทางอาหารและการขจัดความหิวโหยในระดับสากล",
    icon: "🌾"
  },
  {
    id: "vegetarian-festival",
    title: "Vegetarian Festival (กินเจ)",
    thaiTitle: "เทศกาลกินเจ (ประเพณีถือศีลกินผัก)",
    targetDate: "2026-10-11",
    dateText: "11 – 20 ต.ค. 2026",
    location: "เยาวราช กรุงเทพฯ, ภูเก็ต และชุมชนชาวไทยเชื้อสายจีนทั่วประเทศ",
    description: "เทศกาลรักษาศีล ละเว้นการบริโภคเนื้อสัตว์ และชำระล้างจิตใจ มีชื่อเสียงโดดเด่นทั้งในกรุงเทพฯ (เยาวราช) และงานประเพณีถือศีลกินผักของชาวไทยเชื้อสายจีนในจังหวัดภูเก็ต",
    icon: "🥬",
    highlight: true,
    highlightBadge: "🥬 เทศกาลกินเจ"
  },
  {
    id: "sat-thai",
    title: "Sat Thai & Sart Duan Sip",
    thaiTitle: "ประเพณีสารทเดือนสิบ / สารทไทย",
    targetDate: "2026-10-10",
    dateText: "ปลาย ก.ย. – 10 ต.ค. 2026",
    location: "จ.นครศรีธรรมราช และทั่วภาคใต้ / ภาคกลาง",
    description: "ประเพณีทำบุญอุทิศส่วนกุศลให้บรรพบุรุษที่ล่วงลับ โดยเฉพาะ งานประเพณีบุญสารทเดือนสิบ ของภาคใต้ (จ.นครศรีธรรมราช)",
    icon: "🍚"
  },
  {
    id: "um-phra-dam-nam",
    title: "Um Phra Dam Nam Festival",
    thaiTitle: "ประเพณีอุ้มพระดำน้ำ เพชรบูรณ์",
    targetDate: "2026-10-09",
    dateText: "9 – 10 ต.ค. 2026",
    location: "แม่น้ำป่าสัก อ.เมือง จ.เพชรบูรณ์",
    description: "ประเพณีเอกลักษณ์ระดับชาติของจังหวัดเพชรบูรณ์ อัญเชิญพระพุทธมหาธรรมราชาดำน้ำในแม่น้ำป่าสักเพื่อความเป็นสิริมงคลและความอุดมสมบูรณ์",
    icon: "🌊"
  },
  {
    id: "mid-autumn",
    title: "Mid-Autumn Festival & Chuseok",
    thaiTitle: "เทศกาลไหว้พระจันทร์ / ชูซอก",
    targetDate: "2026-09-25",
    dateText: "25 – 27 ก.ย. 2026",
    location: "จีน ฮ่องกง ไต้หวัน เกาหลีใต้ สิงคโปร์ เยาวราชไทย",
    description: "เทศกาลเฉลิมฉลองการเก็บเกี่ยวและการรวมตัวของครอบครัวในหลายประเทศแถบเอเชีย เช่น จีน ฮ่องกง ไต้หวัน รวมถึงเทศกาลชูซอกในเกาหลีใต้",
    icon: "🥮"
  },
  {
    id: "peace-day",
    title: "International Day of Peace",
    thaiTitle: "วันสันติภาพสากล (UN Peace Day)",
    targetDate: "2026-09-21",
    dateText: "21 ก.ย. 2026",
    location: "สำนักงานใหญ่สหประชาชาติ (UN) นิวยอร์ก และทั่วโลก",
    description: "วันที่องค์การสหประชาชาติ (UN) อุทิศให้กับการรณรงค์เพื่อสันติภาพและการหยุดยิงทั่วโลก การลั่นระฆังสันติภาพและการรณรงค์งดใช้ความรุนแรง",
    icon: "🕊️"
  },
  {
    id: "oktoberfest",
    title: "Oktoberfest Munich",
    thaiTitle: "เทศกาลอ็อกโทเบอร์เฟสต์ เยอรมนี",
    targetDate: "2026-09-19",
    dateText: "19 ก.ย. – 4 ต.ค. 2026",
    location: "เมืองมิวนิก รัฐบาวาเรีย ประเทศเยอรมนี",
    description: "เทศกาลพื้นบ้านและเทศกาลเบียร์ที่ใหญ่ที่สุดในโลก จัดขึ้นเป็นประจำทุกปีที่เมืองมิวนิก ประเทศเยอรมนี ดึงดูดนักท่องเที่ยวหลายล้านคนจากทั่วทุกมุมโลก",
    icon: "🍺"
  }
];

function prepareFestivalsData() {
  UPCOMING_FESTIVALS.forEach(item => {
    const diff = getDaysDiff(item.targetDate);
    item.days = Math.max(0, diff);
    item.isPast = false;
    item.meta = diff === 0 ? "จัดขึ้นวันนี้! 🎉" : `อีก ${diff} วัน`;
  });

  PAST_FESTIVALS.forEach(item => {
    const diff = getDaysDiff(item.targetDate);
    const daysAgo = Math.max(0, -diff);
    item.days = daysAgo;
    item.isPast = true;
    item.meta = diff === 0 ? "จัดขึ้นวันนี้! 🎉" : `ผ่านไป ${daysAgo} วัน`;
  });

  const upBadge = document.getElementById("festival-upcoming-badge-count");
  if (upBadge) upBadge.textContent = UPCOMING_FESTIVALS.length;
  const pastBadge = document.getElementById("festival-past-badge-count");
  if (pastBadge) pastBadge.textContent = PAST_FESTIVALS.length;
}

prepareFestivalsData();

let currentFestivalMode = "upcoming";

window.switchFestivalTab = function(mode) {
  if (currentFestivalMode === mode) return;
  currentFestivalMode = mode;
  playBeep(600, 0.06);

  const btnUpcoming = document.getElementById("festival-tab-upcoming");
  const btnPast = document.getElementById("festival-tab-past");

  if (mode === "upcoming") {
    if (btnUpcoming) {
      btnUpcoming.className = "px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 bg-cyan-500 text-slate-950 shadow-md cursor-pointer";
    }
    if (btnPast) {
      btnPast.className = "px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition flex items-center gap-1.5 cursor-pointer";
    }
    const topStatus = document.getElementById("festival-counter-status-top");
    const bottomStatus = document.getElementById("festival-counter-status-bottom");
    if (topStatus) topStatus.textContent = "เหลือเวลาอีก";
    if (bottomStatus) bottomStatus.textContent = "วัน (Days Remaining)";

    if (festivalListInstance) {
      festivalListInstance.updateItems(UPCOMING_FESTIVALS);
      festivalListInstance.setSelected(0, true);
    }
  } else {
    if (btnUpcoming) {
      btnUpcoming.className = "px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition flex items-center gap-1.5 cursor-pointer";
    }
    if (btnPast) {
      btnPast.className = "px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 bg-amber-500 text-slate-950 shadow-md cursor-pointer";
    }
    const topStatus = document.getElementById("festival-counter-status-top");
    const bottomStatus = document.getElementById("festival-counter-status-bottom");
    if (topStatus) topStatus.textContent = "ผ่านพ้นไปแล้ว";
    if (bottomStatus) bottomStatus.textContent = "วันที่แล้ว (Days Ago)";

    if (festivalListInstance) {
      festivalListInstance.updateItems(PAST_FESTIVALS);
      festivalListInstance.setSelected(0, true);
    }
  }
};

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

      const topStatus = document.getElementById("festival-counter-status-top");
      const bottomStatus = document.getElementById("festival-counter-status-bottom");
      if (item.isPast) {
        if (topStatus) topStatus.textContent = "ผ่านพ้นไปแล้ว";
        if (bottomStatus) bottomStatus.textContent = item.days === 0 ? "จัดขึ้นวันนี้! (Today)" : "วันที่แล้ว (Days Ago)";
      } else {
        if (topStatus) topStatus.textContent = item.days === 0 ? "เทศกาลสำคัญ" : "เหลือเวลาอีก";
        if (bottomStatus) bottomStatus.textContent = item.days === 0 ? "จัดขึ้นวันนี้! (Today)" : "วัน (Days Remaining)";
      }

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

    const todayEl = document.getElementById("festival-today-text");
    if (todayEl) {
      todayEl.textContent = `วันนี้: ${formatThaiDate(new Date())}`;
    }

    prepareFestivalsData();

    initFestivalLab();

    if (festivalLabMounted && festivalListInstance) {
      const list = currentFestivalMode === "upcoming" ? UPCOMING_FESTIVALS : PAST_FESTIVALS;
      festivalListInstance.updateItems(list);
    }

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

// ─── 18. TIME.IS ATOMIC WORLD CLOCK WIDGETS ──────────────────────────────
async function initWorldClockWidgets() {
  try {
    const { createWorldClock } = await import("./world-clock.js");

    const heroMount = document.getElementById("hero-world-clock");
    if (heroMount) {
      createWorldClock(heroMount, { variant: "hero", showSelector: true });
    }

    const modalMount = document.getElementById("festival-world-clock-mount");
    if (modalMount) {
      createWorldClock(modalMount, { variant: "panel", showSelector: true });
    }
  } catch (e) {
    console.warn("World clock init failed:", e);
  }
}

// ─── 21. REACT BITS: ANIMATED CONTENT (SCROLL REVEAL) ────────────────────
async function initScrollAnimations() {
  try {
    const { initAnimatedContent } = await import("./animated-content.js");
    initAnimatedContent({
      selector: ".reveal-on-scroll",
      distance: 40,
      scale: 0.98,
      blur: 5,
      duration: 0.75,
      threshold: 0.1
    });
  } catch (e) {
    console.warn("Scroll animation init failed:", e);
  }
}

// ─── 19. VISITOR TRACKING & SESSION LOGGING ─────────────────────────────
async function trackVisitorSession() {
  try {
    let visitorId = localStorage.getItem("newja_visitor_id");
    if (!visitorId) {
      visitorId = "vis_" + Math.random().toString(36).substring(2, 10) + "_" + Date.now().toString(36);
      localStorage.setItem("newja_visitor_id", visitorId);
    }
    const payload = {
      visitorId,
      language: localStorage.getItem("newja_lang") || (navigator.language?.startsWith("th") ? "th" : "en"),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Bangkok",
      referrer: document.referrer || "direct",
      screenWidth: window.screen?.width || 0,
      screenHeight: window.screen?.height || 0
    };
    await fetch("/api/visitors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  } catch (e) {}
}

// ─── 20. MULTI-LANGUAGE SYSTEM (i18n & SHUFFLE FLIP) ─────────────────────
async function initI18nSystem() {
  try {
    const { initLanguageSystem } = await import("./i18n.js");
    initLanguageSystem();
  } catch (e) {
    console.warn("i18n init failed:", e);
  }
}

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

  // Multi-Language System (i18n + React Bits Shuffle Flip Animation)
  initI18nSystem();

  // Time.is World Clock Widgets (Navbar, Hero & Festival Modal)
  initWorldClockWidgets();

  // Visitor Tracking & Session Logging
  trackVisitorSession();

  // React Bits AnimatedContent (Scroll-Triggered Reveal)
  initScrollAnimations();

  // Admin secret trigger
  setupAdminSecretTrigger();

  // Load dynamically uploaded portfolio items from Supabase
  loadPortfolioItems();
});


// ─── 17. ADMIN CONTENT STUDIO & SUPABASE DYNAMIC PORTFOLIO ─────────────────
let adminUploadedFiles = []; // { file, dataUrl, name, size } (max 5)
let currentUploadedItems = [];

function getAdminKey() {
  return sessionStorage.getItem("newja_admin_session") || "Admin1230S_asdl133";
}

function isAdminLoggedIn() {
  const k = sessionStorage.getItem("newja_admin_session");
  return k === "Admin1230S_asdl133";
}

window.switchAdminStudioTab = function(tab) {
  playBeep(520, 0.06);
  const viewNew = document.getElementById("admin-view-new");
  const viewManage = document.getElementById("admin-view-manage");
  const btnNew = document.getElementById("btn-studio-tab-new");
  const btnManage = document.getElementById("btn-studio-tab-manage");

  if (tab === "new") {
    if (viewNew) viewNew.classList.remove("hidden");
    if (viewManage) viewManage.classList.add("hidden");
    if (btnNew) {
      btnNew.className = "px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 text-white flex items-center gap-1.5 transition shadow-md";
    }
    if (btnManage) {
      btnManage.className = "px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1.5 transition";
    }
  } else {
    if (viewNew) viewNew.classList.add("hidden");
    if (viewManage) viewManage.classList.remove("hidden");
    if (btnManage) {
      btnManage.className = "px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 text-white flex items-center gap-1.5 transition shadow-md";
    }
    if (btnNew) {
      btnNew.className = "px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1.5 transition";
    }
    renderAdminManageList();
  }
  if (window.lucide) lucide.createIcons();
};

window.selectAdminItemType = function(type) {
  playBeep(600, 0.06);
  const hiddenInput = document.getElementById("admin-item-type");
  if (hiddenInput) hiddenInput.value = type;

  const btnProj = document.getElementById("btn-type-project");
  const btnAchieve = document.getElementById("btn-type-achievement");
  const btnCert = document.getElementById("btn-type-certificate");

  const secProj = document.getElementById("admin-section-project");
  const secAchieve = document.getElementById("admin-section-achievement");
  const secCert = document.getElementById("admin-section-certificate");

  const baseBtnClass = "p-3.5 rounded-2xl border border-white/10 bg-slate-900 text-slate-300 font-bold text-xs sm:text-sm flex flex-col items-center gap-2 transition hover:scale-[1.02]";
  const activeProjClass = "p-3.5 rounded-2xl border-2 border-cyan-500 bg-cyan-500/10 text-cyan-300 font-bold text-xs sm:text-sm flex flex-col items-center gap-2 transition hover:scale-[1.02]";
  const activeAchieveClass = "p-3.5 rounded-2xl border-2 border-amber-500 bg-amber-500/10 text-amber-300 font-bold text-xs sm:text-sm flex flex-col items-center gap-2 transition hover:scale-[1.02]";
  const activeCertClass = "p-3.5 rounded-2xl border-2 border-indigo-500 bg-indigo-500/10 text-indigo-300 font-bold text-xs sm:text-sm flex flex-col items-center gap-2 transition hover:scale-[1.02]";

  if (btnProj) btnProj.className = type === "project" ? activeProjClass : baseBtnClass;
  if (btnAchieve) btnAchieve.className = type === "achievement" ? activeAchieveClass : baseBtnClass;
  if (btnCert) btnCert.className = type === "certificate" ? activeCertClass : baseBtnClass;

  if (secProj) secProj.classList.toggle("hidden", type !== "project");
  if (secAchieve) secAchieve.classList.toggle("hidden", type !== "achievement");
  if (secCert) secCert.classList.toggle("hidden", type !== "certificate");

  if (window.lucide) lucide.createIcons();
};

// Client-Side Canvas Image Compression (Max 1280px, 0.85 Quality)
function compressImageToDataUrl(file, maxWidth = 1280, quality = 0.85) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;
        if (width > maxWidth || height > maxWidth) {
          if (width > height) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxWidth) / height);
            height = maxWidth;
          }
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL("image/jpeg", quality);
        resolve(dataUrl);
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

window.handleAdminFilesSelected = async function(e) {
  const files = Array.from(e.target.files || []);
  if (!files.length) return;

  const remainingSlots = 5 - adminUploadedFiles.length;
  if (remainingSlots <= 0) {
    showToast({
      title: "รูปภาพครบแล้ว",
      description: "อัปโหลดครบ 5 รูปแล้วครับ หากต้องการเปลี่ยนให้ลบรูปเดิมก่อน",
      fuseColor: "#f59e0b"
    });
    return;
  }

  const filesToAdd = files.slice(0, remainingSlots);
  if (files.length > remainingSlots) {
    showToast({
      title: "จำกัดสูงสุด 5 รูป",
      description: `ระบบรับรูปเพิ่มได้อีก ${remainingSlots} รูป`,
      fuseColor: "#06b6d4"
    });
  }

  for (const file of filesToAdd) {
    try {
      const compressedDataUrl = await compressImageToDataUrl(file, 1280, 0.85);
      adminUploadedFiles.push({
        file,
        dataUrl: compressedDataUrl,
        name: file.name,
        size: file.size
      });
    } catch (err) {
      console.error("Compression error:", err);
    }
  }

  renderAdminThumbnails();
  e.target.value = "";
};

window.removeAdminUploadedFile = function(index) {
  playBeep(420, 0.05);
  adminUploadedFiles.splice(index, 1);
  renderAdminThumbnails();
};

function renderAdminThumbnails() {
  const container = document.getElementById("admin-previews-container");
  const badge = document.getElementById("admin-images-count-badge");
  if (badge) {
    badge.textContent = `เลือกแล้ว ${adminUploadedFiles.length} / 5 รูป`;
  }

  if (!container) return;
  container.innerHTML = "";

  adminUploadedFiles.forEach((item, idx) => {
    const thumb = document.createElement("div");
    thumb.className = "relative aspect-square rounded-xl overflow-hidden border border-white/20 bg-slate-900 group shadow-md";
    thumb.innerHTML = `
      <img src="${item.dataUrl}" alt="Preview" class="w-full h-full object-cover" />
      <span class="absolute top-1 left-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-black/75 text-cyan-300">#${idx + 1}</span>
      <button type="button" onclick="removeAdminUploadedFile(${idx})" class="absolute top-1 right-1 w-6 h-6 rounded-lg bg-red-600/90 hover:bg-red-500 text-white flex items-center justify-center transition shadow-lg">
        <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
      </button>
    `;
    container.appendChild(thumb);
  });

  if (window.lucide) lucide.createIcons();
}

window.handleAdminSubmitItem = async function(e) {
  e.preventDefault();
  const adminKey = getAdminKey();

  const type = document.getElementById("admin-item-type")?.value || "project";
  const title = document.getElementById("admin-field-title")?.value.trim();
  const category = document.getElementById("admin-field-category")?.value.trim();
  const year = document.getElementById("admin-field-year")?.value.trim() || "2026";
  const desc = document.getElementById("admin-field-desc")?.value.trim();

  if (!title) {
    showToast({ title: "ข้อมูลไม่ครบ", description: "กรุณาระบุชื่อรายการ", fuseColor: "#f43f5e" });
    return;
  }

  if (adminUploadedFiles.length === 0) {
    showToast({ title: "ต้องมีรูปภาพ", description: "กรุณาเลือกรูปภาพอย่างน้อย 1 รูป (สูงสุด 5 รูป)", fuseColor: "#f43f5e" });
    return;
  }

  const frameRadio = document.querySelector('input[name="admin-frame-style"]:checked');
  const frameStyle = frameRadio ? frameRadio.value : "none";

  const btn = document.getElementById("btn-admin-submit-item");
  const btnText = document.getElementById("btn-admin-submit-text");
  if (btn) btn.disabled = true;
  if (btnText) btnText.textContent = "กำลังอัปโหลดรูปและบันทึก...";

  try {
    const uploadedUrls = [];

    // 1. Upload each image to Supabase Storage via /api/upload
    for (let i = 0; i < adminUploadedFiles.length; i++) {
      if (btnText) btnText.textContent = `กำลังอัปโหลดรูป (${i + 1}/${adminUploadedFiles.length})...`;
      const item = adminUploadedFiles[i];

      const res = await fetch("/api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Admin-Key": adminKey
        },
        body: JSON.stringify({
          filename: item.name,
          data: item.dataUrl,
          contentType: "image/jpeg",
          adminKey
        })
      });

      if (res.ok) {
        const uploadData = await res.json();
        if (uploadData.url) {
          uploadedUrls.push(uploadData.url);
        } else {
          uploadedUrls.push(item.dataUrl);
        }
      } else {
        uploadedUrls.push(item.dataUrl);
      }
    }

    // 2. Prepare payload
    const payload = {
      type,
      title,
      category,
      year,
      description: desc,
      images: uploadedUrls,
      frame_style: frameStyle,
      adminKey
    };

    if (type === "achievement") {
      payload.competition_level = document.getElementById("admin-field-level")?.value.trim() || "ระดับประเทศ";
      payload.award_title = document.getElementById("admin-field-award")?.value.trim() || "รางวัลชนะเลิศ";
      payload.prize_money = Number(document.getElementById("admin-field-prize")?.value) || 0;
      payload.competition_type = document.getElementById("admin-field-comptype")?.value.trim() || "Hackathon";
      payload.team_name = document.getElementById("admin-field-team")?.value.trim();
      payload.project_name = document.getElementById("admin-field-projname")?.value.trim();
      payload.news_url = document.getElementById("admin-field-newsurl")?.value.trim();
    } else if (type === "project") {
      const tagsStr = document.getElementById("admin-field-tags")?.value.trim();
      payload.tags = tagsStr ? tagsStr.split(",").map(t => t.trim()).filter(Boolean) : [];
      payload.demo_url = document.getElementById("admin-field-demourl")?.value.trim();
      payload.canva_url = document.getElementById("admin-field-canvaurl")?.value.trim();
    } else if (type === "certificate") {
      payload.issuer = document.getElementById("admin-field-issuer")?.value.trim() || "หน่วยงานผู้ออกใบรับรอง";
      payload.verify_url = document.getElementById("admin-field-verifyurl")?.value.trim();
    }

    if (btnText) btnText.textContent = "กำลังบันทึกลงฐานข้อมูล Supabase...";

    // 3. Send to /api/items
    const itemRes = await fetch("/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Admin-Key": adminKey
      },
      body: JSON.stringify(payload)
    });

    if (itemRes.ok) {
      playBeep(880, 0.15);
      showToast({
        title: "🎉 เผยแพร่ผลงานสำเร็จ!",
        description: "รายการใหม่ถูกซิงค์ขึ้นฐานข้อมูล Supabase เรียบร้อย ทุกคนเห็นได้ทันที",
        fuseColor: "#10b981"
      });
      
      // Reset form
      document.getElementById("admin-upload-form")?.reset();
      adminUploadedFiles = [];
      renderAdminThumbnails();

      // Refresh items on main page
      await loadPortfolioItems();

      // Switch to manage tab in Studio
      switchAdminStudioTab("manage");
    } else {
      const errData = await itemRes.json();
      throw new Error(errData.error || "Failed to save item");
    }
  } catch (err) {
    playBeep(260, 0.2);
    showToast({
      title: "เกิดข้อผิดพลาด",
      description: err.message,
      fuseColor: "#f43f5e"
    });
  } finally {
    if (btn) btn.disabled = false;
    if (btnText) btnText.textContent = "บันทึกและเผยแพร่ทันที";
  }
};

window.renderAdminManageList = function() {
  const listEl = document.getElementById("admin-manage-list");
  const countBadge = document.getElementById("admin-items-count");
  if (countBadge) countBadge.textContent = currentUploadedItems.length;

  if (!listEl) return;
  if (!currentUploadedItems.length) {
    listEl.innerHTML = `
      <div class="text-center py-10 rounded-2xl bg-slate-950/60 border border-white/5 space-y-2">
        <div class="text-slate-500 text-xs">ยังไม่มีรายการผลงานที่อัปโหลดไว้</div>
        <button type="button" onclick="switchAdminStudioTab('new')" class="px-4 py-1.5 rounded-lg bg-cyan-600/20 text-cyan-300 text-xs font-bold hover:bg-cyan-600/40 transition">
          + อัปโหลดรายการแรกเลย
        </button>
      </div>
    `;
    return;
  }

  listEl.innerHTML = currentUploadedItems
    .map((item) => {
      const mainImg = item.images && item.images.length ? item.images[0] : "";
      const imgCount = item.images ? item.images.length : 0;
      const typeLabel = item.type === "achievement" ? "🏆 การแข่งขัน" : item.type === "certificate" ? "📜 ใบรับรอง" : "🎨 ผลงาน";
      const typeColor = item.type === "achievement" ? "text-amber-400 bg-amber-500/10 border-amber-500/30" : item.type === "certificate" ? "text-indigo-400 bg-indigo-500/10 border-indigo-500/30" : "text-cyan-400 bg-cyan-500/10 border-cyan-500/30";

      return `
        <div class="p-3.5 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-between gap-3 group hover:border-cyan-500/30 transition">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-14 h-14 rounded-xl overflow-hidden bg-slate-900 border border-white/10 shrink-0 relative">
              ${mainImg ? `<img src="${mainImg}" alt="" class="w-full h-full object-cover" />` : `<div class="w-full h-full flex items-center justify-center text-[10px] text-slate-600">No Image</div>`}
              ${imgCount > 1 ? `<span class="absolute bottom-1 right-1 px-1 rounded text-[9px] font-mono bg-black/80 text-cyan-300">${imgCount} รูป</span>` : ""}
            </div>
            <div class="min-w-0">
              <div class="flex items-center gap-2">
                <span class="px-2 py-0.5 rounded text-[10px] font-bold border ${typeColor}">${typeLabel}</span>
                <span class="text-[10px] text-slate-500 font-mono">${item.year || "2026"}</span>
              </div>
              <h4 class="font-bold text-white text-xs sm:text-sm truncate mt-1">${item.title}</h4>
              <p class="text-[11px] text-slate-400 truncate mt-0.5">${item.award_title || item.category || item.issuer || ""}</p>
            </div>
          </div>
          <button type="button" onclick="deletePortfolioItem('${item.id}')" class="px-3 py-1.5 rounded-lg bg-red-600/10 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/30 text-xs font-bold transition flex items-center gap-1 shrink-0">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            <span>ลบ</span>
          </button>
        </div>
      `;
    })
    .join("");

  if (window.lucide) lucide.createIcons();
};

window.deletePortfolioItem = async function(id) {
  if (!confirm("คุณแน่ใจว่าต้องการลบรายการนี้ออกจากฐานข้อมูล Supabase ใช่หรือไม่?")) return;
  const adminKey = getAdminKey();
  try {
    const res = await fetch(`/api/items?id=${id}`, {
      method: "DELETE",
      headers: { "X-Admin-Key": adminKey }
    });
    if (res.ok) {
      playBeep(480, 0.1);
      showToast({
        title: "ลบสำเร็จ",
        description: "ลบรายการออกจากฐานข้อมูลเรียบร้อยแล้ว",
        fuseColor: "#94a3b8"
      });
      await loadPortfolioItems();
      renderAdminManageList();
    } else {
      showToast({ title: "ลบไม่สำเร็จ", description: "เกิดข้อผิดพลาดจากเซิร์ฟเวอร์", fuseColor: "#f43f5e" });
    }
  } catch (err) {
    showToast({ title: "เกิดข้อผิดพลาด", description: err.message, fuseColor: "#f43f5e" });
  }
};

window.loadPortfolioItems = async function() {
  try {
    const res = await fetch("/api/items");
    if (!res.ok) return;
    const data = await res.json();
    const items = Array.isArray(data.items) ? data.items : [];
    currentUploadedItems = items;

    const countBadge = document.getElementById("admin-items-count");
    if (countBadge) countBadge.textContent = items.length;

    const projContainer = document.getElementById("dynamic-projects-container");
    const achieveContainer = document.getElementById("dynamic-achievements-container");
    const certContainer = document.getElementById("dynamic-certificates-container");

    if (projContainer) projContainer.innerHTML = "";
    if (achieveContainer) achieveContainer.innerHTML = "";
    if (certContainer) certContainer.innerHTML = "";

    let extraPrizeMoney = 0;

    items.forEach((item) => {
      const frameClass = item.frame_style && item.frame_style !== "none" ? `frame-${item.frame_style}` : "";
      const images = Array.isArray(item.images) ? item.images : [];
      const mainImg = images.length ? images[0] : "assets/j3a-store.png";

      // 1. PROJECT
      if (item.type === "project" && projContainer) {
        const tags = Array.isArray(item.tags) ? item.tags : [];
        const tagsHtml = tags.map(t => `<span class="px-2.5 py-1 rounded bg-slate-800 text-xs text-slate-300">${t}</span>`).join("");
        
        let galleryHtml = "";
        if (images.length > 1) {
          galleryHtml = `
            <div class="grid grid-cols-${Math.min(images.length, 5)} gap-2 pt-2">
              ${images.map((img, i) => `
                <div onclick="openCertModal('${img}', '${item.title}', '${item.category || "Project"}')" class="aspect-video rounded-lg overflow-hidden border border-white/10 bg-slate-950 cursor-pointer hover:border-cyan-400 transition">
                  <img src="${img}" alt="" class="w-full h-full object-cover" />
                </div>
              `).join("")}
            </div>
          `;
        }

        const card = document.createElement("div");
        card.className = `spotlight-card rounded-2xl p-6 flex flex-col justify-between space-y-5 ${frameClass}`;
        card.innerHTML = `
          <div class="space-y-4">
            <div onclick="openCertModal('${mainImg}', '${item.title}', '${item.category || "Project"}')" class="aspect-video w-full rounded-xl overflow-hidden border border-white/10 bg-slate-950 cursor-pointer group">
              <img src="${mainImg}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            ${galleryHtml}
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase">
                ${item.category || "WEB APPLICATION"}
              </span>
              <span class="text-xs text-slate-400">${item.year || "2026"}</span>
            </div>
            <h3 class="text-2xl font-black text-white">${item.title}</h3>
            <p class="text-xs md:text-sm text-slate-300 leading-relaxed">${item.description || ""}</p>
            <div class="flex flex-wrap gap-2 pt-1">${tagsHtml}</div>
          </div>
          <div class="flex flex-wrap items-center justify-between w-full gap-3 pt-2">
            <div class="flex flex-wrap items-center gap-2.5">
              ${item.demo_url ? `
                <a href="${item.demo_url}" target="_blank" rel="noreferrer" class="px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-xs font-bold text-white flex items-center gap-1.5 transition shadow-md shadow-cyan-600/30">
                  <i data-lucide="globe" class="w-3.5 h-3.5"></i>
                  <span>เว็บจริง ↗</span>
                </a>
              ` : ""}
              ${item.canva_url ? `
                <a href="${item.canva_url}" target="_blank" rel="noreferrer" class="px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-indigo-500/40 text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition">
                  <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                  <span>รายละเอียด</span>
                </a>
              ` : ""}
            </div>
            <div class="pulse-heart-mount" data-heart-id="item-${item.id}" data-heart-count="0"></div>
          </div>
        `;
        projContainer.appendChild(card);
      }

      // 2. ACHIEVEMENT
      else if (item.type === "achievement" && achieveContainer) {
        if (item.prize_money) extraPrizeMoney += Number(item.prize_money);

        let imagesGrid = "";
        if (images.length === 1) {
          imagesGrid = `
            <div onclick="openCertModal('${images[0]}', '${item.title}', '${item.award_title || ""}')" class="cursor-pointer group rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/50 bg-slate-950 aspect-[4/3] shadow-lg transition">
              <img src="${images[0]}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
            </div>
          `;
        } else if (images.length === 2) {
          imagesGrid = `
            <div class="grid grid-cols-2 gap-3">
              ${images.map(img => `
                <div onclick="openCertModal('${img}', '${item.title}', '${item.award_title || ""}')" class="cursor-pointer group rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/50 bg-slate-950 aspect-[4/5] shadow-lg transition">
                  <img src="${img}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                </div>
              `).join("")}
            </div>
          `;
        } else {
          imagesGrid = `
            <div class="grid grid-cols-2 gap-2.5">
              ${images.slice(0, 4).map((img, idx) => `
                <div onclick="openCertModal('${img}', '${item.title}', '${item.award_title || ""}')" class="cursor-pointer group rounded-xl overflow-hidden border border-white/10 hover:border-amber-400/50 bg-slate-950 aspect-video shadow-md transition relative">
                  <img src="${img}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                  ${idx === 3 && images.length > 4 ? `<div class="absolute inset-0 bg-black/75 flex items-center justify-center font-bold text-xs text-white">+${images.length - 4} รูป</div>` : ""}
                </div>
              `).join("")}
            </div>
          `;
        }

        const card = document.createElement("div");
        card.className = `spotlight-card rounded-3xl p-6 sm:p-8 ${frameClass}`;
        card.innerHTML = `
          <div class="grid md:grid-cols-12 gap-8 items-center">
            <div class="md:col-span-7 space-y-4">
              <div class="flex flex-wrap items-center gap-2">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase">
                  <i data-lucide="trophy" class="w-3.5 h-3.5"></i>
                  <span>${item.award_title || "รางวัลชนะเลิศ"}</span>
                </div>
                ${item.competition_level ? `<span class="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">${item.competition_level}</span>` : ""}
                ${item.prize_money ? `<span class="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">฿${Number(item.prize_money).toLocaleString()}</span>` : ""}
              </div>
              <h3 class="text-2xl md:text-3xl font-black text-white leading-tight">${item.title}</h3>
              <div class="flex flex-wrap items-center gap-2 text-xs text-amber-300 font-semibold">
                ${item.team_name ? `<span class="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20">${item.team_name}</span>` : ""}
                ${item.project_name ? `<span class="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300">${item.project_name}</span>` : ""}
              </div>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${item.description || ""}</p>
              <div class="pt-2 flex flex-wrap items-center justify-between gap-4">
                ${item.news_url ? `
                  <a href="${item.news_url}" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300 hover:text-white hover:bg-amber-500/30 text-xs font-bold transition shadow-lg shadow-amber-500/10">
                    <i data-lucide="external-link" class="w-4 h-4 text-amber-400"></i>
                    <span>อ่านบทความและประกาศผลรางวัล ↗</span>
                  </a>
                ` : `<div></div>`}
                <div class="pulse-heart-mount" data-heart-id="item-${item.id}" data-heart-count="0"></div>
              </div>
            </div>
            <div class="md:col-span-5">${imagesGrid}</div>
          </div>
        `;
        achieveContainer.appendChild(card);
      }

      // 3. CERTIFICATE
      else if (item.type === "certificate" && certContainer) {
        const card = document.createElement("div");
        card.className = `spotlight-card rounded-2xl p-4 space-y-3 cursor-pointer group hover:border-cyan-500/50 transition ${frameClass}`;
        card.setAttribute("onclick", `openCertModal('${mainImg}', '${item.title.replace(/'/g, "\'")}', '${(item.issuer || "").replace(/'/g, "\'")}')`);
        card.innerHTML = `
          <div class="aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-slate-950 flex items-center justify-center p-2 relative">
            <img src="${mainImg}" alt="${item.title}" class="w-full h-full object-contain group-hover:scale-105 transition duration-300" />
            ${images.length > 1 ? `<span class="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-400/40 font-mono">${images.length} รูป</span>` : ""}
            <span class="absolute bottom-2 right-2 p-1.5 rounded-lg bg-slate-900/80 border border-white/10 text-white text-[10px] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
              <i data-lucide="maximize-2" class="w-3 h-3"></i>
              <span>ดูใบรับรอง</span>
            </span>
          </div>
          <div>
            <h4 class="font-bold text-white text-sm">${item.title}</h4>
            <p class="text-xs text-cyan-400 mt-0.5">${item.issuer || item.category || "Certificate"}</p>
          </div>
        `;
        certContainer.appendChild(card);
      }
    });

    const prizeEl = document.getElementById("stat-prize-money");
    if (prizeEl) {
      const totalPrize = 22000 + extraPrizeMoney;
      prizeEl.setAttribute("data-countup-to", totalPrize);
    }

    initSpotlightCards();
    initPulseHearts();
    if (window.lucide) lucide.createIcons();
  } catch (err) {
    console.error("loadPortfolioItems error:", err);
  }
};
