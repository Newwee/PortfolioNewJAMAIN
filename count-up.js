/* ==============================================================================
   🚀 CountUp — React Bits Component Port
   Smooth Numeric Odometer & Rolling Counter with Spring/EaseOut Easing
   ============================================================================== */

const EASINGS = {
  linear: t => t,
  easeOut: t => 1 - Math.pow(1 - t, 3),
  spring: t => {
    const c4 = (2 * Math.PI) / 3;
    return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  }
};

export function animateCountUp(element, options = {}) {
  if (!element) return;

  const to = Number(options.to ?? element.dataset.countupTo ?? 0);
  const from = Number(options.from ?? element.dataset.countupFrom ?? 0);
  const duration = Number(options.duration ?? element.dataset.countupDuration ?? 2);
  const separator = options.separator ?? element.dataset.countupSeparator ?? ',';
  const prefix = options.prefix ?? element.dataset.countupPrefix ?? '';
  const suffix = options.suffix ?? element.dataset.countupSuffix ?? '';
  const decimals = options.decimals !== undefined ? options.decimals : (element.dataset.countupDecimals ? Number(element.dataset.countupDecimals) : 0);
  const ease = EASINGS[options.easing || element.dataset.countupEasing || 'easeOut'] || EASINGS.easeOut;

  function formatNumber(val) {
    const fixed = val.toFixed(decimals);
    const [intPart, fracPart] = fixed.split('.');
    const grouped = separator ? intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator) : intPart;
    return `${prefix}${grouped}${fracPart ? '.' + fracPart : ''}${suffix}`;
  }

  let startTime = 0;
  function step(now) {
    if (!startTime) startTime = now;
    const progress = Math.min((now - startTime) / (duration * 1000), 1);
    const current = from + (to - from) * ease(progress);

    element.textContent = formatNumber(current);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      element.textContent = formatNumber(to);
      if (options.onEnd) options.onEnd();
    }
  }

  requestAnimationFrame(step);
}

export function initAllCountUps() {
  const elements = document.querySelectorAll('[data-countup-to]');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCountUp(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach((el) => observer.observe(el));
}
