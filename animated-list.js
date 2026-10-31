/* ==============================================================================
   🚀 AnimatedList — React Bits Component Port (Vanilla JS + Spring Physics)
   Physics Selection Indicator, Faded Edge Masks, Keyboard Navigation & Pop FX
   ============================================================================== */

const THEMES = {
  dark: {
    '--al-frame': 'rgba(15, 23, 42, 0.75)',
    '--al-frame-edge': 'rgba(255, 255, 255, 0.08)',
    '--al-frame-highlight': 'rgba(255, 255, 255, 0.07)',
    '--al-frame-shadow': '0 22px 44px -20px rgba(0, 0, 0, 0.8), 0 6px 16px -8px rgba(0, 0, 0, 0.5)',
    '--al-tile': 'linear-gradient(180deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.8) 100%)',
    '--al-tile-edge': 'rgba(255, 255, 255, 0.08)',
    '--al-tile-highlight': 'rgba(255, 255, 255, 0.12)',
    '--al-tile-shadow': '0 4px 10px -4px rgba(0, 0, 0, 0.7)',
    '--al-well': 'rgba(255, 255, 255, 0.08)',
    '--al-ink': '#f8fafc',
    '--al-muted': 'rgba(148, 163, 184, 0.85)',
    '--al-thumb': 'rgba(255, 255, 255, 0.16)',
    '--al-ring': '#38bdf8',
    '--al-ring-fill': 'rgba(56, 189, 248, 0.08)',
    '--al-hover': 'brightness(1.12)',
    '--al-press': 'brightness(0.85)',
    '--al-active': 'brightness(1.15)'
  }
};

const smootherstep = t => t * t * t * (t * (t * 6 - 15) + 10);

const FADE_MASK = (() => {
  const steps = [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1];
  const top = steps.map(t => `rgba(0, 0, 0, ${smootherstep(t).toFixed(3)}) calc(var(--al-fade-top) * ${t})`);
  const bottom = [...steps]
    .reverse()
    .map(t => `rgba(0, 0, 0, ${smootherstep(t).toFixed(3)}) calc(100% - var(--al-fade-bottom) * ${t})`);
  return `linear-gradient(to bottom, ${[...top, ...bottom].join(', ')})`;
})();

let listSeed = 0;

export function createAnimatedList(container, options = {}) {
  if (!container) return null;

  listSeed += 1;
  const baseId = `anim-list-${listSeed}`;

  const {
    items = [],
    onItemSelect = null,
    initialSelectedIndex = 0,
    selectOnHover = true,
    enableArrowNavigation = true,
    loop = true,
    showGradients = true,
    fadeSize = 48,
    displayScrollbar = true,
    frame = true,
    theme = 'dark',
    accentColor = '#38bdf8',
    radius = 16,
    gap = 8,
    width = '100%',
    maxHeight = 360
  } = options;

  let selected = initialSelectedIndex >= 0 && initialSelectedIndex < items.length ? initialSelectedIndex : 0;
  let itemsData = [...items];
  let raf = 0;
  let last = 0;
  let navigating = false;
  let engaged = false;

  const motion = { y: 0, h: 0, vy: 0, vh: 0, ty: 0, th: 0, ready: false };

  // Create DOM root
  const root = document.createElement('div');
  root.className = `animated-list${frame ? ' animated-list--framed' : ''}`;
  root.style.setProperty('--al-radius', `${Math.max(0, radius)}px`);
  root.style.setProperty('--al-gap', `${Math.max(0, gap)}px`);
  root.style.setProperty('--al-width', typeof width === 'number' ? `${width}px` : width);
  root.style.setProperty('--al-accent', accentColor);
  root.style.setProperty('--al-ring', accentColor);
  root.style.setProperty('--al-ring-fill', 'rgba(56, 189, 248, 0.08)');

  const themeVars = THEMES[theme] || THEMES.dark;
  Object.entries(themeVars).forEach(([k, v]) => {
    root.style.setProperty(k, v);
  });

  const viewport = document.createElement('div');
  viewport.className = `animated-list__viewport${displayScrollbar ? '' : ' animated-list__viewport--bare'}`;
  viewport.setAttribute('role', 'listbox');
  viewport.setAttribute('tabindex', '0');
  viewport.style.maxHeight = typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight;
  if (showGradients) {
    viewport.style.maskImage = FADE_MASK;
    viewport.style.webkitMaskImage = FADE_MASK;
  }

  const track = document.createElement('div');
  track.className = 'animated-list__track';

  const indicator = document.createElement('span');
  indicator.className = 'animated-list__indicator';
  indicator.setAttribute('aria-hidden', 'true');

  const ring = document.createElement('span');
  ring.className = 'animated-list__ring';
  indicator.appendChild(ring);

  viewport.appendChild(track);
  root.appendChild(viewport);

  if (frame) {
    const frameRim = document.createElement('span');
    frameRim.className = 'animated-list__frame-rim';
    frameRim.setAttribute('aria-hidden', 'true');
    root.appendChild(frameRim);
  }

  container.innerHTML = '';
  container.appendChild(root);

  let itemElements = [];

  const writeIndicator = () => {
    indicator.style.transform = `translate3d(0, ${motion.y.toFixed(2)}px, 0)`;
    indicator.style.height = `${motion.h.toFixed(2)}px`;
  };

  const frameLoop = now => {
    raf = 0;
    const dt = Math.min(0.05, (now - last) / 1000 || 0);
    last = now;
    const omega = 32;
    const zeta = 0.78;
    const steps = Math.max(1, Math.ceil(dt / (1 / 240)));
    const h = dt / steps;

    for (let i = 0; i < steps; i++) {
      motion.vy += (omega * omega * (motion.ty - motion.y) - 2 * zeta * omega * motion.vy) * h;
      motion.vh += (omega * omega * (motion.th - motion.h) - 2 * zeta * omega * motion.vh) * h;
      motion.y += motion.vy * h;
      motion.h += motion.vh * h;
    }

    const moving =
      Math.abs(motion.ty - motion.y) > 0.05 ||
      Math.abs(motion.th - motion.h) > 0.05 ||
      Math.abs(motion.vy) + Math.abs(motion.vh) > 0.5;

    if (!moving) {
      motion.y = motion.ty;
      motion.h = motion.th;
      motion.vy = motion.vh = 0;
    }

    writeIndicator();
    if (moving) raf = requestAnimationFrame(frameLoop);
  };

  const placeIndicator = snap => {
    const itemEl = itemElements[selected];
    if (!itemEl) {
      indicator.style.opacity = '0';
      motion.ready = false;
      return;
    }
    indicator.style.opacity = '1';
    motion.ty = itemEl.offsetTop;
    motion.th = itemEl.offsetHeight;

    if (snap || !motion.ready) {
      motion.y = motion.ty;
      motion.h = motion.th;
      motion.vy = motion.vh = 0;
      motion.ready = true;
      writeIndicator();
      return;
    }

    if (!raf) {
      last = performance.now();
      raf = requestAnimationFrame(frameLoop);
    }
  };

  const updateFades = () => {
    if (!showGradients) return;
    const span = Math.max(1, fadeSize);
    const { scrollTop, scrollHeight, clientHeight } = viewport;
    const top = Math.min(span, Math.max(0, scrollTop));
    const bottom = Math.min(span, Math.max(0, scrollHeight - clientHeight - scrollTop));
    viewport.style.setProperty('--al-fade-top', `${top.toFixed(1)}px`);
    viewport.style.setProperty('--al-fade-bottom', `${bottom.toFixed(1)}px`);
  };

  const scrollToSelected = () => {
    const itemEl = itemElements[selected];
    if (!itemEl) return;
    const top = track.offsetTop + itemEl.offsetTop;
    const bottom = top + itemEl.offsetHeight;
    const room = Math.max(0, (viewport.clientHeight - itemEl.offsetHeight) / 2);
    const margin = Math.min(fadeSize, room);

    if (top < viewport.scrollTop + margin) {
      viewport.scrollTo({ top: Math.max(0, top - margin), behavior: 'smooth' });
    } else if (bottom > viewport.scrollTop + viewport.clientHeight - margin) {
      viewport.scrollTo({ top: bottom - viewport.clientHeight + margin, behavior: 'smooth' });
    }
  };

  const setSelected = (index, triggerCallback = true) => {
    if (index < 0 || index >= itemsData.length) return;
    selected = index;

    itemElements.forEach((el, idx) => {
      const isSel = idx === selected;
      el.setAttribute('aria-selected', String(isSel));
      if (isSel) {
        el.dataset.selected = '';
      } else {
        delete el.dataset.selected;
      }
    });

    viewport.setAttribute('aria-activedescendant', `${baseId}-${selected}`);
    placeIndicator(false);

    if (triggerCallback && typeof onItemSelect === 'function') {
      onItemSelect(itemsData[selected], selected);
    }
  };

  const renderItems = () => {
    track.innerHTML = '';
    itemElements = [];

    itemsData.forEach((item, index) => {
      const el = document.createElement('div');
      el.id = `${baseId}-${index}`;
      el.className = 'animated-list__item';
      el.setAttribute('role', 'option');
      el.setAttribute('tabindex', '-1');
      el.dataset.index = String(index);

      const isSel = index === selected;
      el.setAttribute('aria-selected', String(isSel));
      if (isSel) el.dataset.selected = '';

      el.innerHTML = `
        <span class="animated-list__lead">${item.icon || '📌'}</span>
        <span class="animated-list__text">
          <span class="animated-list__title">${item.title}</span>
          ${item.thaiTitle ? `<span class="animated-list__description">${item.thaiTitle} • ${item.dateText || ''}</span>` : ''}
        </span>
        ${item.meta ? `<span class="animated-list__meta">${item.meta}</span>` : ''}
        <span class="animated-list__rim" aria-hidden="true"></span>
      `;

      if (selectOnHover) {
        el.addEventListener('pointerenter', () => {
          if (!navigating) setSelected(index, true);
        });
      }

      el.addEventListener('click', () => {
        setSelected(index, true);
      });

      track.appendChild(el);
      itemElements.push(el);
    });

    track.appendChild(indicator);
    setTimeout(() => {
      placeIndicator(true);
      updateFades();
    }, 50);
  };

  renderItems();

  // Keyboard navigation
  const onKey = e => {
    if (!enableArrowNavigation || e.defaultPrevented) return;
    if (e.altKey || e.ctrlKey || e.metaKey) return;

    const active = document.activeElement;
    const isFocused = active === viewport;
    const idle = !active || active === document.body || active === document.documentElement;
    if (!isFocused && !(engaged && idle)) return;

    const count = itemsData.length;
    if (!count) return;

    let next = null;
    if (e.key === 'ArrowDown') next = selected + 1;
    else if (e.key === 'ArrowUp') next = selected - 1;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = count - 1;
    else if ((e.key === 'Enter' || (isFocused && e.key === ' ')) && selected >= 0) {
      e.preventDefault();
      if (typeof onItemSelect === 'function') onItemSelect(itemsData[selected], selected);
      return;
    }

    if (next === null) return;
    e.preventDefault();
    next = loop ? (next + count) % count : Math.min(count - 1, Math.max(0, next));

    navigating = true;
    setSelected(next, true);
    scrollToSelected();
  };

  const onPointerMove = () => {
    navigating = false;
  };

  viewport.addEventListener('scroll', updateFades, { passive: true });
  window.addEventListener('keydown', onKey);
  root.addEventListener('pointerenter', () => { engaged = true; });
  root.addEventListener('pointerleave', () => { engaged = false; });
  root.addEventListener('pointermove', onPointerMove);

  return {
    setSelected(index, trigger = true) {
      setSelected(index, trigger);
      scrollToSelected();
    },
    getSelected() {
      return { item: itemsData[selected], index: selected };
    },
    updateItems(newItems) {
      itemsData = [...newItems];
      renderItems();
    },
    destroy() {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('keydown', onKey);
      container.innerHTML = '';
    }
  };
}
