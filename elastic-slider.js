/* ==============================================================================
   🚀 ElasticSlider — React Bits Component Port
   Spring Elastic Slider with Bounce, Rubber Stretch & Bubble Value Tooltip
   ============================================================================== */

const TAU = Math.PI * 2;
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const rubber = (distance, limit) => (limit > 0 ? 2 * (1 / (1 + Math.exp(-distance / limit)) - 0.5) * limit : 0);

export function createElasticSlider(container, options = {}) {
  if (!container) return null;

  const {
    defaultValue = 75,
    min = 0,
    max = 100,
    step = 1,
    leftIcon = `<svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>`,
    rightIcon = `<svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M12 19V5l-4.707 4.707H4v4h3.293L12 19z"></path></svg>`,
    onChange = () => {},
    thickness = 6,
    activeThickness = 12,
    maxStretch = 40,
    bounce = 0.5
  } = options;

  let current = defaultValue;
  const span = max - min || 1;

  container.innerHTML = `
    <div class="elastic-slider">
      <div class="elastic-slider__body">
        <span class="elastic-slider__icon start-icon">${leftIcon}</span>
        <div class="elastic-slider__hit" tabindex="0" role="slider" aria-valuenow="${current}">
          <div class="elastic-slider__track">
            <div class="elastic-slider__range"></div>
          </div>
          <span class="elastic-slider__thumb"></span>
          <div class="elastic-slider__bubble">
            <span class="elastic-slider__bubble-text">${current}%</span>
          </div>
        </div>
        <span class="elastic-slider__icon end-icon">${rightIcon}</span>
      </div>
    </div>
  `;

  const hit = container.querySelector('.elastic-slider__hit');
  const track = container.querySelector('.elastic-slider__track');
  const range = container.querySelector('.elastic-slider__range');
  const thumb = container.querySelector('.elastic-slider__thumb');
  const bubble = container.querySelector('.elastic-slider__bubble');
  const bubbleText = container.querySelector('.elastic-slider__bubble-text');
  const startIconEl = container.querySelector('.start-icon');
  const endIconEl = container.querySelector('.end-icon');

  const motion = {
    p: (current - min) / span,
    target: (current - min) / span,
    vp: 0,
    s: 0,
    vs: 0,
    side: 1,
    held: false,
    a: 0,
    va: 0,
    goal: 0,
    length: 180,
    dragging: false,
    hovered: false,
    focused: false,
    raf: 0,
    last: 0
  };

  function paint() {
    const thick = thickness + (activeThickness - thickness) * motion.a;
    track.style.height = `${thick.toFixed(2)}px`;
    const length = Math.max(1, motion.length);
    const along = 1 + motion.s / length;
    const across = 1 - 0.22 * clamp(motion.s / Math.max(1, maxStretch), -1, 1);
    const atEnd = motion.side > 0;
    track.style.transformOrigin = atEnd ? '0% 50%' : '100% 50%';
    track.style.transform = `scale(${along.toFixed(4)}, ${across.toFixed(4)})`;

    const p = clamp(motion.p, 0, 1);
    const to = ((1 - p) * 100).toFixed(3);
    range.style.clipPath = `inset(0 ${to}% 0 0 round ${thick / 2}px)`;

    const pos = p * length * along;
    const shift = `translate3d(${pos.toFixed(2)}px, 0, 0)`;
    if (thumb) thumb.style.transform = `${shift} scale(${(1 + 0.12 * motion.a).toFixed(3)})`;
    if (bubble) {
      bubble.style.transform = `${shift} translate(-50%, 0) scale(${(0.7 + 0.3 * motion.a).toFixed(3)})`;
      bubble.style.opacity = clamp(motion.a * 1.4 - 0.2, 0, 1).toFixed(3);
      bubbleText.textContent = `${Math.round(current)}%`;
    }
  }

  function frame(now) {
    motion.raf = 0;
    const elapsed = clamp((now - motion.last) / 1000, 0, 1 / 20);
    motion.last = now;

    const steps = Math.max(1, Math.ceil(elapsed / (1 / 240)));
    const dt = elapsed / steps;
    const fillOmega = TAU / (motion.dragging ? 0.09 : 0.3);
    const fillZeta = motion.dragging ? 1 : 0.86;
    const stretchOmega = TAU / 0.42;
    const stretchZeta = 1 - 0.9 * bounce;
    const activeOmega = TAU / 0.32;

    for (let i = 0; i < steps; i++) {
      motion.vp += (-fillOmega * fillOmega * (motion.p - motion.target) - 2 * fillZeta * fillOmega * motion.vp) * dt;
      motion.p += motion.vp * dt;
      if (!motion.held) {
        motion.vs += (-stretchOmega * stretchOmega * motion.s - 2 * stretchZeta * stretchOmega * motion.vs) * dt;
        motion.s += motion.vs * dt;
      }
      motion.va += (-activeOmega * activeOmega * (motion.a - motion.goal) - 2 * 0.9 * activeOmega * motion.va) * dt;
      motion.a += motion.va * dt;
    }

    const settled =
      Math.abs(motion.p - motion.target) < 0.0004 &&
      Math.abs(motion.vp) < 0.002 &&
      (motion.held || (Math.abs(motion.s) < 0.05 && Math.abs(motion.vs) < 0.5)) &&
      Math.abs(motion.a - motion.goal) < 0.002;

    if (settled) {
      motion.p = motion.target;
      motion.vp = 0;
      motion.a = motion.goal;
      if (!motion.held) motion.s = 0;
    }

    paint();
    if (!settled || motion.dragging) motion.raf = requestAnimationFrame(frame);
  }

  function kick() {
    if (motion.raf) return;
    motion.last = performance.now();
    motion.raf = requestAnimationFrame(frame);
  }

  function setGoal() {
    motion.goal = motion.hovered || motion.dragging || motion.focused ? 1 : 0;
    kick();
  }

  function along(e) {
    const rect = hit.getBoundingClientRect();
    return e.clientX - rect.left;
  }

  function onPointerDown(e) {
    e.preventDefault();
    hit.setPointerCapture(e.pointerId);
    motion.dragging = true;
    motion.length = hit.clientWidth;
    setGoal();

    const pos = clamp(along(e) / motion.length, 0, 1);
    current = Math.round(min + pos * span);
    motion.target = pos;
    onChange(current);
    kick();
  }

  function onPointerMove(e) {
    if (!motion.dragging) return;
    const length = Math.max(1, motion.length);
    const fraction = along(e) / length;
    const over = fraction < 0 ? -fraction * length : fraction > 1 ? (fraction - 1) * length : 0;

    if (over > 0 && maxStretch > 0) {
      motion.held = true;
      motion.side = fraction < 0 ? -1 : 1;
      motion.s = rubber(over, maxStretch);
    } else {
      motion.held = false;
    }

    const clampedFraction = clamp(fraction, 0, 1);
    current = Math.round(min + clampedFraction * span);
    motion.target = clampedFraction;
    onChange(current);
    kick();
  }

  function onPointerUp(e) {
    if (!motion.dragging) return;
    motion.dragging = false;
    motion.held = false;
    setGoal();
    kick();
  }

  hit.addEventListener('pointerdown', onPointerDown);
  hit.addEventListener('pointermove', onPointerMove);
  hit.addEventListener('pointerup', onPointerUp);
  hit.addEventListener('pointercancel', onPointerUp);

  hit.addEventListener('pointerenter', () => {
    motion.hovered = true;
    setGoal();
  });
  hit.addEventListener('pointerleave', () => {
    motion.hovered = false;
    setGoal();
  });

  // Measure initial length
  requestAnimationFrame(() => {
    motion.length = hit.clientWidth || 180;
    paint();
  });

  return {
    getValue: () => current,
    setValue: (val) => {
      current = clamp(val, min, max);
      motion.target = (current - min) / span;
      kick();
    }
  };
}
