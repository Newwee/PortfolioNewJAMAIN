/* ==============================================================================
   🚀 BounceCards — React Bits Component Port (Vanilla JS + Spring Physics)
   Physics Overshoot, Dynamic Fan Spread, Cursor Hover Expansion & Click Impulse
   ============================================================================== */

const PATTERN = [1, 0.5, -0.3, -1, 0.2, 0.75, -0.6, 0.35, -0.85, 0.1];
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const toCard = item => (typeof item === 'string' ? { src: item, alt: '', url: '' } : { src: item?.src, alt: item?.alt ?? '', url: item?.url ?? '' });

export function createBounceCards(container, options = {}) {
  if (!container) return null;

  const {
    images = [],
    className = '',
    containerWidth = 520,
    containerHeight = 360,
    cardSize = 220,
    spread = 110,
    rotation = 8,
    arc = 0,
    animationDelay = 0.3,
    animationStagger = 0.08,
    bounciness = 0.6,
    enableHover = true,
    pushDistance = 140,
    hoverScale = 1.08,
    borderWidth = 3,
    borderColor = 'rgba(56, 189, 248, 0.5)',
    radius = 20,
    shadow = true,
    onCardClick = null
  } = options;

  const cards = images.map(toCard);
  const count = cards.length;
  const middle = (count - 1) / 2;
  const reach = Math.max(1, middle);

  const slots = cards.map((_, i) => {
    const offset = i - middle;
    return {
      x: offset * spread,
      y: arc * (offset / reach) ** 2,
      rotate: rotation * (PATTERN[i % PATTERN.length] || 1)
    };
  });

  const settings = {
    slots,
    cardSize: Math.max(10, cardSize),
    delay: Math.max(0, animationDelay),
    stagger: Math.max(0, animationStagger),
    bounciness: clamp(bounciness, 0, 1),
    enableHover,
    pushDistance,
    hoverScale: clamp(hoverScale, 0.5, 2),
    clickable: typeof onCardClick === 'function' || cards.some(c => c.url)
  };

  const root = document.createElement('div');
  root.className = `bounce-cards ${className}`.trim();
  root.style.width = typeof containerWidth === 'number' ? `${containerWidth}px` : containerWidth;
  root.style.height = typeof containerHeight === 'number' ? `${containerHeight}px` : containerHeight;
  root.style.setProperty('--bounce-cards-size', `${settings.cardSize}px`);
  root.style.setProperty('--bounce-cards-border', `${Math.max(0, borderWidth)}px`);
  root.style.setProperty('--bounce-cards-border-color', borderColor);
  root.style.setProperty('--bounce-cards-radius', `${Math.max(0, radius)}px`);
  root.style.setProperty(
    '--bounce-cards-shadow',
    shadow ? '0 10px 30px -5px rgba(0, 0, 0, 0.7), 0 0 25px rgba(6, 182, 212, 0.25)' : 'none'
  );
  root.style.setProperty(
    '--bounce-cards-shadow-active',
    shadow ? '0 20px 45px -8px rgba(0, 0, 0, 0.85), 0 0 35px rgba(56, 189, 248, 0.45)' : 'none'
  );

  const cardEls = [];
  cards.forEach((card, i) => {
    const el = document.createElement('div');
    el.className = `bounce-cards__card${settings.clickable ? ' bounce-cards__card--clickable' : ''}`;
    el.style.zIndex = String(i + 1);
    if (settings.clickable) {
      el.setAttribute('role', 'button');
      el.setAttribute('tabindex', '0');
      el.setAttribute('aria-label', card.alt || `Card ${i + 1}`);
    }
    el.innerHTML = `<img src="${card.src}" alt="${card.alt}" draggable="false" />`;
    root.appendChild(el);
    cardEls.push(el);
  });

  container.innerHTML = '';
  container.appendChild(root);

  // Animation Physics Engine
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  const bodies = [];
  const state = { hovered: -1, time: 0, layer: -1 };
  let raf = 0;
  let last = performance.now();
  let alive = true;

  const body = i => {
    if (!bodies[i]) {
      const slot = settings.slots[i] ?? { x: 0, y: 0, rotate: 0 };
      bodies[i] = {
        x: slot.x,
        y: slot.y,
        rotate: slot.rotate,
        scale: reduce ? 1 : 0,
        vx: 0,
        vy: 0,
        vr: 0,
        vs: 0,
        born: state.time
      };
    }
    return bodies[i];
  };

  const step = (value, velocity, target, stiffness, damping, dt) => {
    const next = velocity + ((target - value) * stiffness - velocity * damping) * dt;
    return [value + next * dt, next];
  };

  const frame = now => {
    raf = 0;
    if (!alive) return;
    const dt = Math.min(1 / 30, Math.max(1 / 240, (now - last) / 1000));
    last = now;
    state.time += dt;

    const hovered = settings.enableHover ? state.hovered : -1;
    const popStiffness = 170;
    const popDamping = 2 * (1 - 0.85 * settings.bounciness) * Math.sqrt(popStiffness);
    const moveStiffness = 210;
    const moveDamping = 2 * (reduce ? 1 : 0.72) * Math.sqrt(moveStiffness);
    const substeps = Math.ceil(dt / (1 / 240));
    const h = dt / substeps;
    let moving = 0;

    for (let i = 0; i < settings.slots.length; i++) {
      const el = cardEls[i];
      if (!el) continue;
      const card = body(i);
      const slot = settings.slots[i];
      const appeared = reduce || state.time - card.born >= settings.delay + i * settings.stagger;
      let targetX = slot.x;
      let targetY = slot.y;
      let targetRotate = slot.rotate;
      let targetScale = appeared ? 1 : 0;
      if (hovered >= 0 && appeared) {
        if (i === hovered) {
          targetY = slot.y - settings.cardSize * 0.05;
          targetRotate = 0;
          targetScale = settings.hoverScale;
        } else {
          targetX = slot.x + Math.sign(i - hovered) * settings.pushDistance;
        }
      }
      for (let k = 0; k < substeps; k++) {
        [card.x, card.vx] = step(card.x, card.vx, targetX, moveStiffness, moveDamping, h);
        [card.y, card.vy] = step(card.y, card.vy, targetY, moveStiffness, moveDamping, h);
        [card.rotate, card.vr] = step(card.rotate, card.vr, targetRotate, moveStiffness, moveDamping, h);
        if (reduce) {
          card.scale = targetScale;
          card.vs = 0;
        } else {
          [card.scale, card.vs] = step(card.scale, card.vs, targetScale, popStiffness, popDamping, h);
        }
      }
      moving +=
        Math.abs(card.vx) +
        Math.abs(card.vy) +
        Math.abs(card.vr) +
        Math.abs(card.vs) * 100 +
        Math.abs(targetX - card.x) +
        Math.abs(targetY - card.y) +
        Math.abs(targetRotate - card.rotate) +
        Math.abs(targetScale - card.scale) * 100 +
        (appeared ? 0 : 1);
      el.style.transform = `translate(-50%, -50%) translate3d(${card.x.toFixed(2)}px, ${card.y.toFixed(2)}px, 0) rotate(${card.rotate.toFixed(3)}deg) scale(${Math.max(0, card.scale).toFixed(4)})`;
    }

    if (state.layer !== hovered) {
      state.layer = hovered;
      cardEls.forEach((el, i) => {
        if (!el) return;
        el.style.zIndex = i === hovered ? String(settings.slots.length + 2) : String(i + 1);
        el.toggleAttribute('data-active', i === hovered);
      });
    }

    if (moving > 0.02) raf = requestAnimationFrame(frame);
  };

  const wake = () => {
    if (raf || !alive) return;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  };

  const pick = event => {
    const rect = root.getBoundingClientRect();
    const px = event.clientX - rect.left - rect.width / 2;
    const py = event.clientY - rect.top - rect.height / 2;
    let best = -1;
    let distance = Infinity;
    settings.slots.forEach((slot, i) => {
      const gap = Math.abs(px - slot.x);
      if (gap < distance) {
        distance = gap;
        best = i;
      }
    });
    if (best < 0) return -1;
    const slot = settings.slots[best];
    const half = settings.cardSize / 2;
    if (Math.abs(py - slot.y) > half + 24 || distance > half + 24) return -1;
    if (state.hovered >= 0 && state.hovered !== best) {
      const current = settings.slots[state.hovered];
      if (current && Math.abs(px - current.x) - distance < 10) return state.hovered;
    }
    return best;
  };

  const onMove = event => {
    const next = pick(event);
    if (next !== state.hovered) {
      state.hovered = next;
      wake();
    }
  };

  const onLeave = () => {
    if (state.hovered !== -1) {
      state.hovered = -1;
      wake();
    }
  };

  const onClick = event => {
    const index = pick(event);
    if (index < 0) return;
    const card = bodies[index];
    if (card && !reduce) card.vs -= 2.2;
    wake();

    if (typeof onCardClick === 'function') {
      onCardClick(index, cards[index]);
    } else if (cards[index]?.url) {
      window.open(cards[index].url, '_blank', 'noopener,noreferrer');
    }
  };

  root.addEventListener('pointermove', onMove);
  root.addEventListener('pointerdown', onMove);
  root.addEventListener('pointerleave', onLeave);
  root.addEventListener('click', onClick);

  wake();

  return {
    destroy() {
      alive = false;
      cancelAnimationFrame(raf);
      root.removeEventListener('pointermove', onMove);
      root.removeEventListener('pointerdown', onMove);
      root.removeEventListener('pointerleave', onLeave);
      root.removeEventListener('click', onClick);
    }
  };
}
