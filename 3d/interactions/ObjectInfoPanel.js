import { WORKSPACE_DATA } from '../data/portfolioData.js';

/**
 * Responsive Information Panel for interactive workspace objects.
 * - Desktop: Floating glassmorphic card on side
 * - Mobile: Slide-up bottom sheet
 * - Keyboard accessible (ESC to close)
 */
export class ObjectInfoPanel {
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;
    this.isOpen = false;
    this.activeObjectId = null;
    this.closeCallbacks = [];

    this.createPanel();
    this.initKeyboard();
  }

  createPanel() {
    this.el = document.createElement('div');
    this.el.className = 'workspace-panel-wrapper';
    this.el.setAttribute('role', 'dialog');
    this.el.setAttribute('aria-modal', 'true');
    this.el.innerHTML = `
      <div class="panel-backdrop" id="panelBackdrop"></div>
      <div class="panel-card" id="panelCard">
        <div class="panel-drag-handle"></div>
        <div class="panel-header">
          <div class="panel-title-area">
            <span class="panel-category" id="panelCategory">CATEGORY</span>
            <h2 class="panel-title" id="panelTitle">Object Title</h2>
          </div>
          <button class="panel-close-btn cursor-target" id="panelCloseBtn" type="button" aria-label="Close panel">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="panel-body" id="panelBody">
          <!-- Dynamic object content goes here -->
        </div>
      </div>
    `;

    this.container.appendChild(this.el);

    // Event listeners
    this.el.querySelector('#panelCloseBtn').addEventListener('click', () => this.close());
    this.el.querySelector('#panelBackdrop').addEventListener('click', () => this.close());
  }

  initKeyboard() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }

  open(objectId) {
    const data = WORKSPACE_DATA.objects[objectId];
    if (!data) return;

    this.isOpen = true;
    this.activeObjectId = objectId;

    const catEl = this.el.querySelector('#panelCategory');
    const titleEl = this.el.querySelector('#panelTitle');
    const bodyEl = this.el.querySelector('#panelBody');

    catEl.textContent = `${data.icon || '⚡'} ${data.category.toUpperCase()}`;
    titleEl.textContent = data.name;

    bodyEl.innerHTML = this.renderContent(objectId, data);

    // Animate in
    this.el.classList.add('is-open');
    document.body.classList.add('panel-active');
  }

  close() {
    if (!this.isOpen) return;

    this.isOpen = false;
    this.activeObjectId = null;

    this.el.classList.remove('is-open');
    document.body.classList.remove('panel-active');

    this.closeCallbacks.forEach(cb => cb());
  }

  onClose(callback) {
    this.closeCallbacks.push(callback);
  }

  renderContent(objectId, data) {
    switch (objectId) {
      case 'centerMonitor':
        return this.renderProjects(data);
      case 'leftMonitor':
        return this.renderAbout(data);
      case 'pc':
        return this.renderTechStack(data);
      case 'keyboard':
        return this.renderSkills(data);
      case 'mouse':
        return this.renderJourney(data);
      case 'headphones':
        return this.renderContact(data);
      case 'plant':
        return this.renderPhilosophy(data);
      case 'deskMat':
        return this.renderDossiers(data);
      default:
        return `<p class="panel-desc">${data.description || 'Interactive developer workspace item.'}</p>`;
    }
  }

  renderProjects(data) {
    return `
      <div class="panel-projects-list">
        <p class="panel-desc">${data.description}</p>
        ${data.projects.map(p => `
          <article class="panel-project-card">
            ${p.image ? `<div class="project-thumb-wrap"><img class="project-thumb" src="${p.image}" alt="${p.title}" loading="lazy"></div>` : ''}
            <div class="project-info">
              <span class="project-badge">${p.badge}</span>
              <h3 class="project-name">${p.title}</h3>
              <p class="project-sub">${p.subtitle}</p>
              <p class="project-summary">${p.body}</p>
              <div class="project-tags">
                ${p.tags.map(t => `<span class="pill-tag">${t}</span>`).join('')}
              </div>
              <ul class="project-highlights">
                ${p.highlights.map(h => `<li>⚡ ${h}</li>`).join('')}
              </ul>
            </div>
          </article>
        `).join('')}
      </div>
    `;
  }

  renderAbout(data) {
    const profile = WORKSPACE_DATA.profile;
    return `
      <div class="panel-about-wrap">
        <div class="about-hero-card">
          <img class="about-avatar" src="${profile.avatar}" alt="${profile.name}">
          <div class="about-hero-text">
            <h3>${profile.name} <span class="alias">(${profile.alias})</span></h3>
            <p class="role-text">${profile.role}</p>
            <p class="school-text">🎓 ${profile.school}</p>
          </div>
        </div>

        <div class="panel-stats-grid">
          ${profile.stats.map(s => `
            <div class="panel-stat-item">
              <strong>${s.value}</strong>
              <small>${s.label}</small>
            </div>
          `).join('')}
        </div>

        <p class="about-bio">${profile.bio}</p>

        <div class="about-vision-card">
          <span class="badge-accent">VISION & AMBITION</span>
          <p>"${profile.vision}"</p>
        </div>

        <h4 class="subhead">Core Disciplines</h4>
        <div class="disciplines-grid">
          ${data.disciplines.map(d => `
            <div class="discipline-card">
              <div class="disc-head">
                <strong>${d.name}</strong>
                <span class="disc-level">${d.level}</span>
              </div>
              <p>${d.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  renderTechStack(data) {
    return `
      <div class="panel-tech-wrap">
        <div class="tech-hardware-note">
          <span class="badge-accent">WORKSTATION RIG</span>
          <p>Custom ATX Liquid-Cooled Setup · Triple Front RGB Intake · Deep Learning & ROS 2 Dev Station</p>
        </div>
        ${data.categories.map(cat => `
          <div class="tech-group">
            <h4 class="tech-group-title">${cat.group}</h4>
            <div class="tech-chips">
              ${cat.items.map(it => `<span class="tech-chip">${it}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  renderSkills(data) {
    return `
      <div class="panel-skills-wrap">
        <p class="panel-desc">Self-evaluated technical and architectural proficiencies:</p>
        <div class="skills-bar-list">
          ${data.skills.map(s => `
            <div class="skill-bar-row">
              <div class="skill-bar-header">
                <strong>${s.name}</strong>
                <span class="skill-val">${s.tag}</span>
              </div>
              <div class="skill-progress-track">
                <div class="skill-progress-fill" style="width: ${s.score * 10}%"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  renderJourney(data) {
    return `
      <div class="panel-journey-wrap">
        <div class="journey-timeline">
          ${data.milestones.map(m => `
            <div class="journey-item">
              <div class="journey-dot"></div>
              <div class="journey-content">
                <span class="journey-period">${m.period}</span>
                <h4 class="journey-title">${m.title}</h4>
                <p class="journey-body">${m.body}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  renderContact(data) {
    return `
      <div class="panel-contact-wrap">
        <p class="panel-desc">Reach out for collaborations, hackathons, or high-impact engineering projects:</p>
        <div class="contact-links-grid">
          ${data.channels.map(c => `
            <a class="contact-card cursor-target" href="${c.href}" target="_blank" rel="noopener noreferrer">
              <span class="contact-card-label">${c.label}</span>
              <strong class="contact-card-val">${c.value}</strong>
            </a>
          `).join('')}
        </div>
        <div class="contact-resume-banner">
          <p>${data.resumeNote}</p>
          <a class="solid-btn cursor-target" href="assets/resume.pdf" download="NewJA_Resume.pdf">Download Resume (PDF)</a>
        </div>
      </div>
    `;
  }

  renderPhilosophy(data) {
    return `
      <div class="panel-philosophy-wrap">
        <div class="creed-card">
          <span class="badge-accent">CREED</span>
          <h3>"${data.creed}"</h3>
        </div>
        <ul class="points-list">
          ${data.points.map(pt => `<li>🌱 ${pt}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  renderDossiers(data) {
    return `
      <div class="panel-dossiers-wrap">
        <p class="panel-desc">Interactive competition dossiers and system blueprints:</p>
        <div class="dossiers-mini-grid">
          ${data.dossiers.map(d => `
            <div class="dossier-mini-card">
              <span class="dossier-badge">${d.badge}</span>
              <h4>${d.title}</h4>
              <p>${d.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  destroy() {
    if (this.el && this.el.parentNode) {
      this.el.parentNode.removeChild(this.el);
    }
  }
}
