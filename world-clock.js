/* ==============================================================================
   ⏰ Time.is World Clock Component (Atomic Precision Engine)
   Default: Asia/Bangkok (GMT+7)
   Supports Real-time Ticking, City Switcher, and Dual Language (TH / EN)
   ============================================================================== */

export const WORLD_CITIES = [
  { id: 'Asia/Bangkok', nameTh: '🇹🇭 กรุงเทพฯ (ไทย)', nameEn: '🇹🇭 Bangkok (TH)', offset: 'GMT+7' },
  { id: 'Asia/Tokyo', nameTh: '🇯🇵 โตเกียว (ญี่ปุ่น)', nameEn: '🇯🇵 Tokyo (JP)', offset: 'GMT+9' },
  { id: 'Asia/Singapore', nameTh: '🇸🇬 สิงคโปร์', nameEn: '🇸🇬 Singapore (SG)', offset: 'GMT+8' },
  { id: 'Asia/Dubai', nameTh: '🇦🇪 ดูไบ (ยูเออี)', nameEn: '🇦🇪 Dubai (AE)', offset: 'GMT+4' },
  { id: 'Europe/London', nameTh: '🇬🇧 ลอนดอน (อังกฤษ)', nameEn: '🇬🇧 London (UK)', offset: 'GMT+0' },
  { id: 'Europe/Paris', nameTh: '🇫🇷 ปารีส (ฝรั่งเศส)', nameEn: '🇫🇷 Paris (FR)', offset: 'GMT+1' },
  { id: 'America/New_York', nameTh: '🇺🇸 นิวยอร์ก (สหรัฐฯ)', nameEn: '🇺🇸 New York (US)', offset: 'GMT-5' },
  { id: 'America/Los_Angeles', nameTh: '🇺🇸 ลอสแอนเจลิส (สหรัฐฯ)', nameEn: '🇺🇸 Los Angeles (US)', offset: 'GMT-8' },
  { id: 'Australia/Sydney', nameTh: '🇦🇺 ซิดนีย์ (ออสเตรเลีย)', nameEn: '🇦🇺 Sydney (AU)', offset: 'GMT+11' },
  { id: 'Europe/Berlin', nameTh: '🇩🇪 เบอร์ลิน (เยอรมนี)', nameEn: '🇩🇪 Berlin (DE)', offset: 'GMT+1' }
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

function formatClockDate(date, timeZone, lang) {
  try {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone,
      weekday: 'numeric',
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
      return `${THAI_DAYS[dayOfWeek]}ที่ ${day} ${THAI_MONTHS[month - 1]} ${thaiYear}`;
    } else {
      return `${ENG_DAYS[dayOfWeek]}, ${ENG_MONTHS[month - 1]} ${day}, ${year}`;
    }
  } catch (e) {
    return date.toDateString();
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

export function createWorldClock(container, options = {}) {
  if (!container) return null;

  const {
    variant = 'pill', // 'pill' | 'panel'
    showSelector = true,
    showDate = true,
    initialTz = currentTimezone
  } = options;

  let localTz = initialTz;

  const widget = document.createElement('div');
  widget.className = variant === 'panel' ? 'world-clock-modal-panel' : 'world-clock-widget';

  function render() {
    const now = new Date();
    const { hh, mm, ss, isDay } = getZonedTimeParts(now, localTz);
    const dateStr = formatClockDate(now, localTz, currentLanguage);
    const cityObj = WORLD_CITIES.find(c => c.id === localTz) || WORLD_CITIES[0];
    const cityName = currentLanguage === 'th' ? cityObj.nameTh : cityObj.nameEn;
    const dayIcon = isDay ? '☀️' : '🌙';
    const atomicText = currentLanguage === 'th' ? 'เวลาตรงเป๊ะ (Atomic)' : 'Exact Time (Atomic)';

    const selectHtml = showSelector
      ? `<select class="world-clock-city-select" aria-label="Select City">
          ${WORLD_CITIES.map(c => `
            <option value="${c.id}" ${c.id === localTz ? 'selected' : ''}>
              ${currentLanguage === 'th' ? c.nameTh : c.nameEn} (${c.offset})
            </option>
          `).join('')}
        </select>`
      : `<span class="text-xs font-bold text-slate-300">${cityName}</span>`;

    if (variant === 'panel') {
      widget.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="world-clock-time">
            <span>${hh}</span>
            <span class="world-clock-colon">:</span>
            <span>${mm}</span>
            <span class="world-clock-sec">:${ss}</span>
            <span class="text-xs ml-1.5 opacity-80">${dayIcon}</span>
          </div>
          <div class="flex flex-col">
            <span class="world-clock-date-str">${dateStr}</span>
            <span class="world-clock-badge">
              <span class="world-clock-dot"></span>
              <span>${atomicText} • ${cityObj.offset}</span>
            </span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          ${selectHtml}
        </div>
      `;
    } else {
      widget.innerHTML = `
        <span class="world-clock-dot" title="${atomicText}"></span>
        <div class="world-clock-time">
          <span>${hh}</span>
          <span class="world-clock-colon">:</span>
          <span>${mm}</span>
          <span class="world-clock-sec">:${ss}</span>
        </div>
        <span class="text-xs">${dayIcon}</span>
        ${selectHtml}
      `;
    }

    const selectEl = widget.querySelector('.world-clock-city-select');
    if (selectEl) {
      selectEl.addEventListener('change', e => {
        localTz = e.target.value;
        currentTimezone = localTz;
        render();
        // Sync other clocks
        activeInstances.forEach(inst => {
          if (inst.setTz) inst.setTz(localTz);
        });
      });
    }
  }

  render();
  container.innerHTML = '';
  container.appendChild(widget);

  const instance = {
    update: render,
    setTz: tz => {
      localTz = tz;
      render();
    },
    destroy: () => {
      activeInstances.delete(instance);
      container.innerHTML = '';
    }
  };

  activeInstances.add(instance);

  if (!timerId) {
    timerId = setInterval(() => {
      activeInstances.forEach(inst => inst.update());
    }, 1000);
  }

  return instance;
}

export function setGlobalClockLanguage(lang) {
  currentLanguage = lang === 'en' ? 'en' : 'th';
  activeInstances.forEach(inst => inst.update());
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
