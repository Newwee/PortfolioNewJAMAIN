/* ==============================================================================
   🚀 PulseHeart — React Bits Component Port (Vanilla JS + Physics)
   Flip Swell Animation, Spring Easing, Rolling Count Slot, Persistent Like
   ============================================================================== */

const OUT = 0.4;
const back = (k, c) => {
  const u = k - 1;
  return 1 + (c + 1) * u ** 3 + c * u ** 2;
};
const swellOf = (t, c) => (t <= 0 ? 0 : t < OUT ? 1 - (1 - t / OUT) ** 3 : 1 - back((t - OUT) / (1 - OUT), c));
const format = n => new Intl.NumberFormat().format(n);
const reducedMotion = () =>
  typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

const HEART_SVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" vector-effect="non-scaling-stroke" />
</svg>`;

export function createPulseHeart(container, options = {}) {
  if (!container) return null;

  const {
    id = 'item',
    initialCount = 120,
    showCount = true,
    size = 32,
    corner = 24,
    likedColor = '#ff4d6d',
    idleColor = '#94a3b8',
    pillColor = 'rgba(15, 23, 42, 0.85)',
    textColor = '#f8fafc',
    duration = 560,
    dotSize = 0.3,
    overshoot = 1.7,
    beat = 3,
    rollDuration = 350,
    label = 'ถูกใจ',
    storageKey = `newja_like_${options.id || 'default'}`,
    onLike = null,
    onAlreadyLiked = null
  } = options;

  const isStoredLiked = typeof localStorage !== 'undefined' && localStorage.getItem(storageKey) === 'true';
  let liked = isStoredLiked;
  let total = initialCount + (isStoredLiked ? 1 : 0);
  let shown = { liked, count: total };
  let roll = null;
  let rafId = 0;
  let rollTimer = 0;
  let viaPointer = false;

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'pulse-heart';
  btn.setAttribute('aria-pressed', String(liked));
  btn.dataset.liked = String(liked);
  if (!showCount) btn.dataset.noCount = '';

  btn.style.setProperty('--ph-size', `${size}px`);
  btn.style.setProperty('--ph-corner', `${corner}px`);
  btn.style.setProperty('--ph-pill', pillColor);
  btn.style.setProperty('--ph-idle', idleColor);
  btn.style.setProperty('--ph-liked', likedColor);
  btn.style.setProperty('--ph-text', textColor);
  btn.style.setProperty('--ph-roll', `${rollDuration}ms`);
  btn.style.setProperty('--ph-stroke', `${(1.5 * size) / 24}px`);

  function renderDom() {
    const text = format(shown.count);
    const cells = roll
      ? roll.at === -1
        ? [{ top: roll.up ? roll.a : roll.b, bottom: roll.up ? roll.b : roll.a }]
        : [...roll.b].map((ch, i) =>
            i === roll.at ? { top: roll.up ? roll.a[i] : ch, bottom: roll.up ? ch : roll.a[i] } : { ch }
          )
      : [...text].map(ch => ({ ch }));

    const countHtml = showCount
      ? `<span class="pulse-heart__count" aria-hidden="true">
          ${cells
            .map(cell =>
              'ch' in cell
                ? `<span>${cell.ch}</span>`
                : `<span class="pulse-heart__slot">
                    <span class="pulse-heart__roll" style="transform: translateY(${roll.up ? '-1em' : '0'});">
                      <span>${cell.top}</span>
                      <span>${cell.bottom}</span>
                    </span>
                  </span>`
            )
            .join('')}
        </span>`
      : '';

    btn.innerHTML = `
      <span class="pulse-heart__pill">
        <span class="pulse-heart__heart" aria-hidden="true">${HEART_SVG}</span>
        ${countHtml}
        <span class="pulse-heart__sr">${showCount ? `${label}, ${format(total)}` : label}</span>
      </span>
    `;
  }

  renderDom();
  container.innerHTML = '';
  container.appendChild(btn);

  const startRoll = (from, to) => {
    if (from === to) return;
    const a = format(from);
    const b = format(to);
    const changed = a.length === b.length ? [...b].flatMap((ch, i) => (ch !== a[i] ? [i] : [])) : [];
    roll = { a, b, at: changed.length === 1 ? changed[0] : -1, up: to > from };
    clearTimeout(rollTimer);
    renderDom();
    rollTimer = setTimeout(() => {
      roll = null;
      renderDom();
    }, rollDuration);
  };

  const runAnimation = (nextLiked, nextCount) => {
    const heart = btn.querySelector('.pulse-heart__heart');
    const pill = btn.querySelector('.pulse-heart__pill');
    if (!heart || !pill) return;

    btn.dataset.running = '';
    let swapped = false;
    let prev = 0;
    const t0 = performance.now();

    const tick = now => {
      const dt = (now - t0) / duration;
      const t = Math.min(1, dt);
      const step = prev ? now - prev : 1000 / 60;
      prev = now;

      const s = swellOf(t, overshoot);
      const k = 1 - (1 - dotSize) * s;
      heart.style.transform = `scale(${k})`;
      pill.style.transform = `scale(${1 - (beat / 100) * s})`;

      if (!swapped && t + step / 2 / duration >= OUT) {
        swapped = true;
        btn.dataset.liked = String(nextLiked);
        startRoll(shown.count, nextCount);
        shown = { liked: nextLiked, count: nextCount };
      }

      if (t < 1) {
        rafId = requestAnimationFrame(tick);
        return;
      }

      rafId = 0;
      heart.style.transform = '';
      pill.style.transform = '';
      delete btn.dataset.running;
    };

    rafId = requestAnimationFrame(tick);
  };

  btn.addEventListener('pointerdown', e => {
    if (e.button !== 0) return;
    viaPointer = true;
    if (!reducedMotion()) btn.dataset.pressed = '';
  });

  const clearPressed = () => delete btn.dataset.pressed;
  btn.addEventListener('pointerup', clearPressed);
  btn.addEventListener('pointerleave', clearPressed);
  btn.addEventListener('pointercancel', clearPressed);

  btn.addEventListener('click', e => {
    if (rafId) return;

    // Strict rule: Once visitor liked, cannot like again repeatedly
    if (liked) {
      if (typeof onAlreadyLiked === 'function') {
        onAlreadyLiked(total);
      }
      return;
    }

    const pointer = viaPointer && e.detail !== 0;
    viaPointer = false;

    liked = true;
    const nextCount = total + 1;
    total = nextCount;

    try {
      localStorage.setItem(storageKey, 'true');
    } catch (e) {}

    btn.setAttribute('aria-pressed', 'true');

    if (pointer && !reducedMotion()) {
      runAnimation(true, nextCount);
    } else {
      btn.dataset.liked = 'true';
      shown = { liked: true, count: nextCount };
      renderDom();
    }

    if (typeof onLike === 'function') {
      onLike(nextCount);
    }
  });

  return {
    isLiked: () => liked,
    getCount: () => total,
    destroy: () => {
      cancelAnimationFrame(rafId);
      clearTimeout(rollTimer);
      container.innerHTML = '';
    }
  };
}
