/* ==============================================================================
   🚀 React Bits: Shuffle Component Port (Vanilla JS + GSAP 3D Flip Variant)
   Parameters matched with React Bits Preset:
   effect: 'flip', direction: 'down', duration: 1.1, shuffleTimes: 7,
   animationMode: 'sequence', stagger: 0.07, ease: 'power2.out'
   ============================================================================== */

const DEFAULT_CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*กขคงจชซดตถทนบปผฝพฟภมยรลวศษสหอฮ';

export function shuffleText(element, newText, options = {}) {
  if (!element) return Promise.resolve();

  const {
    effect = 'flip',
    shuffleDirection = 'down',
    duration = 1.1,
    shuffleTimes = 7,
    animationMode = 'sequence',
    stagger = 0.07,
    ease = 'power2.out',
    scrambleCharset = DEFAULT_CHARSET,
    onComplete = null
  } = options;

  // Reduced motion check
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    element.textContent = newText;
    if (typeof onComplete === 'function') onComplete();
    return Promise.resolve();
  }

  // Ensure GSAP is available
  const gsap = window.gsap;
  if (!gsap) {
    element.textContent = newText;
    if (typeof onComplete === 'function') onComplete();
    return Promise.resolve();
  }

  return new Promise(resolve => {
    const text = String(newText ?? element.textContent ?? '');
    const chars = Array.from(text);
    const forward = shuffleDirection === 'right' || shuffleDirection === 'down';
    const isVertical = shuffleDirection === 'up' || shuffleDirection === 'down';
    const rolls = Math.max(1, Math.floor(shuffleTimes));

    // Clear previous and build DOM cells
    element.innerHTML = '';
    element.classList.add('shuffle-parent', 'is-ready');

    const pick = fallback =>
      scrambleCharset ? scrambleCharset.charAt(Math.floor(Math.random() * scrambleCharset.length)) : fallback;

    const cells = [];

    chars.forEach((ch, idx) => {
      if (ch === ' ') {
        const space = document.createElement('span');
        space.innerHTML = '&nbsp;';
        space.style.display = 'inline-block';
        element.appendChild(space);
        return;
      }

      const wrap = document.createElement('span');
      wrap.className = 'shuffle-char-wrapper';
      wrap.style.display = 'inline-block';
      wrap.style.perspective = '280px';
      wrap.style.verticalAlign = 'baseline';

      const inner = document.createElement('span');
      inner.className = 'shuffle-char-inner';
      inner.style.display = 'inline-block';
      inner.style.transformStyle = 'preserve-3d';

      const charSpan = document.createElement('span');
      charSpan.className = 'shuffle-char';
      charSpan.textContent = ch;

      inner.appendChild(charSpan);
      wrap.appendChild(inner);
      element.appendChild(wrap);

      // Prepare scramble sequence
      const seq = [ch];
      for (let k = 0; k < rolls; k++) {
        seq.push(pick(ch));
      }
      seq.push(ch);

      cells.push({
        wrap,
        inner,
        orig: charSpan,
        text: ch,
        seq,
        shown: -1,
        idx
      });
    });

    if (!cells.length) {
      if (typeof onComplete === 'function') onComplete();
      resolve();
      return;
    }

    const showGlyph = (cell, index) => {
      if (cell.shown === index) return;
      cell.shown = index;
      cell.orig.textContent = cell.seq[index] || cell.text;
    };

    const renderFlip = (cell, t) => {
      const last = cell.seq.length - 1;
      const nearest = Math.round(t);
      showGlyph(cell, Math.max(0, Math.min(last, nearest)));
      const angle = (t - nearest) * 180;
      const facing = Math.abs(Math.cos((angle * Math.PI) / 180));
      const turn = isVertical ? (forward ? -angle : angle) : forward ? angle : -angle;

      gsap.set(cell.inner, {
        [isVertical ? 'rotationX' : 'rotationY']: turn,
        z: Math.sin(Math.PI * Math.min(1, Math.max(0, t / last))) * 18,
        opacity: 0.25 + 0.75 * Math.pow(facing, 1.5)
      });
    };

    const tl = gsap.timeline({
      onComplete: () => {
        cells.forEach(cell => {
          cell.orig.textContent = cell.text;
          gsap.set(cell.inner, { clearProps: 'all' });
        });
        if (typeof onComplete === 'function') onComplete();
        resolve();
      }
    });

    cells.forEach((cell, i) => {
      let offset = i * stagger;
      if (animationMode === 'center') {
        const mid = cells.length / 2;
        offset = Math.abs(i - mid) * stagger;
      } else if (animationMode === 'evenodd') {
        offset = (i % 2 === 0 ? i : i + 1) * (stagger * 0.7);
      }

      const proxy = { t: 0 };
      tl.to(
        proxy,
        {
          t: cell.seq.length - 1,
          duration: duration,
          ease: ease,
          onUpdate: () => renderFlip(cell, proxy.t)
        },
        offset
      );
    });
  });
}

export default shuffleText;
