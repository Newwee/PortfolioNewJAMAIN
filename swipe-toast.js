/* ==============================================================================
   🚀 SwipeToast — React Bits Component Port
   Swipeable Floating Toast with Burning Fuse Bar, Physics Drag & Action Button
   ============================================================================== */

export function createSwipeToastManager() {
  let container = document.getElementById('swipe-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'swipe-toast-container';
    container.className = 'swipe-toast-viewport';
    document.body.appendChild(container);
  }

  function show({
    title = 'การแจ้งเตือน',
    description = '',
    icon = '<svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
    actionLabel = '',
    onAction = null,
    duration = 4000,
    fuseColor = '#38bdf8'
  }) {
    const toast = document.createElement('div');
    toast.className = 'swipe-toast';
    toast.style.setProperty('--st-fuse', fuseColor);

    toast.innerHTML = `
      <div class="swipe-toast__lift">
        <div class="swipe-toast__card" role="status" aria-live="polite">
          ${icon ? `<span class="swipe-toast__icon">${icon}</span>` : ''}
          <span class="swipe-toast__body">
            <span class="swipe-toast__title">${title}</span>
            ${description ? `<span class="swipe-toast__desc">${description}</span>` : ''}
          </span>
          ${actionLabel ? `<button type="button" class="swipe-toast__action">${actionLabel}</button>` : ''}
          <button type="button" class="swipe-toast__close" aria-label="Close">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          <i class="swipe-toast__fuse"></i>
        </div>
      </div>
    `;

    container.appendChild(toast);

    const card = toast.querySelector('.swipe-toast__card');
    const fuse = toast.querySelector('.swipe-toast__fuse');
    const closeBtn = toast.querySelector('.swipe-toast__close');
    const actionBtn = toast.querySelector('.swipe-toast__action');

    // Fuse burning animation
    let fuseAnim = null;
    if (duration > 0 && fuse) {
      fuseAnim = fuse.animate(
        [{ transform: 'scaleX(1)' }, { transform: 'scaleX(0)' }],
        { duration, easing: 'linear', fill: 'forwards' }
      );
      fuseAnim.onfinish = () => dismiss('timeout');
    }

    // Hover freeze
    toast.addEventListener('mouseenter', () => fuseAnim?.pause());
    toast.addEventListener('mouseleave', () => fuseAnim?.play());

    // Drag / Swipe Dismiss Physics
    let startY = 0;
    let currentY = 0;
    let isDragging = false;
    let startTime = 0;

    function onPointerDown(e) {
      if (e.target.closest('button')) return;
      isDragging = true;
      startY = e.clientY;
      startTime = performance.now();
      card.setPointerCapture(e.pointerId);
      card.style.transition = 'none';
      fuseAnim?.pause();
    }

    function onPointerMove(e) {
      if (!isDragging) return;
      const dy = e.clientY - startY;
      // Resisting rubberband when pulling up
      currentY = dy > 0 ? dy : dy * 0.35;
      card.style.transform = `translateY(${currentY}px)`;
      card.style.opacity = `${Math.max(0.2, 1 - Math.abs(currentY) / 160)}`;
    }

    function onPointerUp(e) {
      if (!isDragging) return;
      isDragging = false;
      const elapsed = performance.now() - startTime;
      const velocity = currentY / Math.max(1, elapsed);

      if (currentY > 40 || velocity > 0.4) {
        dismiss('swipe');
      } else {
        card.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s';
        card.style.transform = 'translateY(0)';
        card.style.opacity = '1';
        fuseAnim?.play();
      }
    }

    card.addEventListener('pointerdown', onPointerDown);
    card.addEventListener('pointermove', onPointerMove);
    card.addEventListener('pointerup', onPointerUp);
    card.addEventListener('pointercancel', onPointerUp);

    function dismiss(reason = 'close') {
      toast.classList.add('swipe-toast-closing');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 350);
    }

    if (closeBtn) closeBtn.addEventListener('click', () => dismiss('button'));
    if (actionBtn && onAction) {
      actionBtn.addEventListener('click', () => {
        onAction();
        dismiss('action');
      });
    }

    // Slide up enter
    requestAnimationFrame(() => {
      toast.classList.add('swipe-toast-enter');
    });

    return { dismiss };
  }

  return { show };
}
