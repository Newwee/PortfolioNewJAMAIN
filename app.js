/* ==============================================================================
   🚀 New JA Portfolio — Senior Creative Developer Engine
   Supabase Realtime Comments • 3D Lanyard Physics • Mask Reveal • 3D Laptop Stage
   Web Audio Synthesizer • Typewriter • Spotlight Cards
   ============================================================================== */

// ─── 1. GLOBAL STATE & CONFIGURATION ─────────────────────────────────────────
const state = {
  soundEnabled: true,
  audioCtx: null,
  comments: [],
  spotify: {
    title: "A little music. A lot of ideas.",
    embed_url: "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
  },
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

// ─── 2. TOAST NOTIFICATION HELPER ───────────────────────────────────────────
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  playBeep(600, 0.05);
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

    osc.type = type;
    osc.frequency.setValueAtTime(freq, state.audioCtx.currentTime);

    gain.gain.setValueAtTime(0.08, state.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, state.audioCtx.currentTime + duration);

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
  const loader = document.getElementById("loader");
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
        loader.classList.add("loaded");
        playBeep(523.25, 0.12);
        setTimeout(() => playBeep(659.25, 0.12), 80);
        setTimeout(() => playBeep(783.99, 0.2), 160);
      }, 250);
    }
    percentEl.textContent = progress;
    barEl.style.width = `${progress}%`;
  }, 65);
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

// ─── 6. 3D INTERACTIVE LANYARD PHYSICS & FLIP ───────────────────────────────
function initLanyard() {
  const card = document.getElementById("lanyard-card");
  const strap = document.getElementById("lanyard-strap");
  if (!card) return;

  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
    playBeep(480, 0.08);
  });

  window.addEventListener("mousemove", (e) => {
    if (card.classList.contains("flipped")) return;
    const centerX = window.innerWidth * 0.72;
    const centerY = window.innerHeight * 0.45;
    const x = (centerX - e.clientX) / 28;
    const y = (centerY - e.clientY) / 28;

    card.style.transform = `rotateY(${-x}deg) rotateX(${y}deg) rotateZ(${-x * 0.28}deg)`;
    if (strap) {
      strap.style.transform = `rotateZ(${-x * 0.22}deg)`;
    }
  }, { passive: true });
}

// ─── 7. MOUSE HOVER MASK REVEAL (Hero Mask Effect) ──────────────────────────
function initMaskReveal() {
  const container = document.getElementById("mask-container");
  const layer = document.getElementById("mask-layer");
  if (!container || !layer) return;

  container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    layer.style.setProperty("--reveal-x", `${x}px`);
    layer.style.setProperty("--reveal-y", `${y}px`);
  });

  container.addEventListener("mouseleave", () => {
    layer.style.setProperty("--reveal-x", "-300px");
    layer.style.setProperty("--reveal-y", "-300px");
  });
}

// ─── 8. TYPEWRITER SUBTITLE EFFECT ──────────────────────────────────────────
function initTypewriter() {
  const target = document.getElementById("typewriter");
  if (!target) return;

  const roles = [
    "NMRTUP Grade 12 | Sci - Math",
    "Target: IT @ KMITL (สจล.)",
    "Junior Fullstack Developer",
    "Discord Bot & Automation Architect",
    "AI & STEM Innovator (แชมป์ระดับชาติ)"
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
    btn.classList.remove("bg-blue-600", "text-white");
    btn.classList.add("text-slate-400");
  });

  const activeBtn = document.getElementById(`tab-${tabName}`);
  if (activeBtn) {
    activeBtn.classList.add("bg-blue-600", "text-white");
    activeBtn.classList.remove("text-slate-400");
  }

  if (window.lucide) lucide.createIcons();
};

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

// ─── 12. REALTIME COMMENTS WITH SUPABASE & BAD WORDS FILTER ─────────────────
async function loadComments() {
  const listEl = document.getElementById("comment-list");
  const countEl = document.getElementById("comment-count");

  try {
    const res = await fetch("/api/comments");
    const data = await res.json();
    state.comments = data.comments || [];

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
              <button onclick="handleDeleteComment('${c.id}')" title="ลบคอมเมนต์ (Admin)" class="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition text-xs">
                <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          `;
        })
        .join("");

      if (window.lucide) lucide.createIcons();
    }
  } catch (err) {
    if (listEl) {
      listEl.innerHTML = `<p class="text-xs text-slate-500 text-center py-4">ไม่สามารถโหลดคอมเมนต์ได้ชั่วคราว</p>`;
    }
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
    } else {
      const err = await res.json();
      showToast(err.error || "เกิดข้อผิดพลาดในการโพสต์");
    }
  } catch (err) {
    showToast("เกิดข้อผิดพลาดในการเชื่อมต่อ");
  } finally {
    if (btn) btn.disabled = false;
  }
};

window.handleDeleteComment = async function(id) {
  if (!confirm("คุณต้องการลบคอมเมนต์นี้หรือไม่?")) return;
  try {
    const res = await fetch(`/api/comments/${id}`, { method: "DELETE" });
    if (res.ok) {
      showToast("ลบคอมเมนต์เรียบร้อยแล้ว");
      await loadComments();
    } else {
      showToast("จำเป็นต้องใช้สิทธิ์ Admin เพื่อลบคอมเมนต์");
    }
  } catch (err) {
    showToast("ไม่สามารถลบคอมเมนต์ได้");
  }
};

// ─── 13. SPOTIFY PLAYLIST SYNC (SUPABASE INTEGRATION) ───────────────────────
async function loadSpotifySettings() {
  try {
    const res = await fetch("/api/settings/spotify");
    const data = await res.json();
    if (data && data.embed_url) {
      state.spotify = data;
      const iframe = document.getElementById("spotify-iframe");
      const heading = document.getElementById("spotify-heading");
      const adminUrlInput = document.getElementById("admin-spotify-url");
      const adminTitleInput = document.getElementById("admin-spotify-title");

      if (iframe) iframe.src = data.embed_url;
      if (adminUrlInput) adminUrlInput.value = data.embed_url;
      if (adminTitleInput) adminTitleInput.value = data.title;
    }
  } catch (e) {}
}

window.handleSaveSpotify = async function(e) {
  e.preventDefault();
  const title = document.getElementById("admin-spotify-title")?.value;
  const embed_url = document.getElementById("admin-spotify-url")?.value;

  try {
    const res = await fetch("/api/settings/spotify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, embed_url })
    });

    if (res.ok) {
      showToast("บันทึกการตั้งค่า Spotify ลง Supabase สำเร็จ!");
      closeAdminModal();
      await loadSpotifySettings();
    } else {
      showToast("กรุณาตรวจสอบข้อมูลหรือสิทธิ์ Admin");
    }
  } catch (err) {
    showToast("เกิดข้อผิดพลาดในการบันทึก");
  }
};

// ─── 14. ADMIN MODAL ────────────────────────────────────────────────────────
window.openAdminModal = function() {
  playBeep(600, 0.08);
  const modal = document.getElementById("admin-modal");
  if (modal) modal.classList.remove("hidden");
  if (window.lucide) lucide.createIcons();
};

window.closeAdminModal = function() {
  playBeep(400, 0.06);
  const modal = document.getElementById("admin-modal");
  if (modal) modal.classList.add("hidden");
};

const adminBtn = document.getElementById("admin-btn");
if (adminBtn) adminBtn.addEventListener("click", openAdminModal);

const editSpotifyBtn = document.getElementById("edit-spotify-btn");
if (editSpotifyBtn) editSpotifyBtn.addEventListener("click", openAdminModal);

// ─── 15. CONTACT FORM SUBMISSION ────────────────────────────────────────────
window.handleSendContact = function(e) {
  e.preventDefault();
  const name = document.getElementById("contact-name")?.value;
  showToast(`ขอบคุณครับ ${name || ""}! ระบบได้รับข้อความแล้ว จะติดต่อกลับโดยเร็วที่สุดครับ`);
  document.getElementById("contact-form")?.reset();
};

// ─── 16. BOOTSTRAP APPLICATION ──────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) lucide.createIcons();
  initPreloader();
  initStarfield();
  initLanyard();
  initMaskReveal();
  initTypewriter();
  initSpotlightCards();
  loadComments();
  loadSpotifySettings();
});
