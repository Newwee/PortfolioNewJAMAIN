/**
 * Floating 3D HUD Tooltip displaying contextual information on hover.
 */
export class ObjectTooltip {
  constructor(container) {
    this.container = container;
    this.el = null;
    this.visible = false;
    this.targetX = 0;
    this.targetY = 0;
    this.currentX = 0;
    this.currentY = 0;

    this.createTooltip();
  }

  createTooltip() {
    this.el = document.createElement('div');
    this.el.className = 'workspace-tooltip';
    this.el.setAttribute('aria-hidden', 'true');
    this.el.innerHTML = `
      <div class="tooltip-badge">
        <span class="tooltip-dot"></span>
        <span class="tooltip-cat">INTERACTIVE</span>
      </div>
      <div class="tooltip-title"></div>
      <div class="tooltip-hint">Click or tap to inspect</div>
    `;
    this.container.appendChild(this.el);
  }

  show(data, clientPos) {
    if (!data) return this.hide();

    this.visible = true;
    this.el.classList.add('visible');

    const catEl = this.el.querySelector('.tooltip-cat');
    const titleEl = this.el.querySelector('.tooltip-title');

    if (catEl) catEl.textContent = data.category || 'OBJECT';
    if (titleEl) titleEl.textContent = data.title || 'Workspace Object';

    if (clientPos) {
      this.updatePosition(clientPos);
    }
  }

  updatePosition(clientPos) {
    if (!clientPos) return;
    const padding = 16;
    let x = clientPos.x + padding;
    let y = clientPos.y + padding;

    // Boundary check so tooltip never clips outside the window
    const rect = this.el.getBoundingClientRect();
    if (x + rect.width > window.innerWidth - 12) {
      x = clientPos.x - rect.width - padding;
    }
    if (y + rect.height > window.innerHeight - 12) {
      y = clientPos.y - rect.height - padding;
    }

    this.el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }

  hide() {
    this.visible = false;
    if (this.el) {
      this.el.classList.remove('visible');
    }
  }

  destroy() {
    if (this.el && this.el.parentNode) {
      this.el.parentNode.removeChild(this.el);
    }
  }
}
