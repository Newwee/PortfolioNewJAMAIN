import * as THREE from 'three';
import { WorkspaceMaterials } from './environment/Materials.js';
import { WorkspaceLighting } from './environment/Lighting.js';
import { WorkspaceRoom } from './components/Room.js';
import { WorkspaceDesk } from './components/Desk.js';
import { WorkspaceMonitors } from './components/Monitors.js';
import { WorkspacePC } from './components/PC.js';
import { WorkspaceKeyboard } from './components/Keyboard.js';
import { WorkspaceMouse } from './components/Mouse.js';
import { WorkspaceHeadphones } from './components/Headphones.js';
import { WorkspacePlant } from './components/Plant.js';
import { CameraController } from './interactions/CameraController.js';
import { RaycasterManager } from './interactions/RaycasterManager.js';
import { ObjectTooltip } from './interactions/ObjectTooltip.js';
import { ObjectInfoPanel } from './interactions/ObjectInfoPanel.js';
import { WORKSPACE_DATA } from './data/portfolioData.js';

/**
 * Master Application Coordinator for the 3D Developer Workspace.
 */
export class WorkspaceApp {
  constructor(canvasContainer, options = {}) {
    this.container = canvasContainer;
    this.options = options;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.clock = new THREE.Clock();

    this.isRunning = false;
    this.isMuted = localStorage.getItem('workspace_audio_muted') !== 'false'; // Default muted

    this.interactiveMeshes = [];

    this.init();
  }

  static isWebGLAvailable() {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }

  init() {
    if (!WorkspaceApp.isWebGLAvailable()) {
      console.warn('WebGL is not available on this system.');
      if (this.options.onWebGLFailure) this.options.onWebGLFailure();
      return;
    }

    try {
      this.initScene();
      this.initCamera();
      this.initRenderer();
      this.initAudio();

      this.materials = new WorkspaceMaterials();
      this.lighting = new WorkspaceLighting(this.scene);

      this.buildWorkspace();

      this.cameraController = new CameraController(this.camera, this.renderer.domElement);
      this.tooltip = new ObjectTooltip(this.container);
      this.infoPanel = new ObjectInfoPanel(this.container);

      this.initInteractions();
      this.initResize();

      // Initial responsive positioning
      this.cameraController.handleResize(this.container.clientWidth, this.container.clientHeight);

      this.start();

      if (this.options.onReady) {
        this.options.onReady();
      }
    } catch (err) {
      console.error('Failed to initialize 3D Workspace:', err);
      if (this.options.onWebGLFailure) this.options.onWebGLFailure(err);
    }
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x06070d);
    // Subtle room fog for depth blending
    this.scene.fog = new THREE.FogExp2(0x06070d, 0.28);
  }

  initCamera() {
    const aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera = new THREE.PerspectiveCamera(46, aspect, 0.1, 20);
    this.camera.position.set(0.0, 1.16, 1.52);
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false
    });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    // Cap pixel ratio for high DPI screens to guarantee 60 FPS
    const maxRatio = window.innerWidth < 768 ? 1.5 : Math.min(window.devicePixelRatio, 2.0);
    this.renderer.setPixelRatio(maxRatio);

    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.container.appendChild(this.renderer.domElement);
  }

  initAudio() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioCtx = new AudioCtx();
      }
    } catch (e) {}
  }

  playFuturisticChime(type = 'select') {
    if (this.isMuted || !this.audioCtx) return;

    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    if (type === 'hover') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(580, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
      gain.gain.setValueAtTime(0.02, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
      osc.frequency.exponentialRampToValueAtTime(1320, now + 0.25);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    }
  }

  setAudioMuted(muted) {
    this.isMuted = muted;
    localStorage.setItem('workspace_audio_muted', muted ? 'true' : 'false');
  }

  buildWorkspace() {
    // 1. Dark Room Backdrop
    this.room = new WorkspaceRoom(this.materials);
    this.scene.add(this.room.group);

    // 2. Desk Tabletop, Legs & Mat
    this.desk = new WorkspaceDesk(this.materials);
    this.scene.add(this.desk.group);
    this.interactiveMeshes.push(...this.desk.interactiveMeshes);

    // 3. Dual Monitors (VS Code & Portfolio)
    this.monitors = new WorkspaceMonitors(this.materials);
    this.scene.add(this.monitors.group);
    this.interactiveMeshes.push(...this.monitors.interactiveMeshes);

    // 4. PC Tower with Animated RGB Fans
    this.pc = new WorkspacePC(this.materials);
    this.scene.add(this.pc.group);
    this.interactiveMeshes.push(...this.pc.interactiveMeshes);

    // 5. Mechanical Keyboard
    this.keyboard = new WorkspaceKeyboard(this.materials);
    this.scene.add(this.keyboard.group);
    this.interactiveMeshes.push(...this.keyboard.interactiveMeshes);

    // 6. Gaming Mouse
    this.mouse = new WorkspaceMouse(this.materials);
    this.scene.add(this.mouse.group);
    this.interactiveMeshes.push(...this.mouse.interactiveMeshes);

    // 7. Headphones on Stand
    this.headphones = new WorkspaceHeadphones(this.materials);
    this.scene.add(this.headphones.group);
    this.interactiveMeshes.push(...this.headphones.interactiveMeshes);

    // 8. Desk Plant & Mug
    this.plant = new WorkspacePlant(this.materials);
    this.scene.add(this.plant.group);
    this.interactiveMeshes.push(...this.plant.interactiveMeshes);
  }

  initInteractions() {
    this.raycaster = new RaycasterManager(
      this.camera,
      this.renderer.domElement,
      this.interactiveMeshes
    );

    // Hover Handler
    this.raycaster.onHover(({ type, data, clientPos }) => {
      if (type === 'hover') {
        if (data) {
          this.tooltip.show(data, clientPos);
          this.playFuturisticChime('hover');
        } else {
          this.tooltip.hide();
        }
      } else if (type === 'move') {
        this.tooltip.updatePosition(clientPos);
      }
    });

    // Object Selection Handler
    this.raycaster.onSelect((objectId) => {
      this.selectObject(objectId);
    });

    // Info Panel Close Handler -> Return Camera
    this.infoPanel.onClose(() => {
      this.cameraController.resetToDefault(true);
    });
  }

  selectObject(objectId) {
    const data = WORKSPACE_DATA.objects[objectId];
    if (!data) return;

    this.tooltip.hide();
    this.playFuturisticChime('select');

    // Smoothly fly camera to object target
    const targetPos = new THREE.Vector3(data.cameraTarget.x, data.cameraTarget.y, data.cameraTarget.z);
    const lookAtPos = new THREE.Vector3(data.lookAt.x, data.lookAt.y, data.lookAt.z);
    this.cameraController.flyTo(targetPos, lookAtPos, 850);

    // Open information panel
    this.infoPanel.open(objectId);
  }

  initResize() {
    this.onResize = () => {
      if (!this.container || !this.renderer) return;
      const width = this.container.clientWidth;
      const height = this.container.clientHeight;

      this.cameraController.handleResize(width, height);
      this.renderer.setSize(width, height);
    };

    window.addEventListener('resize', this.onResize, { passive: true });

    // Pause rendering when tab is hidden to save battery
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.pause();
      } else if (this.shouldBeRunning) {
        this.start();
      }
    });
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.shouldBeRunning = true;
    this.clock.start();
    this.animate();
  }

  pause() {
    this.isRunning = false;
  }

  animate() {
    if (!this.isRunning) return;

    requestAnimationFrame(() => this.animate());

    const elapsedTime = this.clock.getElapsedTime();

    // Update dynamic animated elements
    if (this.lighting) this.lighting.update(elapsedTime);
    if (this.pc) this.pc.update(elapsedTime);
    if (this.keyboard) this.keyboard.update(elapsedTime);
    if (this.mouse) this.mouse.update(elapsedTime);
    if (this.headphones) this.headphones.update(elapsedTime);

    // Update camera & raycasting
    if (this.cameraController) this.cameraController.update();
    if (this.raycaster && !this.infoPanel?.isOpen) {
      this.raycaster.update();
    }

    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    this.pause();
    this.shouldBeRunning = false;

    if (this.onResize) {
      window.removeEventListener('resize', this.onResize);
    }
    if (this.raycaster) {
      this.raycaster.destroy();
    }
    if (this.tooltip) {
      this.tooltip.destroy();
    }
    if (this.infoPanel) {
      this.infoPanel.destroy();
    }
    if (this.renderer?.domElement?.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
  }
}
