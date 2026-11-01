/* ==============================================================================
   🌐 i18n Multi-Language System (Thai 🇹🇭 / English 🇬🇧)
   Auto Browser Language Detection (th -> TH, other -> EN)
   Features React Bits <Shuffle /> 3D Flip Scramble Animation on Language Switch
   ============================================================================== */

import { shuffleText } from './shuffle.js';
import { setGlobalClockLanguage } from './world-clock.js';

export const TRANSLATIONS = {
  th: {
    // Navigation
    "nav_home": "Home",
    "nav_about": "About",
    "nav_portfolio": "Portfolio",
    "nav_services": "Services",
    "nav_contact": "Contact",
    "nav_festival": "เทศกาล",
    "nav_sound_on": "เปิดเสียงบรรยากาศ",
    "nav_sound_off": "ปิดเสียง",
    
    // Hero Section
    "hero_tag": "NMRTUP (ม.6 / วิทย์-คณิต) • PROBLEM SOLVER & WEB SPECIALIST",
    "hero_title_prefix": "ภัทรดนัย ป้องเศร้า",
    "hero_title_nickname": "(นิว)",
    "hero_desc": "เด็กติดเกมคนหนึ่งที่ก้าวสู่การเป็นหัวหน้าทีมพัฒนาเว็บไซต์ ทำงานจริงระดับประเทศ แก้ไขปัญหาเชิงลึก และสร้างระบบที่ตอบโจทย์ผู้ใช้จริง",
    "hero_chat_btn": "พูดคุยกับผม",
    "hero_contact_btn": "ติดต่อฉัน",
    "hero_drag_hint": "ดึงยืดเพื่อเหวี่ยงบัตรได้อิสระ",
    "hero_bottom_hint": "คลิกที่บัตรเพื่อสลับมุมมอง",
    
    // About Me
    "about_title": "About Me",
    "about_sub": "เรื่องราว แรงบันดาลใจ และเป้าหมายการเดินทางในโลกคอมพิวเตอร์และเทคโนโลยีสารสนเทศ",
    "about_greeting": "สวัสดีครับ, ผม",
    "about_name": "ภัทรดนัย ป้องเศร้า",
    "about_nickname": "ชื่อเล่น นิว (New JA)",
    "about_role": "นักพัฒนาที่พร้อมลุยงานจริง มีทักษะและความสามารถในการวิเคราะห์แก้ปัญหา ดูแลและจัดการระบบเว็บไซต์ ค้นหาและแก้บั๊กเชิงลึก (Bug Fixing) พร้อมพัฒนาระบบซอฟต์แวร์ให้เสถียรและตอบโจทย์ผู้ใช้งานจริงอย่างเต็มประสิทธิภาพ",
    "about_story_1": "ผมมีความสนใจในด้านคอมพิวเตอร์มาตั้งแต่ ม.1 ตอนนั้นเป็นเพียงเด็กที่ติดเกมมากๆ จนเกิดคำถามว่า \"เกมพวกนี้มันทำงานและสร้างขึ้นมาได้อย่างไร?\" จึงเริ่มศึกษาและเขียนโค้ดสร้างเกมตั้งแต่วัยเยาว์",
    "about_story_2": "ช่วงมัธยมปลาย ผมได้ก้าวขึ้นเป็น หัวหน้าทีมพัฒนาเว็บไซต์ ให้กับโปรเจกต์ AQUA-AI นำเสนอ Pitching จนคณะกรรมการระดับประเทศไม่มีคอมเมนต์ติ และคว้ารางวัลชนะเลิศอันดับ 1 ระดับประเทศมาได้",
    "about_story_3": "นอกจากนี้ยังพัฒนา Chatbot ด้วย Thai LLM ภายในเวลาเพียง 1 วัน คว้ารองชนะเลิศอันดับ 2 ในการแข่งขันของคณะเทคโนโลยีสารสนเทศ สจล. อีกด้วย",
    "about_mask_hint": "เลื่อนเมาส์ไปที่ใบหน้าเพื่อเปิดลูกเล่น Mask Reveal",
    
    // Education Journey
    "edu_tag": "เส้นทางการศึกษา (Education Journey)",
    "edu_title": "ประถมศึกษา & มัธยมศึกษา",
    "edu_sub": "เลื่อนเมาส์หรือแตะที่การ์ดเพื่อกระจายฟิสิกส์ (Bounce & Hover) • คลิกที่การ์ดเพื่อเปิดเว็บไซต์โรงเรียน",
    "edu_school_1_name": "รร. บางพลีพัฒนศึกษาลัย",
    "edu_school_1_sub": "BPE (อนุบาล - ประถมศึกษา)",
    "edu_school_1_item1": "อนุบาล (Kindergarten)",
    "edu_school_1_item2": "ประถมศึกษาตอนต้น (Grade 1-3)",
    "edu_school_1_item3": "ประถมศึกษาตอนปลาย (Grade 4-6)",
    "edu_school_2_name": "รร. นวมินทราชินูทิศ เตรียมอุดมศึกษาพัฒนาการ",
    "edu_school_2_sub": "NMRTUP (ม.1 - มัธยม 6)",
    "edu_school_2_item1": "มัธยมศึกษาตอนต้น (Grade 7-9)",
    "edu_school_2_item2": "มัธยมศึกษาตอนปลาย (Grade 10-12)",
    "edu_school_2_item3": "ปัจจุบัน: มัธยมศึกษาปีที่ 6 ห้อง 2",
    
    // Services
    "services_title": "Web Services & Expertise",
    "services_sub": "ทักษะและความเชี่ยวชาญด้านการพัฒนา ออกแบบ และดูแลรักษาระบบเว็บแบบครบวงจร",
    "service_1_title": "Full-Stack Web Development",
    "service_1_desc": "พัฒนาเว็บแอปพลิเคชันตั้งแต่สถาปัตยกรรม Frontend จนถึง Backend และฐานข้อมูล ด้วยความปลอดภัยและความเร็วสูง",
    "service_2_title": "In-Depth Bug Fixing",
    "service_2_desc": "ค้นหาและวิเคราะห์แก้บักเชิงลึกทั้งระบบ ตรวจสอบ Memory Leaks, Race Conditions และข้อผิดพลาดระดับโค้ด",
    "service_3_title": "Database & Realtime Systems",
    "service_3_desc": "ออกแบบและปรับแต่งฐานข้อมูลความเร็วสูง ซิงโครไนซ์ข้อมูลแบบ Realtime ผ่าน Supabase, PostgreSQL และ WebSockets",
    "service_4_title": "Creative UI/UX & Micro-Interactions",
    "service_4_desc": "รังสรรค์ประสบการณ์ผู้ใช้ด้วยแอนิเมชันล้ำสมัย Three.js, GSAP และ React Bits ที่ลื่นไหลและโดดเด่น",
    
    // Portfolio
    "portfolio_title": "ผลงาน & กิจกรรม (Portfolio)",
    "portfolio_sub": "รวมผลงานการพัฒนาเว็บไซต์ บอท และการแข่งขันระดับประเทศที่ผ่านมา",
    "port_tab_all": "ทั้งหมด",
    "port_tab_web": "เว็บแอปพลิเคชัน",
    "port_tab_bot": "ดิสคอร์ด & ทูลส์",
    "port_tab_hackathon": "การแข่งขัน & รางวัล",
    "port_like_label": "ถูกใจ",
    "port_already_liked": "คุณได้ส่งกำลังใจให้ผลงานนี้แล้ว ❤️",
    
    // Contact & Discussion
    "contact_title": "Contact & Discussion",
    "contact_sub": "ช่องทางการติดต่อและกล่องความคิดเห็นแบบ Realtime ขับเคลื่อนด้วย Supabase",
    "contact_form_title": "ส่งข้อความถึงผม",
    "contact_form_sub": "ยินดีต้อนรับทุกโอกาสในการแลกเปลี่ยน ปรึกษาโปรเจกต์ หรือพูดคุยครับ",
    "contact_name_label": "ชื่อของคุณ",
    "contact_name_ph": "ชื่อ หรือ นามแฝง",
    "contact_email_label": "อีเมลของคุณ (บังคับใช้ Gmail)",
    "contact_email_ph": "yourname@gmail.com",
    "contact_msg_label": "ข้อความ",
    "contact_msg_ph": "พิมพ์ข้อความที่ต้องการติดต่อ...",
    "contact_send_btn": "ส่งข้อความ",
    "guestbook_title": "ความคิดเห็น",
    "guestbook_name_ph": "ชื่อของคุณ *",
    "guestbook_avatar_ph": "ตัวย่อ (เช่น NJ)",
    "guestbook_msg_ph": "แสดงความคิดเห็นพูดคุย... (มีระบบกรองคำไม่เหมาะสมอัตโนมัติ)",
    "guestbook_post_btn": "โพสต์ความคิดเห็น",
    
    // Festival Countdown
    "fest_modal_title": "FESTIVAL COUNTDOWN",
    "fest_modal_sub": "เช็คเวลาถอยหลังเทศกาลสำคัญระดับโลกและเทศกาลไทย (React Bits Lab)",
    "fest_tab_upcoming": "เทศกาลที่จะถึงนี้",
    "fest_tab_past": "เทศกาลที่พึ่งผ่านไป (ย้อนหลัง 2 เดือน)",
    "fest_days_rem": "วัน (Days Remaining)",
    "fest_days_past": "วันที่แล้ว (Days Ago)",
    "fest_today_badge": "วันนี้! (TODAY)",
    "fest_rem_prefix": "เหลือเวลาอีก",
    "fest_past_prefix": "ผ่านพ้นไปแล้ว",
    "fest_loc_label": "สถานที่จัดงาน:",
    "fest_detail_label": "รายละเอียด:",
    "fest_period_label": "ช่วงเวลาจัดงาน:"
  },
  
  en: {
    // Navigation
    "nav_home": "Home",
    "nav_about": "About",
    "nav_portfolio": "Portfolio",
    "nav_services": "Services",
    "nav_contact": "Contact",
    "nav_festival": "Festivals",
    "nav_sound_on": "Turn Sound On",
    "nav_sound_off": "Mute Sound",
    
    // Hero Section
    "hero_tag": "NMRTUP (GRADE 12 / SCI-MATH) • PROBLEM SOLVER & WEB SPECIALIST",
    "hero_title_prefix": "Pataradanai Pongsao",
    "hero_title_nickname": "(New)",
    "hero_desc": "From a game-loving teenager to a national champion lead web developer. Solving complex problems and engineering robust full-stack digital experiences.",
    "hero_chat_btn": "Chat With Me",
    "hero_contact_btn": "Contact Me",
    "hero_drag_hint": "Stretch & swing the ID lanyard freely across the screen",
    "hero_bottom_hint": "Click card to flip view",
    
    // About Me
    "about_title": "About Me",
    "about_sub": "My journey, inspiration, and technical passion in Computer Science & Information Technology",
    "about_greeting": "Hello, I am",
    "about_name": "Pataradanai Pongsao",
    "about_nickname": "Nickname: New (New JA)",
    "about_role": "Production-ready developer with deep skills in problem analysis, web maintenance, bug fixing, and building high-performance, rock-solid software systems.",
    "about_story_1": "My passion for computers began in Grade 7. As an avid gamer, I wondered: \"How do these games actually work behind the scenes?\", leading me to learn programming and game development from an early age.",
    "about_story_2": "In high school, I became the Lead Web Developer for the AQUA-AI project, delivering a flawless pitch with zero critical remarks from national judges and winning 1st Place National Champion.",
    "about_story_3": "I also engineered a Thai LLM-powered AI Chatbot within just 24 hours, securing 2nd Runner-Up at the prestigious KMITL Faculty of Information Technology competition.",
    "about_mask_hint": "Hover cursor over the portrait for interactive Mask Reveal",
    
    // Education Journey
    "edu_tag": "Education Journey",
    "edu_title": "Primary & Secondary Education",
    "edu_sub": "Hover or touch cards for physics scatter (Bounce & Hover) • Click card to visit school website",
    "edu_school_1_name": "Bangpleepatthanasuksalai School",
    "edu_school_1_sub": "BPE (Kindergarten - Primary School)",
    "edu_school_1_item1": "Kindergarten",
    "edu_school_1_item2": "Lower Primary (Grades 1-3)",
    "edu_school_1_item3": "Upper Primary (Grades 4-6)",
    "edu_school_2_name": "Navamindrajinuthit Triamudomsuksapattanakarn",
    "edu_school_2_sub": "NMRTUP (Grades 7 - 12)",
    "edu_school_2_item1": "Lower Secondary (Grades 7-9)",
    "edu_school_2_item2": "Upper Secondary (Grades 10-12)",
    "edu_school_2_item3": "Current: Grade 12 (Room 2)",
    
    // Services
    "services_title": "Web Services & Expertise",
    "services_sub": "Full-cycle web development, architecture, performance tuning, and technical maintenance",
    "service_1_title": "Full-Stack Web Development",
    "service_1_desc": "Architecting modern web apps from frontend interfaces to scalable backend APIs and secure databases.",
    "service_2_title": "In-Depth Bug Fixing",
    "service_2_desc": "Diagnosing complex root causes, memory leaks, race conditions, and deep logic vulnerabilities.",
    "service_3_title": "Database & Realtime Systems",
    "service_3_desc": "High-throughput database design with real-time data streaming via Supabase, PostgreSQL, and WebSockets.",
    "service_4_title": "Creative UI/UX & Micro-Interactions",
    "service_4_desc": "Crafting tactile user experiences with Three.js, GSAP, and React Bits animations.",
    
    // Portfolio
    "portfolio_title": "Projects & Achievements (Portfolio)",
    "portfolio_sub": "Curated collection of web applications, bots, and national competitions",
    "port_tab_all": "All",
    "port_tab_web": "Web Apps",
    "port_tab_bot": "Discord & Tools",
    "port_tab_hackathon": "Hackathons & Awards",
    "port_like_label": "Like",
    "port_already_liked": "You have already liked this project! ❤️",
    
    // Contact & Discussion
    "contact_title": "Contact & Discussion",
    "contact_sub": "Reach out directly or join the real-time discussion powered by Supabase",
    "contact_form_title": "Send Me a Message",
    "contact_form_sub": "Open for collaborations, project consulting, or technical discussions.",
    "contact_name_label": "Your Name",
    "contact_name_ph": "Your Name or Alias",
    "contact_email_label": "Your Email (Gmail Required)",
    "contact_email_ph": "yourname@gmail.com",
    "contact_msg_label": "Message",
    "contact_msg_ph": "Type your message here...",
    "contact_send_btn": "Send Message",
    "guestbook_title": "Comments & Discussion",
    "guestbook_name_ph": "Your Name *",
    "guestbook_avatar_ph": "Initials (e.g. NJ)",
    "guestbook_msg_ph": "Leave a comment... (Automated profanity filter enabled)",
    "guestbook_post_btn": "Post Comment",
    
    // Festival Countdown
    "fest_modal_title": "FESTIVAL COUNTDOWN",
    "fest_modal_sub": "Live countdown for major global and Thai cultural festivals (React Bits Lab)",
    "fest_tab_upcoming": "Upcoming Festivals",
    "fest_tab_past": "Recently Passed (Last 2 Months)",
    "fest_days_rem": "Days Remaining",
    "fest_days_past": "Days Ago",
    "fest_today_badge": "TODAY!",
    "fest_rem_prefix": "Time Remaining",
    "fest_past_prefix": "Passed Since",
    "fest_loc_label": "Location:",
    "fest_detail_label": "Details:",
    "fest_period_label": "Event Period:"
  }
};

// Auto-detect browser language: Thai if starts with 'th', English otherwise
export function detectInitialLanguage() {
  const saved = localStorage.getItem('newja_lang');
  if (saved === 'th' || saved === 'en') return saved;

  const browserLang = (navigator.languages && navigator.languages[0]) || navigator.language || '';
  return browserLang.toLowerCase().startsWith('th') ? 'th' : 'en';
}

let activeLang = detectInitialLanguage();

export function getActiveLanguage() {
  return activeLang;
}

export function translate(key) {
  const dict = TRANSLATIONS[activeLang] || TRANSLATIONS.th;
  return dict[key] || key;
}

// Elements that get the 3D Flip Scramble animation on switch
const FLIP_ANIMATED_SELECTORS = [
  '#hero-greeting',
  '#about-title-text',
  '#services-title-text',
  '#portfolio-title-text',
  '#contact-title-text',
  '#fest-modal-title-text'
];

export async function setSiteLanguage(lang, triggerAnimation = true) {
  activeLang = lang === 'en' ? 'en' : 'th';
  try {
    localStorage.setItem('newja_lang', activeLang);
  } catch (e) {}

  document.documentElement.lang = activeLang;

  // Update World Clock language
  setGlobalClockLanguage(activeLang);

  // Update all data-i18n elements
  const elements = document.querySelectorAll('[data-i18n]');
  const dict = TRANSLATIONS[activeLang] || TRANSLATIONS.th;

  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const newText = dict[key];
    if (!newText) return;

    const isFlipTarget = triggerAnimation && FLIP_ANIMATED_SELECTORS.some(sel => el.matches(sel));

    if (isFlipTarget) {
      shuffleText(el, newText, {
        effect: 'flip',
        shuffleDirection: 'down',
        duration: 1.1,
        shuffleTimes: 7,
        animationMode: 'sequence',
        stagger: 0.07,
        ease: 'power2.out'
      });
    } else {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = newText;
      } else {
        el.textContent = newText;
      }
    }
  });

  // Update dynamic placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key]) el.placeholder = dict[key];
  });

  // Update language switcher button state
  updateLangButtonUI();

  // Dispatch custom event for dynamic modules (typewriter, festival tabs, etc.)
  window.dispatchEvent(new CustomEvent('newja_language_changed', { detail: { lang: activeLang } }));
}

function updateLangButtonUI() {
  const thBtn = document.getElementById('lang-btn-th');
  const enBtn = document.getElementById('lang-btn-en');
  if (!thBtn || !enBtn) return;

  if (activeLang === 'th') {
    thBtn.className = 'px-2.5 py-1 rounded-lg text-xs font-bold bg-blue-600 text-white shadow-sm transition';
    enBtn.className = 'px-2.5 py-1 rounded-lg text-xs font-medium text-slate-400 hover:text-white transition';
  } else {
    thBtn.className = 'px-2.5 py-1 rounded-lg text-xs font-medium text-slate-400 hover:text-white transition';
    enBtn.className = 'px-2.5 py-1 rounded-lg text-xs font-bold bg-blue-600 text-white shadow-sm transition';
  }
}

export function initLanguageSystem() {
  // Initial render without flip animation to prevent jarring first load
  setSiteLanguage(activeLang, false);

  const thBtn = document.getElementById('lang-btn-th');
  const enBtn = document.getElementById('lang-btn-en');

  if (thBtn) thBtn.addEventListener('click', () => setSiteLanguage('th', true));
  if (enBtn) enBtn.addEventListener('click', () => setSiteLanguage('en', true));
}

export default {
  TRANSLATIONS,
  detectInitialLanguage,
  getActiveLanguage,
  translate,
  setSiteLanguage,
  initLanguageSystem
};
