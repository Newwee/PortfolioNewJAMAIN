/* ==============================================================================
   🚀 PixelCard — React Bits Component Port (Vanilla JS + HTML5 Canvas)
   Interactive Pixel Grid, Cursor Spotlight, Twinkling Physics & Click Ripple Pulse
   ============================================================================== */

const VARIANTS = {
  default: {
    gap: 5,
    speed: 35,
    colors: ['#f8fafc', '#f1f5f9', '#cbd5e1'],
    glow: '#cbd5e1'
  },
  blue: {
    gap: 10,
    speed: 25,
    colors: ['#e0f2fe', '#7dd3fc', '#0ea5e9'],
    glow: '#0ea5e9'
  },
  cyan: {
    gap: 9,
    speed: 30,
    colors: ['#cffafe', '#67e8f9', '#06b6d4'],
    glow: '#06b6d4'
  },
  purple: {
    gap: 9,
    speed: 30,
    colors: ['#f3e8ff', '#d8b4fe', '#a855f7'],
    glow: '#a855f7'
  },
  amber: {
    gap: 8,
    speed: 25,
    colors: ['#fef3c7', '#fcd34d', '#f59e0b'],
    glow: '#f59e0b'
  }
};

const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
const smoothstep = (edge0, edge1, value) => {
  const t = clamp((value - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
};
const easeOutBack = t => {
  const c = 1.9;
  const u = t - 1;
  return 1 + (c + 1) * u * u * u + c * u * u;
};

const toRgb = color => {
  const c = document.createElement('canvas');
  c.width = c.height = 1;
  const ctx = c.getContext('2d');
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 1, 1);
  const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
  return [r, g, b];
};

export function createPixelCard(container, options = {}) {
  if (!container) return null;

  const {
    variant = 'blue',
    colors = null,
    glowColor = null,
    gap = null,
    pixelSize = 2.5,
    speed = null,
    shape = 'square',
    origin = 'center',
    revealDuration = 700,
    spotlight = 0.6,
    glow = 0.5,
    opacity = 0.45,
    fade = 0.65,
    trigger = 'hover',
    clickPulse = true,
    intro = true,
    radius = 24
  } = options;

  const preset = VARIANTS[variant] || VARIANTS.blue;
  const palette = colors || preset.colors;
  const rgbGlow = toRgb(glowColor || preset.glow);
  const gridGap = Math.max(3, Number(gap ?? preset.gap) || preset.gap);
  const animSpeed = clamp(Number(speed ?? preset.speed) || 0, 0, 100);

  const canvas = document.createElement('canvas');
  canvas.className = 'pixel-card-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  container.style.setProperty('--pixel-card-radius', `${radius}px`);
  container.classList.add('pixel-card');
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

  const state = {
    alive: true,
    raf: 0,
    last: 0,
    time: 0,
    visible: true,
    width: 0,
    height: 0,
    ratio: 1,
    key: '',
    count: 0,
    x: new Float32Array(0),
    y: new Float32Array(0),
    tint: new Uint8Array(0),
    size: new Float32Array(0),
    phase: new Float32Array(0),
    rate: new Float32Array(0),
    jitter: new Float32Array(0),
    presence: new Float32Array(0),
    delay: new Float32Array(0),
    mask: new Float32Array(0),
    maskKey: '',
    active: false,
    changedAt: 0,
    originX: 0,
    originY: 0,
    maxDistance: 1,
    pointerX: 0,
    pointerY: 0,
    spotX: 0,
    spotY: 0,
    spotVX: 0,
    spotVY: 0,
    spotPower: 0,
    hovering: false,
    pulses: [],
    dt: 1 / 60,
    releaseAt: -1,
    introAt: -1
  };

  const build = () => {
    const rect = container.getBoundingClientRect();
    const width = Math.max(1, Math.round(rect.width));
    const height = Math.max(1, Math.round(rect.height));
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const key = `${width}|${height}|${ratio}|${gridGap}|${pixelSize}`;
    if (key === state.key) return;
    state.key = key;
    state.width = width;
    state.height = height;
    state.ratio = ratio;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);

    const columns = Math.floor((width - 1) / gridGap) + 1;
    const rows = Math.floor((height - 1) / gridGap) + 1;
    const offsetX = (width - (columns - 1) * gridGap) / 2;
    const offsetY = (height - (rows - 1) * gridGap) / 2;
    const count = columns * rows;
    state.count = count;
    state.x = new Float32Array(count);
    state.y = new Float32Array(count);
    state.tint = new Uint8Array(count);
    state.size = new Float32Array(count);
    state.phase = new Float32Array(count);
    state.rate = new Float32Array(count);
    state.jitter = new Float32Array(count);
    state.presence = new Float32Array(count);
    state.delay = new Float32Array(count);

    let i = 0;
    for (let c = 0; c < columns; c++) {
      for (let r = 0; r < rows; r++) {
        state.x[i] = offsetX + c * gridGap;
        state.y[i] = offsetY + r * gridGap;
        state.tint[i] = Math.floor(Math.random() * palette.length);
        state.size[i] = pixelSize * (0.35 + Math.random() * 0.65);
        state.phase[i] = Math.random() * Math.PI * 2;
        state.rate[i] = 0.6 + Math.random() * 0.8;
        state.jitter[i] = Math.random();
        i++;
      }
    }
    state.maxDistance = Math.hypot(width, height);
    schedule();
  };

  const schedule = () => {
    const span = revealDuration / 1000;
    let far = 1;
    for (let i = 0; i < state.count; i++) {
      far = Math.max(far, Math.hypot(state.x[i] - state.originX, state.y[i] - state.originY));
    }
    state.maxDistance = far;
    for (let i = 0; i < state.count; i++) {
      const distance = Math.hypot(state.x[i] - state.originX, state.y[i] - state.originY) / far;
      state.delay[i] = state.active
        ? distance * span * 0.82 + state.jitter[i] * span * 0.18
        : (1 - distance) * span * 0.45 + state.jitter[i] * span * 0.1;
    }
  };

  const setActiveState = (val, x, y) => {
    if (state.active === val) return;
    state.active = val;
    state.changedAt = state.time;
    if (val) {
      const usePointer = origin === 'pointer' && x !== undefined && y !== undefined;
      state.originX = usePointer ? x : state.width / 2;
      state.originY = usePointer ? y : state.height / 2;
    }
    schedule();
    container.toggleAttribute('data-active', val);
    wake();
  };

  const draw = () => {
    const { width, height, ratio } = state;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, width, height);

    const maskKey = `${state.count}|${width}|${height}|${fade}`;
    if (state.maskKey !== maskKey) {
      state.maskKey = maskKey;
      state.mask = new Float32Array(state.count);
      const near = Math.min(width, height) * 0.05;
      const far = Math.min(width, height) * 0.42;
      for (let i = 0; i < state.count; i++) {
        const edge = Math.min(state.x[i], width - state.x[i], state.y[i], height - state.y[i]);
        const t = clamp((edge - near) / (far - near), 0, 1);
        state.mask[i] = 1 - fade * t * t * t * (t * (t * 6 - 15) + 10);
      }
    }

    let presenceSum = 0;
    const elapsed = state.time - state.changedAt;
    const appearStep = state.dt / 0.26;
    const exitStep = state.dt / 0.22;
    for (let i = 0; i < state.count; i++) {
      const current = state.presence[i];
      const ready = elapsed >= state.delay[i] || reduce;
      const target = state.active ? (ready ? 1 : 0) : ready ? 0 : current;
      if (reduce) state.presence[i] = target;
      else if (target > current) state.presence[i] = Math.min(1, current + appearStep);
      else if (target < current) state.presence[i] = Math.max(0, current - exitStep);
      presenceSum += state.presence[i];
    }
    const presenceAvg = state.count ? presenceSum / state.count : 0;

    if (glow > 0 && presenceAvg > 0.001) {
      const [r, g, b] = rgbGlow;
      const cx = state.spotPower > 0.01 ? state.spotX : state.originX;
      const cy = state.spotPower > 0.01 ? state.spotY : state.originY;
      const reach = Math.max(width, height) * 0.85;
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, reach);
      const strength = glow * opacity * 0.35 * Math.min(1, presenceAvg * 1.4);
      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${strength})`);
      gradient.addColorStop(0.45, `rgba(${r}, ${g}, ${b}, ${strength * 0.35})`);
      gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }

    const spotRadius = Math.min(width, height) * 0.38 + 30;
    const spotStrength = spotlight * state.spotPower;
    const pulses = state.pulses;
    const twinkle = reduce ? 0 : smoothstep(0, 100, animSpeed) > 0 ? 1 : 0;
    const frequency = (animSpeed / 35) * 1.35;

    for (let color = 0; color < palette.length; color++) {
      ctx.fillStyle = palette[color];
      for (let i = 0; i < state.count; i++) {
        if (state.tint[i] !== color) continue;
        const presence = state.presence[i];
        if (presence <= 0.002) continue;
        const x = state.x[i];
        const y = state.y[i];
        let size = state.size[i];
        let alpha = 0.5 + presence * 0.38;
        if (twinkle) {
          const wave = Math.sin(state.phase[i] + state.time * frequency * state.rate[i]);
          size *= 0.62 + 0.38 * wave;
          alpha += 0.12 * wave + (state.jitter[i] > 0.92 ? 0.35 * Math.max(0, wave) : 0);
        }
        size *= easeOutBack(presence);
        const flash = presence < 1 && state.active ? Math.sin(presence * Math.PI) : 0;
        size *= 1 + flash * 0.9;
        alpha += flash * 0.6;
        if (spotStrength > 0.001) {
          const near = smoothstep(spotRadius, 0, Math.hypot(x - state.spotX, y - state.spotY));
          size *= 1 + spotStrength * near * near * 2.4;
          alpha += spotStrength * near * 0.45;
        }
        alpha = Math.min(1, alpha) * state.mask[i] * opacity;
        if (alpha <= 0.004) continue;
        for (let p = 0; p < pulses.length; p++) {
          const pulse = pulses[p];
          const band = (Math.hypot(x - pulse.x, y - pulse.y) - pulse.radius) / 26;
          const wave = Math.exp(-band * band) * pulse.power;
          size *= 1 + wave * 1.4;
          alpha = Math.min(1, alpha + wave * 0.5);
        }
        if (size <= 0.05) continue;
        ctx.globalAlpha = alpha;
        if (shape === 'circle') {
          ctx.beginPath();
          ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        } else if (shape === 'diamond') {
          const half = size * 0.62;
          ctx.beginPath();
          ctx.moveTo(x, y - half);
          ctx.lineTo(x + half, y);
          ctx.lineTo(x, y + half);
          ctx.lineTo(x - half, y);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.fillRect(x - size * 0.5, y - size * 0.5, size, size);
        }
      }
    }
    ctx.globalAlpha = 1;
    return presenceSum;
  };

  const frame = now => {
    state.raf = 0;
    if (!state.alive) return;
    const dt = state.last ? Math.min(0.05, (now - state.last) / 1000) : 1 / 60;
    state.last = now;
    state.dt = dt;
    state.time += dt;
    build();

    if (state.introAt >= 0 && state.time >= state.introAt) {
      state.introAt = -1;
      if (!state.active) {
        setActiveState(true);
        state.releaseAt = state.time + revealDuration / 1000 + 0.7;
      }
    }

    if (state.releaseAt >= 0 && state.time >= state.releaseAt && !state.hovering) {
      state.releaseAt = -1;
      setActiveState(false);
    }

    const want = state.hovering && !reduce ? 1 : 0;
    state.spotPower += (want - state.spotPower) * (1 - Math.exp(-(want ? 6 : 3) * dt));
    const stiffness = 120;
    const damping = 2 * Math.sqrt(stiffness) * 0.9;
    state.spotVX += (stiffness * (state.pointerX - state.spotX) - damping * state.spotVX) * dt;
    state.spotVY += (stiffness * (state.pointerY - state.spotY) - damping * state.spotVY) * dt;
    state.spotX += state.spotVX * dt;
    state.spotY += state.spotVY * dt;

    const pulseSpeed = state.maxDistance / Math.max(0.35, (revealDuration / 1000) * 0.9);
    state.pulses = state.pulses.filter(pulse => {
      pulse.radius += pulseSpeed * dt;
      pulse.power = Math.max(0, 1 - pulse.radius / (state.maxDistance + 40));
      return pulse.power > 0;
    });

    const presence = draw();
    const settling =
      state.active ||
      presence > 0 ||
      state.pulses.length > 0 ||
      state.spotPower > 0.002 ||
      Math.abs(state.spotVX) + Math.abs(state.spotVY) > 0.5;
    if (settling && state.visible) state.raf = requestAnimationFrame(frame);
    else state.last = 0;
  };

  const wake = () => {
    if (!state.raf && state.alive && state.visible) state.raf = requestAnimationFrame(frame);
  };

  const local = event => {
    const rect = container.getBoundingClientRect();
    return [event.clientX - rect.left, event.clientY - rect.top];
  };

  container.addEventListener('pointerenter', e => {
    const [x, y] = local(e);
    state.hovering = e.pointerType !== 'touch';
    state.pointerX = x;
    state.pointerY = y;
    if (state.spotPower < 0.01) {
      state.spotX = x;
      state.spotY = y;
      state.spotVX = 0;
      state.spotVY = 0;
    }
    setActiveState(true, x, y);
    wake();
  });

  container.addEventListener('pointermove', e => {
    const [x, y] = local(e);
    state.pointerX = x;
    state.pointerY = y;
    wake();
  });

  container.addEventListener('pointerleave', () => {
    state.hovering = false;
    setActiveState(false);
    wake();
  });

  container.addEventListener('pointerdown', e => {
    const [x, y] = local(e);
    if (clickPulse && !reduce) {
      state.pulses.push({ x, y, radius: 0, power: 1 });
    }
    wake();
  });

  const resizeObserver = new ResizeObserver(() => {
    build();
    wake();
  });
  resizeObserver.observe(container);

  if (intro) {
    state.introAt = state.time + 0.1;
  }

  wake();

  return {
    destroy() {
      state.alive = false;
      cancelAnimationFrame(state.raf);
      resizeObserver.disconnect();
    }
  };
}
