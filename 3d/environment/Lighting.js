import * as THREE from 'three';

/**
 * Cinematic Dark Studio Lighting Setup.
 * Recreates the exact mood and lighting distribution of the reference photo:
 * - Moody deep blue ambient
 * - Screen emission from dual monitors
 * - PC RGB fan reflection on desk
 */
export class WorkspaceLighting {
  constructor(scene) {
    this.scene = scene;
    this.lights = {};
    this.createLights();
  }

  createLights() {
    // 1. Deep Indigo Ambient Light (Base low-contrast room atmosphere)
    this.lights.ambient = new THREE.AmbientLight(0x0a0c1a, 1.2);
    this.scene.add(this.lights.ambient);

    // 2. Soft Overhead Key Light (Provides subtle form definition and shadows)
    this.lights.keyLight = new THREE.DirectionalLight(0xa5b4cf, 0.9);
    this.lights.keyLight.position.set(1.5, 3.5, 2.5);
    this.lights.keyLight.castShadow = true;
    this.lights.keyLight.shadow.mapSize.width = 1024;
    this.lights.keyLight.shadow.mapSize.height = 1024;
    this.lights.keyLight.shadow.camera.near = 0.5;
    this.lights.keyLight.shadow.camera.far = 10;
    this.lights.keyLight.shadow.camera.left = -2.5;
    this.lights.keyLight.shadow.camera.right = 2.5;
    this.lights.keyLight.shadow.camera.top = 2.5;
    this.lights.keyLight.shadow.camera.bottom = -1.5;
    this.lights.keyLight.shadow.bias = -0.0005;
    this.lights.keyLight.shadow.normalBias = 0.02;
    this.scene.add(this.lights.keyLight);

    // 3. Left Monitor Screen Glow (Cyan / Sky Blue from VS Code terminal)
    this.lights.leftScreenGlow = new THREE.PointLight(0x38bdf8, 2.0, 2.2, 1.8);
    this.lights.leftScreenGlow.position.set(-0.65, 1.15, 0.25);
    this.scene.add(this.lights.leftScreenGlow);

    // 4. Center Monitor Screen Glow (Vivid Purple / Magenta from Portfolio Website)
    this.lights.centerScreenGlow = new THREE.PointLight(0xb46ef5, 2.4, 2.4, 1.6);
    this.lights.centerScreenGlow.position.set(0.05, 1.15, 0.22);
    this.scene.add(this.lights.centerScreenGlow);

    // 5. PC RGB Fans Glow on Desk Surface (Cycles dynamically)
    this.lights.pcDeskGlow = new THREE.PointLight(0x3b82f6, 2.2, 1.8, 1.6);
    this.lights.pcDeskGlow.position.set(0.72, 0.85, 0.25);
    this.scene.add(this.lights.pcDeskGlow);

    // 6. PC Chassis Internal Glow (Visible through tempered glass)
    this.lights.pcInternal = new THREE.PointLight(0xa855f7, 1.5, 1.2, 2.0);
    this.lights.pcInternal.position.set(0.85, 1.12, -0.05);
    this.scene.add(this.lights.pcInternal);

    // 7. Subtle Keyboard Backlight Glow
    this.lights.keyboardGlow = new THREE.PointLight(0x38bdf8, 0.7, 0.8, 2.0);
    this.lights.keyboardGlow.position.set(-0.05, 0.82, 0.22);
    this.scene.add(this.lights.keyboardGlow);
  }

  /**
   * Called on animation frame to animate subtle breathing/cycling of RGB lighting
   */
  update(time) {
    // Dynamic RGB cycling on the PC desk reflection
    const hue = (time * 0.08) % 1;
    const color = new THREE.Color().setHSL(hue, 0.9, 0.55);
    this.lights.pcDeskGlow.color.copy(color);

    // Subtle breathing intensity for screens
    const breath = Math.sin(time * 1.5) * 0.1;
    this.lights.centerScreenGlow.intensity = 2.4 + breath;
    this.lights.leftScreenGlow.intensity = 2.0 - breath * 0.5;
  }
}
