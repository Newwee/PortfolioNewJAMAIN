/* ==============================================================================
   🚀 React Bits: AnimatedContent Port (Vanilla JS + IntersectionObserver)
   High-Performance, Staggered, Scroll-Driven Reveal System
   Smooth glide, 3D transform, subtle blur settle, and automatic GPU cleanup
   ============================================================================== */

export function initAnimatedContent(options = {}) {
  const {
    selector = '.reveal-on-scroll',
    distance = 45,
    scale = 0.97,
    blur = 6,
    duration = 0.8,
    threshold = 0.12,
    rootMargin = '0px 0px -50px 0px'
  } = options;

  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add('animated-content-visible');
    });
    return;
  }

  // Reduced motion preference
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add('animated-content-visible');
    });
    return;
  }

  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = Number(el.dataset.revealDelay || 0);

          setTimeout(() => {
            el.classList.add('animated-content-visible');
            // Clean up will-change after transition completes to preserve mobile GPU memory
            setTimeout(() => {
              el.style.willChange = 'auto';
            }, duration * 1000 + 150);
          }, delay * 1000);

          obs.unobserve(el);
        }
      });
    },
    { threshold, rootMargin }
  );

  elements.forEach((el, index) => {
    el.style.setProperty('--ac-distance', `${distance}px`);
    el.style.setProperty('--ac-scale', `${scale}`);
    el.style.setProperty('--ac-blur', `${blur}px`);
    el.style.setProperty('--ac-duration', `${duration}s`);
    observer.observe(el);
  });
}

export default initAnimatedContent;
