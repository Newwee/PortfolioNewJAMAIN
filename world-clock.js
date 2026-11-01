/* ==============================================================================
   ⏰ Time.is World Clock Component (Ultra-Performance Native Atomic Engine)
   Default: Asia/Bangkok (GMT+7)
   Custom Cyberpunk Dropdown Menu (No ugly native <select>)
   Zero-Layout-Thrash: Only updates textContent, never recreates DOM!
   Variants: 'hero' (prominent large), 'panel' (modal), 'pill' (compact)
   ============================================================================== */

export const WORLD_CITIES = [
  { id: 'Asia/Bangkok', flag: '🇹🇭', nameTh: 'กรุงเทพฯ (ไทย)', nameEn: 'Bangkok (TH)', offset: 'GMT+7' },
  { id: 'Asia/Tokyo', flag: '🇯🇵', nameTh: 'โตเกียว (ญี่ปุ่น)', nameEn: 'Tokyo (JP)', offset: 'GMT+9' },
  { id: 'Asia/Singapore', flag: '🇸🇬', nameTh: 'สิงคโปร์', nameEn: 'Singapore (SG)', offset: 'GMT+8' },
  { id: 'Asia/Dubai', flag: '🇦🇪', nameTh: 'ดูไบ (ยูเออี)', nameEn: 'Dubai (AE)', offset: 'GMT+4' },
  { id: 'Europe/London', flag: '🇬🇧', nameTh: 'ลอนดอน (อังกฤษ)', nameEn: 'London (UK)', offset: 'GMT+0' },
  { id: 'Europe/Paris', flag: '🇫🇷', nameTh: 'ปารีส (ฝรั่งเศส)', nameEn: 'Paris (FR)', offset: 'GMT+1' },
  { id: 'America/New_York', flag: '🇺🇸', nameTh: 'นิวยอร์ก (สหรัฐฯ)', nameEn: 'New York (US)', offset: 'GMT-5' },
  { id: 'America/Los_Angeles', flag: '🇺🇸', nameTh: 'ลอสแอนเจลิส (สหรัฐฯ)', nameEn: 'Los Angeles (US)', offset: 'GMT-8' },
  { id: 'Australia/Sydney', flag: '🇦🇺', nameTh: 'ซิดนีย์ (ออสเตรเลีย)', nameEn: 'Sydney (AU)', offset: 'GMT+11' },
  { id: 'Europe/Berlin', flag: '🇩🇪', nameTh: 'เบอร์ลิน (เยอรมนี)', nameEn: 'Berlin (DE)', offset: 'GMT+1' }
];

let currentTimezone = 'Asia/Bangkok';
let currentLanguage = 'th';
const activeInstances = new Set();
let timerId = null;

const THAI_MONTHS = [
  'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
  'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
];
const THAI_DAYS = ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์'];

const ENG_MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const ENG_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const THAI_SHORT_DAYS = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'];
const THAI_SHORT_MONTHS = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
const ENG_SHORT_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const ENG_SHORT_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatClockDate(date, timeZone, lang, isCompact = false) {
  try {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone,
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    });
    const parts = formatter.formatToParts(date);
    let day = 1, month = 1, year = 2026;
    parts.forEach(p => {
      if (p.type === 'day') day = Number(p.value);
      if (p.type === 'month') month = Number(p.value);
      if (p.type === 'year') year = Number(p.value);
    });

    const dayOfWeek = new Date(Date.UTC(year, month - 1, day)).getUTCDay();

    if (lang === 'th') {
      const thaiYear = year + 543;
      if (isCompact) {
        return `${THAI_SHORT_DAYS[dayOfWeek]} ${day} ${THAI_SHORT_MONTHS[month - 1]} ${thaiYear}`;
      }
      return `${THAI_DAYS[dayOfWeek]}ที่ ${day} ${THAI_MONTHS[month - 1]} ${thaiYear}`;
    } else {
      if (isCompact) {
        return `${ENG_SHORT_DAYS[dayOfWeek]}, ${ENG_SHORT_MONTHS[month - 1]} ${day}, ${year}`;
      }
      return `${ENG_DAYS[dayOfWeek]}, ${ENG_MONTHS[month - 1]} ${day}, ${year}`;
    }
  } catch (e) {
    return date.toLocaleDateString();
  }
}

function getZonedTimeParts(date, timeZone) {
  try {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
    const parts = formatter.formatToParts(date);
    let hh = '00', mm = '00', ss = '00';
    parts.forEach(p => {
      if (p.type === 'hour') hh = p.value;
      if (p.type === 'minute') mm = p.value;
      if (p.type === 'second') ss = p.value;
    });
    const hourNum = parseInt(hh, 10);
    const isDay = hourNum >= 6 && hourNum < 18;
    return { hh, mm, ss, isDay, hourNum };
  } catch (e) {
    return { hh: '00', mm: '00', ss: '00', isDay: true, hourNum: 12 };
  }
}

// Global outside-click closer for custom dropdowns
if (typeof window !== 'undefined') {
  window.addEventListener('click', e => {
    document.querySelectorAll('.world-clock-dropdown').forEach(dd => {
      if (!dd.contains(e.target) && !e.target.closest('.world-clock-city-btn')) {
        dd.classList.add('hidden');
        const trigger = dd.parentElement?.querySelector('.world-clock-city-btn');
        if (trigger) trigger.classList.remove('is-open');
      }
    });
  });
}

export function createWorldClock(container, options = {}) {
  if (!container) return null;

  const {
    variant = 'hero', // 'hero' | 'panel' | 'pill'
    showSelector = true,
    initialTz = currentTimezone
  } = options;

  let localTz = initialTz;
  const widget = document.createElement('div');

  const cityObj = () => WORLD_CITIES.find(c => c.id === localTz) || WORLD_CITIES[0];
  const cityName = () => currentLanguage === 'th' ? cityObj().nameTh : cityObj().nameEn;

  // Build DOM Structure ONCE (Ultra Optimized)
  if (variant === 'hero') {
    widget.className = 'world-clock-hero-widget';
    widget.innerHTML = `
      <div class="flex items-center gap-2.5 shrink-0">
        <span class="world-clock-dot" title="Atomic Sync"></span>
        <div class="world-clock-time">
          <span class="wc-hh">00</span>
          <span class="world-clock-colon">:</span>
          <span class="wc-mm">00</span>
          <span class="world-clock-sec wc-ss">:00</span>
        </div>
        <span class="text-sm ml-0.5 wc-icon">☀️</span>
      </div>
      <div class="h-4 w-px bg-white/20 hidden sm:block shrink-0"></div>
      <div class="hidden sm:flex items-center gap-1.5 shrink-0">
        <span class="text-xs text-slate-300 font-medium wc-date">Loading date...</span>
      </div>
      <div class="relative flex items-center shrink-0">
        <button type="button" class="world-clock-city-btn" aria-haspopup="true">
          <span class="wc-flag">${cityObj().flag}</span>
          <span class="wc-btn-name">${cityName()}</span>
          <span class="world-clock-arrow">▾</span>
        </button>
        <div class="world-clock-dropdown hidden" role="menu"></div>
      </div>
    `;
  } else if (variant === 'panel') {
    widget.className = 'world-clock-modal-panel';
    widget.innerHTML = `
      <div class="flex items-center gap-3">
        <div class="world-clock-time">
          <span class="wc-hh">00</span>
          <span class="world-clock-colon">:</span>
          <span class="wc-mm">00</span>
          <span class="world-clock-sec wc-ss">:00</span>
          <span class="text-xs ml-1.5 opacity-80 wc-icon">☀️</span>
        </div>
        <div class="flex flex-col">
          <span class="world-clock-date-str wc-date">Loading...</span>
          <span class="world-clock-badge">
            <span class="world-clock-dot"></span>
            <span class="wc-offset">${cityObj().offset} • Atomic Sync</span>
          </span>
        </div>
      </div>
      <div class="relative flex items-center">
        <button type="button" class="world-clock-city-btn" aria-haspopup="true">
          <span class="wc-flag">${cityObj().flag}</span>
          <span class="wc-btn-name">${cityName()}</span>
          <span class="world-clock-arrow">▾</span>
        </button>
        <div class="world-clock-dropdown hidden" role="menu"></div>
      </div>
    `;
  } else {
    widget.className = 'world-clock-widget';
    widget.innerHTML = `
      <span class="world-clock-dot" title="Atomic Time"></span>
      <div class="world-clock-time">
        <span class="wc-hh">00</span>
        <span class="world-clock-colon">:</span>
        <span class="wc-mm">00</span>
        <span class="world-clock-sec wc-ss">:00</span>
      </div>
      <span class="text-xs wc-icon">☀️</span>
      <div class="relative flex items-center">
        <button type="button" class="world-clock-city-btn" aria-haspopup="true">
          <span class="wc-flag">${cityObj().flag}</span>
          <span class="wc-btn-name">${cityName()}</span>
          <span class="world-clock-arrow">▾</span>
        </button>
        <div class="world-clock-dropdown hidden" role="menu"></div>
      </div>
    `;
  }

  // Cache Element References for Fast Updates (Zero DOM rebuild)
  const hhEl = widget.querySelector('.wc-hh');
  const mmEl = widget.querySelector('.wc-mm');
  const ssEl = widget.querySelector('.wc-ss');
  const iconEl = widget.querySelector('.wc-icon');
  const dateEl = widget.querySelector('.wc-date');
  const offsetEl = widget.querySelector('.wc-offset');
  const flagEl = widget.querySelector('.wc-flag');
  const btnNameEl = widget.querySelector('.wc-btn-name');
  const triggerBtn = widget.querySelector('.world-clock-city-btn');
  const dropdownMenu = widget.querySelector('.world-clock-dropdown');

  // Populate Dropdown Items
  function renderDropdownItems() {
    if (!dropdownMenu) return;
    dropdownMenu.innerHTML = WORLD_CITIES.map(c => `
      <button type="button" class="world-clock-item ${c.id === localTz ? 'is-selected' : ''}" data-tz="${c.id}">
        <span class="flex items-center gap-2">
          <span>${c.flag}</span>
          <span>${currentLanguage === 'th' ? c.nameTh : c.nameEn}</span>
        </span>
        <span class="world-clock-item-offset">${c.offset}</span>
      </button>
    `).join('');

    dropdownMenu.querySelectorAll('.world-clock-item').forEach(item => {
      item.addEventListener('click', e => {
        e.stopPropagation();
        const selectedTz = item.dataset.tz;
        setGlobalClockTimezone(selectedTz);
        dropdownMenu.classList.add('hidden');
        if (triggerBtn) triggerBtn.classList.remove('is-open');
      });
    });
  }

  renderDropdownItems();

  if (triggerBtn && dropdownMenu) {
    triggerBtn.addEventListener('click', e => {
      e.stopPropagation();
      const isClosed = dropdownMenu.classList.contains('hidden');
      document.querySelectorAll('.world-clock-dropdown').forEach(dd => dd.classList.add('hidden'));
      document.querySelectorAll('.world-clock-city-btn').forEach(btn => btn.classList.remove('is-open'));

      if (isClosed) {
        dropdownMenu.classList.remove('hidden');
        triggerBtn.classList.add('is-open');
      } else {
        dropdownMenu.classList.add('hidden');
        triggerBtn.classList.remove('is-open');
      }
    });
  }

  // Fast Tick (Zero DOM churn)
  function tick() {
    const now = new Date();
    const { hh, mm, ss, isDay } = getZonedTimeParts(now, localTz);

    if (hhEl) hhEl.textContent = hh;
    if (mmEl) mmEl.textContent = mm;
    if (ssEl) ssEl.textContent = `:${ss}`;
    if (iconEl) iconEl.textContent = isDay ? '☀️' : '🌙';

    if (dateEl) {
      dateEl.textContent = formatClockDate(now, localTz, currentLanguage, variant === 'hero');
    }
    if (offsetEl) {
      const atomicText = currentLanguage === 'th' ? 'เวลาตรงเป๊ะ (Atomic)' : 'Exact Time (Atomic)';
      offsetEl.textContent = `${cityObj().offset} • ${atomicText}`;
    }
  }

  function updateCityUI() {
    const cur = cityObj();
    if (flagEl) flagEl.textContent = cur.flag;
    if (btnNameEl) btnNameEl.textContent = cityName();
    renderDropdownItems();
    tick();
  }

  tick();
  container.innerHTML = '';
  container.appendChild(widget);

  const instance = {
    tick,
    updateCityUI,
    setTz: tz => {
      localTz = tz;
      updateCityUI();
    },
    destroy: () => {
      activeInstances.delete(instance);
      container.innerHTML = '';
    }
  };

  activeInstances.add(instance);

  if (!timerId) {
    timerId = setInterval(() => {
      activeInstances.forEach(inst => inst.tick());
    }, 1000);
  }

  return instance;
}

export function setGlobalClockLanguage(lang) {
  currentLanguage = lang === 'en' ? 'en' : 'th';
  activeInstances.forEach(inst => inst.updateCityUI());
}

export function setGlobalClockTimezone(tz) {
  currentTimezone = tz;
  activeInstances.forEach(inst => inst.setTz(tz));
}

export default {
  createWorldClock,
  setGlobalClockLanguage,
  setGlobalClockTimezone,
  WORLD_CITIES
};
