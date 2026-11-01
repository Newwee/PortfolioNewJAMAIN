/* ==============================================================================
   🌐 i18n Multi-Language System (Thai 🇹🇭 / English 🇬🇧)
   Auto Browser Language Detection (th -> TH, other -> EN)
   Features React Bits <Shuffle /> 3D Flip Scramble on Hero Headline
   Optimized 60fps instant transitions for all body sections
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
    "hero_tag": "Grade 12 (Sci - Math) • Problem Solver & Web Specialist",
    "hero_title_prefix": "ภัทรดนัย ป้องเศร้า",
    "hero_title_nickname": "New JA (นิว)",
    "hero_desc": "ผมเป็นคนที่หลงใหลในโลกของคอมพิวเตอร์มาตั้งแต่วัยเด็ก จากจุดเริ่มต้นที่อยากรู้ว่าเกมถูกสร้างขึ้นมาได้อย่างไร สู่การเป็นหัวหน้าทีมพัฒนาเว็บไซต์ที่พาทีมคว้ารางวัลชนะเลิศระดับประเทศ มีความสามารถในการวิเคราะห์แก้ปัญหา ดูแลและจัดการระบบเว็บไซต์ ค้นหาและแก้บั๊กได้อย่างตรงจุด เพื่อสร้างระบบซอฟต์แวร์ที่เสถียรและใช้งานได้จริง",
    "hero_view_port_btn": "ดูผลงาน & การแข่งขัน",
    "hero_chat_btn": "พูดคุยกับผม",
    "hero_contact_btn": "ติดต่อฉัน",
    "hero_drag_hint": "ดึง ยืด หรือเหวี่ยงป้ายได้อิสระ",
    "hero_bottom_hint": "พลิกด้าน ↻",
    
    // About Me
    "about_title": "About Me",
    "about_sub": "เรื่องราว แรงบันดาลใจ และเป้าหมายการเดินทางในโลกคอมพิวเตอร์และเทคโนโลยีสารสนเทศ",
    "about_greeting": "สวัสดีครับ, ผม",
    "about_name": "ภัทรดนัย ป้องเศร้า",
    "about_nickname": "ชื่อเล่น นิว (New JA)",
    "about_role": "นักพัฒนาที่พร้อมลุยงานจริง มีทักษะและความสามารถในการวิเคราะห์แก้ปัญหา ดูแลและจัดการระบบเว็บไซต์ ค้นหาและแก้บั๊กเชิงลึก (Bug Fixing) พร้อมพัฒนาระบบซอฟต์แวร์ให้เสถียรและตอบโจทย์ผู้ใช้งานจริงอย่างเต็มประสิทธิภาพ",
    "about_story_1": "ผมมีความสนใจในด้านคอมพิวเตอร์มาตั้งแต่ ม.1 ตอนนั้นเป็นเพียงเด็กที่ติดเกมมากๆ จนเกิดคำถามว่า \"เกมพวกนี้มันทำงานและสร้างขึ้นมาได้อย่างไร?\" จึงเริ่มศึกษาและเขียนโค้ดสร้างเกมตั้งแต่เด็ก",
    "about_story_2": "ช่วงมัธยมปลาย ผมได้ก้าวขึ้นเป็น หัวหน้าทีมพัฒนาเว็บไซต์ ให้กับโปรเจกต์ AQUA-AI นำเสนอ Pitching จนคณะกรรมการระดับประเทศไม่มีคอมเมนต์ติ และคว้ารางวัลชนะเลิศอันดับ 1 ระดับประเทศมาได้",
    "about_story_3": "นอกจากนี้ยังพัฒนา Chatbot ด้วย Thai LLM ภายในเวลาเพียง 1 วัน คว้ารองชนะเลิศอันดับ 2 ในการแข่งขันของคณะเทคโนโลยีสารสนเทศ สจล. อีกด้วย",
    "about_mask_hint": "เลื่อนเมาส์ไปที่ใบหน้าเพื่อเปิดลูกเล่น Mask Reveal",
    
    // Education Journey
    "edu_tag": "เส้นทางการศึกษา (Education Journey)",
    "edu_title": "ประถมศึกษา & มัธยมศึกษา",
    "edu_sub": "เลื่อนเมาส์หรือแตะที่การ์ดเพื่อกระจายฟิสิกส์ (Bounce & Hover) • คลิกที่การ์ดเพื่อเปิดเว็บไซต์โรงเรียน",
    
    // Services
    "services_title": "Web Services & Expertise",
    "services_sub": "ทักษะและความเชี่ยวชาญด้านการพัฒนา ออกแบบ และดูแลรักษาระบบเว็บแบบครบวงจร",
    
    // Portfolio
    "portfolio_title": "ผลงาน & กิจกรรม (Portfolio)",
    "portfolio_sub": "รวมผลงานการพัฒนาเว็บไซต์ บอท และการแข่งขันระดับประเทศที่ผ่านมา",
    "port_tab_projects": "ผลงาน (Projects)",
    "port_tab_achievements": "การแข่งขัน (Achievements)",
    "port_tab_certs": "ใบรับรอง (Certificates)",
    "port_tab_skills": "ทักษะ (Tech Stack)",
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
    "guestbook_msg_ph": "แสดงความคิดเห็นหรือพูดคุย... (มีระบบกรองคำไม่เหมาะสมอัตโนมัติ)",
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
    "hero_tag": "Grade 12 (Sci - Math) • Problem Solver & Web Specialist",
    "hero_title_prefix": "Pataradanai Pongsao",
    "hero_title_nickname": "New JA (New)",
    "hero_desc": "From an avid gamer who wondered how games were made behind the scenes, to leading a web development team that won 1st Place National Champion. Dedicated to deep problem analysis, web maintenance, bug fixing, and building rock-solid, production-ready software systems.",
    "hero_view_port_btn": "View Works & Competitions",
    "hero_chat_btn": "Chat With Me",
    "hero_contact_btn": "Contact Me",
    "hero_drag_hint": "Stretch, swing, or flick the ID badge freely",
    "hero_bottom_hint": "Flip Badge ↻",
    
    // About Me
    "about_title": "About Me",
    "about_sub": "My journey, inspiration, and technical passion in Computer Science & Information Technology",
    "about_greeting": "Hello, I am",
    "about_name": "Pataradanai Pongsao",
    "about_nickname": "Nickname: New (New JA)",
    "about_role": "Production-ready developer with proven skills in web maintenance, deep bug fixing, and architecting high-performance web systems tailored for real-world reliability.",
    "about_story_1": "My passion for computers began in Grade 7. As an avid gamer, I asked myself: \"How do these games actually work?\", which inspired me to learn programming and game development from an early age.",
    "about_story_2": "In high school, I stepped up as Lead Web Developer for the AQUA-AI project, delivering a pitching presentation with zero negative remarks from national judges and winning 1st Place National Champion.",
    "about_story_3": "I also engineered a Thai LLM-powered AI Chatbot within just 24 hours, winning 2nd Runner-Up at the KMITL School of Information Technology competition.",
    "about_mask_hint": "Hover cursor over the portrait to reveal interactive Hero Mask",
    
    // Education Journey
    "edu_tag": "Education Journey",
    "edu_title": "Primary & Secondary Education",
    "edu_sub": "Hover or touch cards for physics scatter (Bounce & Hover) • Click card to visit school website",
    
    // Services
    "services_title": "Web Services & Expertise",
    "services_sub": "Full-cycle web development, architecture, performance tuning, and technical maintenance",
    
    // Portfolio
    "portfolio_title": "Projects & Competitions (Portfolio)",
    "portfolio_sub": "Curated collection of web applications, bots, and national competitions",
    "port_tab_projects": "Projects",
    "port_tab_achievements": "Achievements",
    "port_tab_certs": "Certificates",
    "port_tab_skills": "Tech Stack",
    "port_tab_all": "All",
    "port_tab_web": "Web Apps",
    "port_tab_bot": "Discord & Tools",
    "port_tab_hackathon": "Competitions & Awards",
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
    "guestbook_title": "Comments",
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

    // Only run 3D Flip on Hero Greeting to keep performance blazing fast at 60fps
    if (triggerAnimation && el.id === 'hero-greeting') {
      shuffleText(el, newText, {
        effect: 'flip',
        shuffleDirection: 'down',
        duration: 0.55,
        shuffleTimes: 4,
        animationMode: 'sequence',
        stagger: 0.035,
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
    thBtn.className = 'px-2.5 py-1 rounded-full text-xs font-bold bg-blue-600 text-white shadow-sm transition';
    enBtn.className = 'px-2.5 py-1 rounded-full text-xs font-medium text-slate-400 hover:text-white transition';
  } else {
    thBtn.className = 'px-2.5 py-1 rounded-full text-xs font-medium text-slate-400 hover:text-white transition';
    enBtn.className = 'px-2.5 py-1 rounded-full text-xs font-bold bg-blue-600 text-white shadow-sm transition';
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

// Bind to window for global access
if (typeof window !== 'undefined') {
  window.setSiteLanguage = setSiteLanguage;
  window.switchLanguage = setSiteLanguage;
}

export default {
  TRANSLATIONS,
  detectInitialLanguage,
  getActiveLanguage,
  translate,
  setSiteLanguage,
  initLanguageSystem
};
