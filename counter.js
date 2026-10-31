/* ==============================================================================
   🚀 Counter — React Bits Component Port (Vanilla JS + Physics)
   Rolling Digits with Damped Harmonic Oscillator, Motion Blur & Tabular Nums
   ============================================================================== */

const TAU = Math.PI * 2;
const NUMERIC = new Set(['integer', 'group', 'decimal', 'fraction']);
const MASK =
  'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.0355) calc(var(--counter-fade, 0em) * 0.1667), rgba(0, 0, 0, 0.2099) calc(var(--counter-fade, 0em) * 0.3333), rgba(0, 0, 0, 0.5) calc(var(--counter-fade, 0em) * 0.5), rgba(0, 0, 0, 0.7901) calc(var(--counter-fade, 0em) * 0.6667), rgba(0, 0, 0, 0.9645) calc(var(--counter-fade, 0em) * 0.8333), #000 var(--counter-fade, 0em), #000 calc(100% - var(--counter-fade, 0em)), rgba(0, 0, 0, 0.9645) calc(100% - var(--counter-fade, 0em) * 0.8333), rgba(0, 0, 0, 0.7901) calc(100% - var(--counter-fade, 0em) * 0.6667), rgba(0, 0, 0, 0.5) calc(100% - var(--counter-fade, 0em) * 0.5), rgba(0, 0, 0, 0.2099) calc(100% - var(--counter-fade, 0em) * 0.3333), rgba(0, 0, 0, 0.0355) calc(100% - var(--counter-fade, 0em) * 0.1667), rgba(0, 0, 0, 0) 100%)';

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const mod = (value, base) => ((value % base) + base) % base;
const wrap = offset => mod(offset + 5, 10) - 5;

const stepBetween = (from, to, direction) => {
  const up = mod(to - from, 10);
  if (direction === 'up') return up;
  if (direction === 'down') return up === 0 ? 0 : up - 10;
  return up > 5 ? up - 10 : up;
};

const createFormatter = (locale = 'en-US', options = {}) => {
  try {
    return new Intl.NumberFormat(locale, options);
  } catch {
    return new Intl.NumberFormat('en-US');
  }
};

const digitsFor = formatter => {
  const { locale, numberingSystem } = formatter.resolvedOptions();
  const plain = createFormatter(locale, { numberingSystem, useGrouping: false });
  return Array.from({ length: 10 }, (_, digit) => plain.format(digit));
};

const slotsFor = (formatter, digits, value) => {
  const parts = formatter.formatToParts(value);
  let first = -1;
  let last = -1;
  let place = 0;
  parts.forEach((part, index) => {
    if (!NUMERIC.has(part.type)) return;
    if (first < 0) first = index;
    last = index;
    if (part.type === 'integer') place += [...part.value].length;
  });
  let fraction = 0;
  const counts = {};
  const slots = [];
  parts.forEach((part, index) => {
    if (part.type === 'integer' || part.type === 'fraction') {
      [...part.value].forEach(char => {
        const digit = Math.max(0, digits.indexOf(char));
        if (part.type === 'integer') {
          place -= 1;
          slots.push({ key: `i${place}`, kind: 'digit', digit, text: '', rank: -2 * place });
        } else {
          slots.push({ key: `f${fraction}`, kind: 'digit', digit, text: '', rank: 1 + fraction });
          fraction += 1;
        }
      });
    } else if (part.type === 'group') {
      slots.push({ key: `g${place}`, kind: 'symbol', digit: 0, text: part.value, rank: 1 - 2 * place });
    } else if (part.type === 'decimal') {
      slots.push({ key: 'd', kind: 'symbol', digit: 0, text: part.value, rank: 0.5 });
    } else {
      const before = first < 0 || index < first;
      const name = `${before ? 'p' : 's'}-${part.type}`;
      counts[name] = (counts[name] || 0) + 1;
      slots.push({
        key: `${name}-${counts[name]}`,
        kind: 'symbol',
        digit: 0,
        text: part.value,
        rank: before ? -10000 - (first - index) : 10000 + (index - last)
      });
    }
  });
  return slots;
};

const makeItem = (slot, position, shown) => ({
  kind: slot.kind,
  rank: slot.rank,
  pos: position,
  vel: 0,
  target: position,
  shown,
  shownVel: 0,
  shownTarget: shown,
  wait: 0,
  exiting: false,
  natural: 0,
  el: null,
  numerals: null,
  strip: null,
  blur: null,
  filter: '',
  blurred: false
});

let counterSeed = 0;

export function createCounter(container, options = {}) {
  if (!container) return null;

  const {
    value = 0,
    locale = 'en-US',
    format = {},
    decimals,
    minDigits = 1,
    prefix = '',
    suffix = '',
    direction = 'auto',
    duration = 0.7,
    bounce = 0.2,
    stagger = 0.04,
    motionBlur = true,
    fade = 0.3,
    fontSize = 72,
    fontWeight = 700,
    textColor = '#38bdf8',
    gap = 2,
    padding = 0,
    tabular = true
  } = options;

  counterSeed += 1;
  const blurBaseId = `cnt-blur-${counterSeed}-${Date.now()}`;
  let currentVal = typeof value === 'number' ? value : Number(value) || 0;

  const formatOptions = { ...format };
  if (decimals !== undefined) {
    const fixed = clamp(Math.round(decimals), 0, 20);
    formatOptions.minimumFractionDigits = fixed;
    formatOptions.maximumFractionDigits = fixed;
  }
  if (minDigits > 1) formatOptions.minimumIntegerDigits = clamp(Math.round(minDigits), 1, 21);

  const formatter = createFormatter(locale, formatOptions);
  const digits = digitsFor(formatter);

  const settings = {
    direction: ['auto', 'up', 'down', 'shortest'].includes(direction) ? direction : 'auto',
    duration: Math.max(0.05, duration),
    bounce: clamp(bounce, 0, 0.9),
    stagger: Math.max(0, stagger),
    motionBlur,
    tabular
  };

  const engine = {
    items: new Map(),
    raf: 0,
    last: 0,
    ready: false,
    value: currentVal,
    widths: [],
    em: 16
  };

  // Build root elements
  const root = document.createElement('span');
  root.className = 'counter';
  root.style.fontSize = typeof fontSize === 'number' ? `${fontSize}px` : fontSize;
  root.style.fontWeight = String(fontWeight);
  root.style.color = textColor;
  if (tabular) root.style.fontVariantNumeric = 'tabular-nums';
  root.style.setProperty('--counter-fade', `${Math.max(0, fade)}em`);
  root.style.setProperty('--counter-gap', `${Math.max(0, gap)}px`);
  root.style.setProperty('--counter-padding', `${Math.max(0, padding)}px`);

  const srSpan = document.createElement('span');
  srSpan.className = 'counter__sr';
  srSpan.textContent = `${prefix}${formatter.format(currentVal)}${suffix}`;

  const rowSpan = document.createElement('span');
  rowSpan.className = 'counter__row';
  rowSpan.setAttribute('aria-hidden', 'true');

  const measureSpan = document.createElement('span');
  measureSpan.className = 'counter__measure';
  measureSpan.setAttribute('aria-hidden', 'true');
  digits.forEach(char => {
    const s = document.createElement('span');
    s.textContent = char;
    measureSpan.appendChild(s);
  });

  root.appendChild(srSpan);
  root.appendChild(rowSpan);
  root.appendChild(measureSpan);
  container.innerHTML = '';
  container.appendChild(root);

  const paint = item => {
    const el = item.el;
    if (!el) return;
    const shown = clamp(item.shown, 0, 1);
    const resting = item.pos === item.target && item.vel === 0;

    if (item.kind === 'digit') {
      if (item.numerals) {
        item.numerals.forEach((numeral, n) => {
          numeral.style.transform = `translateY(${(wrap(n - item.pos) * 100).toFixed(3)}%)`;
        });
      }
      if (shown >= 1 && (settings.tabular || resting)) {
        el.style.width = '';
      } else {
        const at = mod(item.pos, 10);
        const low = Math.floor(at);
        const from = engine.widths[low % 10] ?? 0;
        const to = engine.widths[(low + 1) % 10] ?? from;
        el.style.width = `${((from + (to - from) * (at - low)) * shown).toFixed(2)}px`;
      }
      if (item.blur && item.strip) {
        const radius = settings.motionBlur ? clamp((Math.abs(item.vel) - 3) * 0.006, 0, 0.09) * engine.em : 0;
        if (radius > 0.25) {
          item.blur.setAttribute('stdDeviation', `0 ${radius.toFixed(2)}`);
          if (!item.blurred) {
            item.strip.style.filter = `url(#${item.filter})`;
            item.blurred = true;
          }
        } else if (item.blurred) {
          item.strip.style.filter = '';
          item.blurred = false;
        }
      }
    } else {
      el.style.width = shown >= 1 ? '' : `${(item.natural * shown).toFixed(2)}px`;
    }
    el.style.setProperty('--counter-shown', shown >= 1 ? '' : shown.toFixed(3));
  };

  const frame = now => {
    engine.raf = 0;
    const elapsed = clamp((now - engine.last) / 1000, 0, 1 / 20);
    engine.last = now;
    const omega = TAU / settings.duration;
    const zeta = 1 - settings.bounce;
    const presence = TAU / (settings.duration * 0.85);
    const done = [];
    let busy = false;

    engine.items.forEach((item, key) => {
      let left = elapsed;
      if (item.wait > 0) {
        const used = Math.min(item.wait, left);
        item.wait -= used;
        left -= used;
      }
      if (left > 0) {
        const steps = Math.ceil(left * 240);
        const dt = left / steps;
        for (let i = 0; i < steps; i++) {
          item.vel += (-omega * omega * (item.pos - item.target) - 2 * zeta * omega * item.vel) * dt;
          item.pos += item.vel * dt;
          item.shownVel +=
            (-presence * presence * (item.shown - item.shownTarget) - 2 * presence * item.shownVel) * dt;
          item.shown += item.shownVel * dt;
        }
      }

      const settled =
        item.wait <= 0 &&
        Math.abs(item.pos - item.target) < 0.002 &&
        Math.abs(item.vel) < 0.02 &&
        Math.abs(item.shown - item.shownTarget) < 0.002 &&
        Math.abs(item.shownVel) < 0.02;

      if (settled) {
        item.target = mod(Math.round(item.target), 10);
        item.pos = item.target;
        item.vel = 0;
        item.shown = item.shownTarget;
        item.shownVel = 0;
        if (item.exiting) done.push(key);
      } else {
        busy = true;
      }
      paint(item);
    });

    if (done.length) {
      done.forEach(key => {
        const item = engine.items.get(key);
        if (item?.el?.parentNode) item.el.parentNode.removeChild(item.el);
        engine.items.delete(key);
      });
    }

    if (busy) engine.raf = requestAnimationFrame(frame);
  };

  const kick = () => {
    if (engine.raf) return;
    engine.last = performance.now();
    engine.raf = requestAnimationFrame(frame);
  };

  const measure = () => {
    engine.widths = [...measureSpan.children].map(child => child.getBoundingClientRect().width);
    engine.em = parseFloat(getComputedStyle(root).fontSize) || 16;
  };

  measure();
  document.fonts?.ready?.then(measure).catch(() => {});

  const renderSlots = (amount, isInitial = false) => {
    const slots = slotsFor(formatter, digits, amount);
    srSpan.textContent = `${prefix}${formatter.format(amount)}${suffix}`;

    if (isInitial) {
      rowSpan.innerHTML = '';
      if (prefix) {
        const afx = document.createElement('span');
        afx.className = 'counter__affix';
        afx.textContent = prefix;
        rowSpan.appendChild(afx);
      }

      slots.forEach(slot => {
        const item = makeItem(slot, slot.kind === 'digit' ? slot.digit : 0, 1);
        engine.items.set(slot.key, item);

        const slotEl = document.createElement('span');
        slotEl.dataset.slot = slot.key;

        if (slot.kind === 'digit') {
          slotEl.className = 'counter__digit';
          slotEl.innerHTML = `
            <span class="counter__sizer">${digits[slot.digit]}</span>
            <span class="counter__window" style="mask-image:${MASK}; -webkit-mask-image:${MASK};">
              <span class="counter__strip" data-strip="">
                ${digits.map((char, n) => `<span class="counter__numeral" data-numeral="" style="transform: translateY(${wrap(n - slot.digit) * 100}%)">${char}</span>`).join('')}
              </span>
            </span>
            ${settings.motionBlur ? `
              <svg class="counter__blur" aria-hidden="true">
                <filter id="${blurBaseId}-${slot.key}" x="-10%" y="-50%" width="120%" height="200%" color-interpolation-filters="sRGB">
                  <feGaussianBlur stdDeviation="0 0" />
                </filter>
              </svg>
            ` : ''}
          `;
          item.el = slotEl;
          item.numerals = [...slotEl.querySelectorAll('[data-numeral]')];
          item.strip = slotEl.querySelector('[data-strip]');
          item.blur = slotEl.querySelector('feGaussianBlur');
          item.filter = `${blurBaseId}-${slot.key}`;
        } else {
          slotEl.className = 'counter__symbol';
          slotEl.innerHTML = `<span class="counter__symbol-text">${slot.text}</span>`;
          item.el = slotEl;
          item.natural = slotEl.getBoundingClientRect().width || 12;
        }

        rowSpan.appendChild(slotEl);
      });

      if (suffix) {
        const sfx = document.createElement('span');
        sfx.className = 'counter__affix';
        sfx.textContent = suffix;
        rowSpan.appendChild(sfx);
      }

      engine.ready = true;
      engine.value = amount;
      return;
    }

    const previous = engine.value;
    engine.value = amount;
    const trend =
      settings.direction !== 'auto'
        ? settings.direction
        : Math.abs(amount) > Math.abs(previous)
          ? 'up'
          : Math.abs(amount) < Math.abs(previous)
            ? 'down'
            : 'shortest';

    const nextKeys = new Set(slots.map(s => s.key));
    const moving = [];

    slots.forEach(slot => {
      let item = engine.items.get(slot.key);
      if (!item) {
        item = makeItem(slot, 0, 0);
        engine.items.set(slot.key, item);

        const slotEl = document.createElement('span');
        slotEl.dataset.slot = slot.key;
        if (slot.kind === 'digit') {
          slotEl.className = 'counter__digit';
          slotEl.innerHTML = `
            <span class="counter__sizer">${digits[slot.digit]}</span>
            <span class="counter__window" style="mask-image:${MASK}; -webkit-mask-image:${MASK};">
              <span class="counter__strip" data-strip="">
                ${digits.map((char, n) => `<span class="counter__numeral" data-numeral="" style="transform: translateY(${wrap(n) * 100}%)">${char}</span>`).join('')}
              </span>
            </span>
            ${settings.motionBlur ? `
              <svg class="counter__blur" aria-hidden="true">
                <filter id="${blurBaseId}-${slot.key}" x="-10%" y="-50%" width="120%" height="200%" color-interpolation-filters="sRGB">
                  <feGaussianBlur stdDeviation="0 0" />
                </filter>
              </svg>
            ` : ''}
          `;
          item.el = slotEl;
          item.numerals = [...slotEl.querySelectorAll('[data-numeral]')];
          item.strip = slotEl.querySelector('[data-strip]');
          item.blur = slotEl.querySelector('feGaussianBlur');
          item.filter = `${blurBaseId}-${slot.key}`;
        } else {
          slotEl.className = 'counter__symbol';
          slotEl.innerHTML = `<span class="counter__symbol-text">${slot.text}</span>`;
          item.el = slotEl;
          item.natural = 12;
        }

        // Insert in correct order
        rowSpan.appendChild(slotEl);
      }

      item.exiting = false;
      item.shownTarget = 1;
      item.rank = slot.rank;

      if (slot.kind === 'digit') {
        const step = stepBetween(mod(Math.round(item.target), 10), slot.digit, trend);
        if (step !== 0 || item.shown < 1) {
          item.target += step;
          moving.push(item);
        }
      }
    });

    engine.items.forEach((item, key) => {
      if (nextKeys.has(key) || item.exiting) return;
      item.exiting = true;
      item.shownTarget = 0;
      if (item.kind === 'digit') {
        item.target += stepBetween(mod(Math.round(item.target), 10), 0, trend);
        moving.push(item);
      }
    });

    moving
      .sort((a, b) => b.rank - a.rank)
      .forEach((item, order) => {
        item.wait = order * settings.stagger;
      });

    // Ensure DOM order in rowSpan strictly matches the left-to-right reading order of slots
    slots.forEach(slot => {
      const it = engine.items.get(slot.key);
      if (it?.el && it.el.parentNode === rowSpan) {
        rowSpan.appendChild(it.el);
      }
    });
    const pfx = rowSpan.querySelector('.counter__affix:first-child');
    if (pfx) {
      rowSpan.insertBefore(pfx, rowSpan.firstChild);
    }
    const sfx = rowSpan.querySelector('.counter__affix:last-child');
    if (sfx) {
      rowSpan.appendChild(sfx);
    }

    kick();
  };

  renderSlots(currentVal, true);

  return {
    setValue(newVal) {
      const num = typeof newVal === 'number' ? newVal : Number(newVal) || 0;
      renderSlots(num, false);
    },
    getValue() {
      return engine.value;
    },
    destroy() {
      if (engine.raf) cancelAnimationFrame(engine.raf);
      container.innerHTML = '';
    }
  };
}
