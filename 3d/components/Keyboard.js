import * as THREE from 'three';

/**
 * Mechanical Gaming Keyboard with per-key RGB backlighting gradient
 * inspired by the reference photo:
 * - Floating keycap architecture
 * - Beveled aluminum dark chassis with slight ergonomic tilt
 * - Rainbow RGB illumination (Cyan -> Purple -> Pink)
 */
export class WorkspaceKeyboard {
  constructor(materials) {
    this.materials = materials;
    this.group = new THREE.Group();
    this.group.name = 'keyboard';

    this.keyMaterials = [];
    this.interactiveMeshes = [];

    this.buildKeyboard();
  }

  buildKeyboard() {
    const kbGroup = new THREE.Group();
    // Positioned centered on desk mat in front of the center monitor
    kbGroup.position.set(-0.06, 0.752, 0.35);
    // Slight ergonomic typing tilt
    kbGroup.rotation.x = THREE.MathUtils.degToRad(3.5);

    const width = 0.36;
    const depth = 0.138;
    const height = 0.018;

    // 1. Solid Aluminum Chassis Base
    const baseGeo = new THREE.BoxGeometry(width, height, depth);
    const baseMesh = new THREE.Mesh(baseGeo, this.materials.darkMetal);
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    kbGroup.add(baseMesh);

    // 2. Keyboard Plate (Recessed dark surface under keys)
    const plateGeo = new THREE.PlaneGeometry(width - 0.012, depth - 0.012);
    plateGeo.rotateX(-Math.PI / 2);
    const plateMat = new THREE.MeshStandardMaterial({
      color: 0x090a0f,
      roughness: 0.85
    });
    const plateMesh = new THREE.Mesh(plateGeo, plateMat);
    plateMesh.position.y = height / 2 + 0.001;
    kbGroup.add(plateMesh);

    // 3. Keycaps Matrix with RGB Glow
    this.createKeycaps(kbGroup, width, depth, height);

    // 4. Clickable Interaction Zone
    const hitGeo = new THREE.BoxGeometry(width + 0.06, height + 0.06, depth + 0.06);
    const hitMesh = new THREE.Mesh(hitGeo, new THREE.MeshBasicMaterial({ visible: false }));
    hitMesh.name = 'hit_keyboard';
    hitMesh.userData = {
      objectId: 'keyboard',
      targetMesh: baseMesh,
      title: 'Mechanical Keyboard — Skills & Proficiencies',
      category: 'Skill Stack'
    };
    kbGroup.add(hitMesh);
    this.interactiveMeshes.push(hitMesh);

    this.group.add(kbGroup);
    this.kbGroup = kbGroup;
  }

  createKeycaps(parent, kbWidth, kbDepth, kbHeight) {
    const rows = 5;
    const cols = 15;
    const keyW = (kbWidth - 0.035) / cols;
    const keyD = (kbDepth - 0.03) / rows;
    const keyH = 0.009;

    const keyGeo = new THREE.BoxGeometry(keyW * 0.88, keyH, keyD * 0.88);

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Compute gradient across keyboard (Cyan on left -> Purple center -> Pink right)
        const t = c / (cols - 1);
        const hue = 0.52 + t * 0.38; // 0.52 (cyan) to 0.90 (magenta/pink)

        const keyMat = new THREE.MeshStandardMaterial({
          color: 0x181a22,
          emissive: new THREE.Color().setHSL(hue, 0.95, 0.45),
          emissiveIntensity: 0.85,
          roughness: 0.45,
          metalness: 0.1
        });
        this.keyMaterials.push({ mat: keyMat, baseHue: hue, col: c });

        const keyMesh = new THREE.Mesh(keyGeo, keyMat);
        const posX = -kbWidth / 2 + 0.02 + c * keyW + keyW / 2;
        const posZ = -kbDepth / 2 + 0.018 + r * keyD + keyD / 2;
        keyMesh.position.set(posX, kbHeight / 2 + keyH / 2, posZ);
        keyMesh.castShadow = true;
        parent.add(keyMesh);
      }
    }
  }

  /**
   * Called every frame for animated RGB rainbow wave effect across keys
   */
  update(time) {
    this.keyMaterials.forEach((item) => {
      const animatedHue = (item.baseHue + time * 0.06) % 1;
      item.mat.emissive.setHSL(animatedHue, 0.95, 0.45);
    });
  }
}
