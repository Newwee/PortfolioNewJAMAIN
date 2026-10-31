/* ==============================================================================
   🚀 StrokeText — React Bits Component Port (Vanilla JS + GSAP)
   SVG Glyph Stroke Drawing, Staggered Outlines & Liquid Wipe Fill Animation
   ============================================================================== */

let strokeSeed = 0;

const getWipeFrames = (box, wipeFrom) => {
  const end = { x: box.x, y: box.y, width: box.width, height: box.height };
  if (wipeFrom === 'right') return { start: { ...end, x: box.x + box.width, width: 0 }, end };
  if (wipeFrom === 'top') return { start: { ...end, height: 0 }, end };
  if (wipeFrom === 'bottom') return { start: { ...end, y: box.y + box.height, height: 0 }, end };
  return { start: { ...end, width: 0 }, end };
};

export function createStrokeText(container, options = {}) {
  if (!container) return null;

  strokeSeed += 1;
  const baseId = `st-${strokeSeed}-${Date.now()}`;
  const wipeId = `st-wipe-${baseId}`;
  const shadowId = `st-shadow-${baseId}`;

  const {
    text = "Draw Attention",
    strokeColor = "#38bdf8",
    fillColor = "#ffffff",
    strokeWidth = 1.6,
    drawDuration = 1.0,
    fillDelay = 0.15,
    stagger = 0.03,
    ease = "power2.out",
    wipeFrom = "left",
    fontSize = 32,
    fontWeight = 800,
    fontFamily = "inherit",
    letterSpacing = -0.5,
    shadow = true,
    shadowColor = "rgba(56, 189, 248, 0.4)"
  } = options;

  let currentText = String(text || '');
  let timeline = null;

  const root = document.createElement('span');
  root.className = 'stroke-text';

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'stroke-text__svg');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

  root.appendChild(svg);
  container.innerHTML = '';
  container.appendChild(root);

  const fontStyle = {
    fontFamily,
    fontSize: `${fontSize}px`,
    fontWeight: String(fontWeight),
    letterSpacing: `${letterSpacing}px`
  };

  const applyStyle = (el, styles) => {
    Object.entries(styles).forEach(([k, v]) => {
      el.style[k] = v;
    });
  };

  const renderAndAnimate = (txt) => {
    currentText = String(txt || '');
    root.setAttribute('aria-label', currentText);
    const chars = Array.from(currentText);

    svg.innerHTML = `
      <defs>
        <clipPath id="${wipeId}" clipPathUnits="userSpaceOnUse">
          <rect id="${wipeId}-rect" x="0" y="0" width="0" height="0" />
        </clipPath>
        ${shadow ? `
          <filter id="${shadowId}" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feDropShadow dx="2" dy="2" stdDeviation="3" flood-color="${shadowColor}" flood-opacity="0.6" />
          </filter>
        ` : ''}
      </defs>

      <!-- Outline Stroke Layer -->
      <text class="stroke-text__stroke" x="0" y="0" fill="none" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-linejoin="round" stroke-linecap="round">
        ${chars.map((char, i) => `<tspan data-stroke-char="true" key="s-${i}">${char === ' ' ? '&#160;' : char}</tspan>`).join('')}
      </text>

      <!-- Liquid Wipe Fill Layer -->
      <g filter="${shadow ? `url(#${shadowId})` : ''}">
        <text class="stroke-text__fill" x="0" y="0" fill="${fillColor}" stroke="none" clip-path="url(#${wipeId})">
          ${chars.map((char, i) => `<tspan data-fill-char="true" key="f-${i}">${char === ' ' ? '&#160;' : char}</tspan>`).join('')}
        </text>
      </g>
    `;

    const strokeText = svg.querySelector('.stroke-text__stroke');
    const fillText = svg.querySelector('.stroke-text__fill');
    applyStyle(strokeText, fontStyle);
    applyStyle(fillText, fontStyle);

    // Measure bounding box
    let bbox;
    try {
      bbox = strokeText.getBBox();
    } catch (e) {
      bbox = { x: 0, y: -fontSize, width: chars.length * (fontSize * 0.6), height: fontSize * 1.3 };
    }

    if (!bbox || !bbox.width) {
      bbox = { x: 0, y: -fontSize, width: chars.length * (fontSize * 0.6), height: fontSize * 1.3 };
    }

    const pad = Math.max(Number(strokeWidth) || 1, fontSize * 0.12);
    const box = {
      x: bbox.x - pad,
      y: bbox.y - pad,
      width: bbox.width + pad * 2,
      height: bbox.height + pad * 2
    };

    svg.setAttribute('viewBox', `${box.x} ${box.y} ${box.width} ${box.height}`);
    root.style.setProperty('--stroke-text-width', `${box.width}px`);

    const wipeRect = svg.querySelector(`#${wipeId}-rect`);
    const frames = getWipeFrames(box, wipeFrom);

    const strokes = svg.querySelectorAll('[data-stroke-char]');
    const fills = svg.querySelectorAll('[data-fill-char]');

    const dash = Math.max(fontSize * 7, 200);

    const gsapRef = window.gsap;
    if (!gsapRef) {
      // Fallback if GSAP is still loading: set final state immediately
      strokes.forEach(s => {
        s.style.strokeDashoffset = '0';
        s.style.strokeOpacity = '1';
      });
      if (wipeRect) {
        wipeRect.setAttribute('x', String(frames.end.x));
        wipeRect.setAttribute('y', String(frames.end.y));
        wipeRect.setAttribute('width', String(frames.end.width));
        wipeRect.setAttribute('height', String(frames.end.height));
      }
      return;
    }

    if (timeline) timeline.kill();

    gsapRef.set(strokes, { strokeDasharray: dash, strokeDashoffset: dash, strokeOpacity: 1 });
    gsapRef.set(fills, { opacity: 1 });
    if (wipeRect) gsapRef.set(wipeRect, { attr: frames.start });

    const fillDuration = Math.max(0.35, drawDuration * 0.45);

    timeline = gsapRef.timeline({ defaults: { overwrite: 'auto' } });

    timeline.to(strokes, {
      strokeDashoffset: 0,
      duration: drawDuration,
      ease,
      stagger: { each: stagger }
    }, 0);

    if (wipeRect) {
      timeline.to(wipeRect, {
        attr: frames.end,
        duration: fillDuration,
        ease: "power2.inOut"
      }, drawDuration + fillDelay);
    }
  };

  renderAndAnimate(currentText);

  return {
    setText(newText) {
      renderAndAnimate(newText);
    },
    getText() {
      return currentText;
    },
    play() {
      renderAndAnimate(currentText);
    },
    destroy() {
      if (timeline) timeline.kill();
      container.innerHTML = '';
    }
  };
}
