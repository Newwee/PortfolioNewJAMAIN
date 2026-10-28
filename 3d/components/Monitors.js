import * as THREE from 'three';

/**
 * Creates the dual monitor setup inspired by the reference photograph:
 * - Left monitor: Angled widescreen display with VS Code syntax-highlighted editor
 * - Center monitor: Straight-facing display with New JA portfolio UI and top webcam
 * - Realistic monitor arms and thin bezels
 */
export class WorkspaceMonitors {
  constructor(materials) {
    this.materials = materials;
    this.group = new THREE.Group();
    this.group.name = 'monitorsGroup';

    this.leftScreenCanvas = null;
    this.leftScreenTexture = null;
    this.centerScreenCanvas = null;
    this.centerScreenTexture = null;

    this.interactiveMeshes = [];

    this.buildMonitors();
  }

  buildMonitors() {
    this.createLeftMonitor();
    this.createCenterMonitor();
  }

  /* ----------------------------------------------------
     LEFT MONITOR (Angled VS Code IDE)
     ---------------------------------------------------- */
  createLeftMonitor() {
    const monitorGroup = new THREE.Group();
    monitorGroup.name = 'leftMonitor';
    // Positioned left of center, angled ~22 degrees inward
    monitorGroup.position.set(-0.66, 1.18, 0.08);
    monitorGroup.rotation.y = THREE.MathUtils.degToRad(20);

    const screenW = 0.88;
    const screenH = 0.52;
    const depth = 0.025;

    // Back Casing
    const frameGeo = new THREE.BoxGeometry(screenW + 0.02, screenH + 0.02, depth);
    const frameMesh = new THREE.Mesh(frameGeo, this.materials.darkMetal);
    frameMesh.castShadow = true;
    frameMesh.receiveShadow = true;
    monitorGroup.add(frameMesh);

    // Screen Plane with Dynamic VS Code Texture
    this.createLeftScreenTexture();
    const screenMat = new THREE.MeshStandardMaterial({
      map: this.leftScreenTexture,
      emissiveMap: this.leftScreenTexture,
      emissive: 0xffffff,
      emissiveIntensity: 0.95,
      roughness: 0.2,
      metalness: 0.1
    });

    const screenGeo = new THREE.PlaneGeometry(screenW, screenH);
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.z = depth / 2 + 0.001;
    monitorGroup.add(screenMesh);

    // Monitor Arm / Stand attaching to desk rear
    const armGeo = new THREE.CylinderGeometry(0.016, 0.016, 0.46, 16);
    const armMesh = new THREE.Mesh(armGeo, this.materials.chrome);
    armMesh.position.set(0, -0.32, -0.1);
    armMesh.castShadow = true;
    monitorGroup.add(armMesh);

    // Interaction zone
    const hitGeo = new THREE.BoxGeometry(screenW + 0.05, screenH + 0.05, 0.1);
    const hitMesh = new THREE.Mesh(hitGeo, new THREE.MeshBasicMaterial({ visible: false }));
    hitMesh.name = 'hit_leftMonitor';
    hitMesh.userData = {
      objectId: 'leftMonitor',
      targetMesh: screenMesh,
      title: 'Left Display — Dev Terminal & About',
      category: 'About Me & Code'
    };
    monitorGroup.add(hitMesh);
    this.interactiveMeshes.push(hitMesh);

    this.group.add(monitorGroup);
    this.leftScreenMesh = screenMesh;
    this.leftMonitorGroup = monitorGroup;
  }

  /* ----------------------------------------------------
     CENTER MONITOR (NEW JA Portfolio Website)
     ---------------------------------------------------- */
  createCenterMonitor() {
    const monitorGroup = new THREE.Group();
    monitorGroup.name = 'centerMonitor';
    // Positioned right of center monitor, facing straight
    monitorGroup.position.set(0.12, 1.18, -0.05);

    const screenW = 0.96;
    const screenH = 0.55;
    const depth = 0.025;

    // Back Casing
    const frameGeo = new THREE.BoxGeometry(screenW + 0.02, screenH + 0.02, depth);
    const frameMesh = new THREE.Mesh(frameGeo, this.materials.darkMetal);
    frameMesh.castShadow = true;
    frameMesh.receiveShadow = true;
    monitorGroup.add(frameMesh);

    // Screen Plane with Dynamic Portfolio Website Texture
    this.createCenterScreenTexture();
    const screenMat = new THREE.MeshStandardMaterial({
      map: this.centerScreenTexture,
      emissiveMap: this.centerScreenTexture,
      emissive: 0xffffff,
      emissiveIntensity: 1.0,
      roughness: 0.18,
      metalness: 0.1
    });

    const screenGeo = new THREE.PlaneGeometry(screenW, screenH);
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.z = depth / 2 + 0.001;
    monitorGroup.add(screenMesh);

    // Mounted Webcam on top center bezel (from reference image)
    const camGeo = new THREE.BoxGeometry(0.08, 0.022, 0.035);
    const camMesh = new THREE.Mesh(camGeo, this.materials.darkPlastic);
    camMesh.position.set(0, screenH / 2 + 0.016, depth / 2);
    monitorGroup.add(camMesh);

    // Webcam lens dot (green LED)
    const lensGeo = new THREE.CylinderGeometry(0.004, 0.004, 0.005, 12);
    lensGeo.rotateX(Math.PI / 2);
    const lensMesh = new THREE.Mesh(lensGeo, this.materials.glowingGreen);
    lensMesh.position.set(0.015, screenH / 2 + 0.016, depth / 2 + 0.018);
    monitorGroup.add(lensMesh);

    // Monitor Arm / Desk Stand
    const standPoleGeo = new THREE.CylinderGeometry(0.018, 0.018, 0.48, 16);
    const standPole = new THREE.Mesh(standPoleGeo, this.materials.chrome);
    standPole.position.set(0, -0.32, -0.08);
    standPole.castShadow = true;
    monitorGroup.add(standPole);

    // Interaction zone
    const hitGeo = new THREE.BoxGeometry(screenW + 0.05, screenH + 0.05, 0.1);
    const hitMesh = new THREE.Mesh(hitGeo, new THREE.MeshBasicMaterial({ visible: false }));
    hitMesh.name = 'hit_centerMonitor';
    hitMesh.userData = {
      objectId: 'centerMonitor',
      targetMesh: screenMesh,
      title: 'Main Display — Flagship Works & Projects',
      category: 'Projects Showcase'
    };
    monitorGroup.add(hitMesh);
    this.interactiveMeshes.push(hitMesh);

    this.group.add(monitorGroup);
    this.centerScreenMesh = screenMesh;
    this.centerMonitorGroup = monitorGroup;
  }

  /* ----------------------------------------------------
     Procedural Screen Canvases (Crisp & Lightweight)
     ---------------------------------------------------- */
  createLeftScreenTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');

    // VS Code Dark Background
    ctx.fillStyle = '#181a1f';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Activity Bar (Left 48px)
    ctx.fillStyle = '#121417';
    ctx.fillRect(0, 0, 48, canvas.height);
    // Activity bar icons
    const icons = ['📁', '🔍', '🌿', '🐞', '⚙️'];
    ctx.font = '20px sans-serif';
    icons.forEach((ic, i) => {
      ctx.fillText(ic, 14, 45 + i * 46);
    });

    // Sidebar File Explorer (Width 160px)
    ctx.fillStyle = '#15171c';
    ctx.fillRect(48, 0, 160, canvas.height);
    ctx.fillStyle = '#7a889b';
    ctx.font = 'bold 12px "JetBrains Mono", monospace';
    ctx.fillText('EXPLORER: NEW JA', 58, 28);

    const files = [
      '▼ src',
      '  ▸ ai-hydrology.py',
      '  ▸ drone-vision.py',
      '  ▸ agentic-copilot.ts',
      '  ▸ roblox-netcode.lua',
      '  ▸ workspace-3d.js',
      '  ▸ server.js',
      '  📄 package.json',
      '  🔒 UTCC-champion.key'
    ];
    ctx.font = '12px "JetBrains Mono", monospace';
    files.forEach((f, i) => {
      ctx.fillStyle = f.includes('champion') ? '#38bdf8' : (f.includes('▸') || f.includes('▼') ? '#cbd5e1' : '#94a3b8');
      ctx.fillText(f, 58, 58 + i * 22);
    });

    // Editor Header Tabs
    ctx.fillStyle = '#1e222b';
    ctx.fillRect(208, 0, canvas.width - 208, 36);
    ctx.fillStyle = '#282c34';
    ctx.fillRect(208, 0, 180, 36);
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(208, 34, 180, 2);
    ctx.fillStyle = '#f1f5f9';
    ctx.font = '13px "JetBrains Mono", monospace';
    ctx.fillText('ai-hydrology.py ●', 225, 23);

    // Code Editor Content with Syntax Colors
    const lines = [
      { num: '1', tokens: [{ t: 'import', c: '#c084fc' }, { t: ' torch', c: '#f1f5f9' }, { t: ', numpy as np', c: '#f1f5f9' }] },
      { num: '2', tokens: [{ t: 'from', c: '#c084fc' }, { t: ' telemetry', c: '#38bdf8' }, { t: ' import', c: '#c084fc' }, { t: ' StreamListener, FloodPredictor', c: '#f472b6' }] },
      { num: '3', tokens: [{ t: '# UTCC AI Hackathon 2026 — 1st Place National Champion Architecture', c: '#64748b' }] },
      { num: '4', tokens: [{ t: 'class', c: '#c084fc' }, { t: ' HydrologicalAIModel', c: '#38bdf8' }, { t: '(torch.nn.Module):', c: '#f1f5f9' }] },
      { num: '5', tokens: [{ t: '    def', c: '#c084fc' }, { t: ' __init__', c: '#38bdf8' }, { t: '(self, sensor_channels=16, horizon=24):', c: '#f1f5f9' }] },
      { num: '6', tokens: [{ t: '        super().__init__()', c: '#f1f5f9' }] },
      { num: '7', tokens: [{ t: '        self.encoder = TransformerEncoder(channels=sensor_channels)', c: '#f1f5f9' }] },
      { num: '8', tokens: [{ t: '        self.predictor = RiskForecastHead(accuracy=0.998)', c: '#38bdf8' }] },
      { num: '9', tokens: [{ t: '    async def', c: '#c084fc' }, { t: ' forecast_realtime_flood', c: '#38bdf8' }, { t: '(self, stream_data):', c: '#f1f5f9' }] },
      { num: '10', tokens: [{ t: '        """Process edge telemetry & broadcast emergency warning"""', c: '#a3e635' }] },
      { num: '11', tokens: [{ t: '        vectors = self.encoder(stream_data.water_depth, stream_data.rain_rate)', c: '#f1f5f9' }] },
      { num: '12', tokens: [{ t: '        risk_matrix = self.predictor.evaluate(vectors)', c: '#f1f5f9' }] },
      { num: '13', tokens: [{ t: '        if risk_matrix.severity >= 0.85:', c: '#f472b6' }] },
      { num: '14', tokens: [{ t: '            await telemetry.dispatch_civil_alert(risk_matrix)', c: '#f43f5e' }] },
      { num: '15', tokens: [{ t: '        return { "status": "OPTIMAL", "confidence": 0.998 }', c: '#38bdf8' }] },
      { num: '16', tokens: [{ t: '# Creator: Pataradanai Pongsao (New JA) — High School Grade 12', c: '#64748b' }] },
      { num: '17', tokens: [{ t: 'print(">> Telemetry AI Engine Online. Ready to innovate.")', c: '#a3e635' }] }
    ];

    // Draw Line numbers and code
    lines.forEach((line, i) => {
      const y = 65 + i * 26;
      // Line number
      ctx.fillStyle = '#475569';
      ctx.font = '12px "JetBrains Mono", monospace';
      ctx.fillText(line.num.padStart(2, ' '), 215, y);

      // Line code tokens
      let x = 245;
      line.tokens.forEach(tok => {
        ctx.fillStyle = tok.c;
        ctx.font = '13px "JetBrains Mono", monospace';
        ctx.fillText(tok.t, x, y);
        x += ctx.measureText(tok.t).width;
      });
    });

    // Bottom Status Bar
    ctx.fillStyle = '#0284c7';
    ctx.fillRect(0, canvas.height - 24, canvas.width, 24);
    ctx.fillStyle = '#ffffff';
    ctx.font = '11px "JetBrains Mono", monospace';
    ctx.fillText('⚡ Python 3.12 (venv)  |  UTF-8  |  Spaces: 4  |  Git: main* (UTCC Champion)', 15, canvas.height - 8);

    this.leftScreenCanvas = canvas;
    this.leftScreenTexture = new THREE.CanvasTexture(canvas);
    this.leftScreenTexture.colorSpace = THREE.SRGBColorSpace;
  }

  createCenterScreenTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');

    // Deep Cosmic Gradient Background (from reference image)
    const bgGrad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    bgGrad.addColorStop(0, '#060613');
    bgGrad.addColorStop(0.4, '#120b29');
    bgGrad.addColorStop(0.8, '#2b0b4a');
    bgGrad.addColorStop(1, '#0c0720');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Glowing Nebula Arc across bottom center
    const arcGrad = ctx.createRadialGradient(canvas.width / 2, 480, 20, canvas.width / 2, 480, 420);
    arcGrad.addColorStop(0, 'rgba(192, 132, 252, 0.55)');
    arcGrad.addColorStop(0.5, 'rgba(244, 114, 182, 0.25)');
    arcGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = arcGrad;
    ctx.fillRect(0, 200, canvas.width, 400);

    // Top Navigation Bar
    ctx.fillStyle = 'rgba(15, 12, 30, 0.85)';
    ctx.fillRect(0, 0, canvas.width, 45);

    // Brand Logo
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(35, 22, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 15px "Space Grotesk", sans-serif';
    ctx.fillText('NEW JA', 55, 27);

    // Nav Links
    const navItems = ['Profile', 'Story', 'Skills', 'Flagship', 'Works', 'Contact'];
    ctx.font = '13px "Inter", sans-serif';
    navItems.forEach((item, i) => {
      ctx.fillStyle = i === 3 ? '#f472b6' : '#cbd5e1';
      ctx.fillText(item, 260 + i * 85, 27);
    });

    // Hero Kicker
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 13px "JetBrains Mono", monospace';
    ctx.fillText('● CREATIVE AI ARCHITECT · FULL-STACK INNOVATOR', 60, 110);

    // Giant Glowing Title "NEW JA"
    ctx.shadowColor = '#c084fc';
    ctx.shadowBlur = 18;
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 68px "Space Grotesk", sans-serif';
    ctx.fillText('NEW JA', 58, 185);
    ctx.shadowBlur = 0;

    // Subtitle
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '600 20px "Inter", sans-serif';
    ctx.fillText('Pataradanai Pongsao', 60, 222);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '14px "Inter", sans-serif';
    ctx.fillText('Transforming complex algorithms into intuitive spatial experiences & robotics.', 60, 250);

    // Metric Badges
    const stats = [
      { val: '24+', label: 'Projects Built' },
      { val: '15+', label: 'Awards & Honors' },
      { val: '1st', label: 'National Champion' }
    ];
    stats.forEach((st, i) => {
      const bx = 60 + i * 140;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.strokeStyle = 'rgba(192, 132, 252, 0.4)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(bx, 280, 125, 60, 10);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 20px "JetBrains Mono", monospace';
      ctx.fillText(st.val, bx + 14, 308);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px "Inter", sans-serif';
      ctx.fillText(st.label, bx + 14, 328);
    });

    // Call to Action Buttons
    // Solid Button
    ctx.fillStyle = '#a855f7';
    ctx.beginPath();
    ctx.roundRect(60, 370, 150, 42, 21);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 13px "Inter", sans-serif';
    ctx.fillText('Explore Works →', 85, 396);

    // Ghost Button
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.beginPath();
    ctx.roundRect(225, 370, 140, 42, 21);
    ctx.stroke();
    ctx.fillStyle = '#cbd5e1';
    ctx.fillText('Read Journey', 255, 396);

    // Right Side: Portrait Card matching reference photo
    ctx.fillStyle = 'rgba(16, 14, 30, 0.88)';
    ctx.strokeStyle = 'rgba(244, 114, 182, 0.5)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(680, 100, 260, 360, 18);
    ctx.fill();
    ctx.stroke();

    // Portrait placeholder inside card
    ctx.fillStyle = '#261b40';
    ctx.beginPath();
    ctx.roundRect(700, 120, 220, 210, 12);
    ctx.fill();

    // Stylized avatar glyph
    ctx.fillStyle = '#f472b6';
    ctx.beginPath();
    ctx.arc(810, 205, 45, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 28px "Space Grotesk", sans-serif';
    ctx.fillText('JA', 793, 215);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px "Inter", sans-serif';
    ctx.fillText('New JA', 705, 362);
    ctx.fillStyle = '#38bdf8';
    ctx.font = '12px "Inter", sans-serif';
    ctx.fillText('AI Engineer & Creator', 705, 385);

    ctx.fillStyle = '#22c55e';
    ctx.beginPath();
    ctx.arc(712, 420, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '11px "JetBrains Mono", monospace';
    ctx.fillText('Building Tomorrow', 725, 424);

    this.centerScreenCanvas = canvas;
    this.centerScreenTexture = new THREE.CanvasTexture(canvas);
    this.centerScreenTexture.colorSpace = THREE.SRGBColorSpace;
  }
}
