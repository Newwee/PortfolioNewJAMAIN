import * as THREE from 'three';

/**
 * Ergonomic Gaming Mouse inspired by the reference photo:
 * - Sleek contoured black body
 * - Glowing toxic-green Razer-style emblem on palm rest
 * - Illuminated scroll wheel accent
 */
export class WorkspaceMouse {
  constructor(materials) {
    this.materials = materials;
    this.group = new THREE.Group();
    this.group.name = 'mouse';

    this.interactiveMeshes = [];

    this.buildMouse();
  }

  buildMouse() {
    const mouseGroup = new THREE.Group();
    // Positioned to the right of the keyboard on the desk mat
    mouseGroup.position.set(0.26, 0.748, 0.36);
    // Slight natural inward angle
    mouseGroup.rotation.y = THREE.MathUtils.degToRad(-6);

    const length = 0.124;
    const width = 0.064;
    const height = 0.036;

    // 1. Contoured Main Palm Body (Smoothed capsule/ellipsoid)
    const bodyGeo = new THREE.SphereGeometry(width / 2, 24, 18);
    bodyGeo.scale(1.0, height / (width / 2), length / (width / 2));
    const bodyMesh = new THREE.Mesh(bodyGeo, this.materials.darkPlastic);
    bodyMesh.position.y = height * 0.45;
    bodyMesh.castShadow = true;
    mouseGroup.add(bodyMesh);

    // 2. Base Plate (Flat bottom slider)
    const baseGeo = new THREE.CylinderGeometry(width * 0.46, width * 0.48, 0.006, 24);
    baseGeo.scale(1, 1, 1.8);
    const baseMesh = new THREE.Mesh(baseGeo, this.materials.darkMetal);
    baseMesh.position.y = 0.003;
    mouseGroup.add(baseMesh);

    // 3. Glowing Razer-style Emblem on Palm Rest (Green LED)
    const logoGeo = new THREE.CylinderGeometry(0.012, 0.012, 0.002, 16);
    logoGeo.rotateX(THREE.MathUtils.degToRad(35));
    const logoMesh = new THREE.Mesh(logoGeo, this.materials.glowingGreen);
    logoMesh.position.set(0, height * 0.72, 0.018);
    mouseGroup.add(logoMesh);
    this.logoMesh = logoMesh;

    // 4. Illuminated Scroll Wheel
    const wheelGeo = new THREE.CylinderGeometry(0.009, 0.009, 0.005, 16);
    wheelGeo.rotateZ(Math.PI / 2);
    const wheelMesh = new THREE.Mesh(wheelGeo, this.materials.glowingGreen);
    wheelMesh.position.set(0, height * 0.78, -length * 0.28);
    mouseGroup.add(wheelMesh);

    // 5. Clickable Interaction Zone (Enlarged for touch & cursor ease)
    const hitGeo = new THREE.BoxGeometry(width + 0.08, height + 0.06, length + 0.06);
    const hitMesh = new THREE.Mesh(hitGeo, new THREE.MeshBasicMaterial({ visible: false }));
    hitMesh.name = 'hit_mouse';
    hitMesh.userData = {
      objectId: 'mouse',
      targetMesh: bodyMesh,
      title: 'Gaming Mouse — Life Story & Milestones',
      category: 'Experience & Journey'
    };
    mouseGroup.add(hitMesh);
    this.interactiveMeshes.push(hitMesh);

    this.group.add(mouseGroup);
    this.mouseGroup = mouseGroup;
  }

  /**
   * Subtle breathing on the green logo
   */
  update(time) {
    if (this.logoMesh) {
      const breath = 1.4 + Math.sin(time * 2.5) * 0.35;
      this.logoMesh.material.emissiveIntensity = breath;
    }
  }
}
