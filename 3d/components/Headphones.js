import * as THREE from 'three';

/**
 * Gaming Headset on Stand inspired by the reference photo:
 * - Dedicated vertical headphone stand with round base
 * - Over-ear gaming headphones with padded cups
 * - Glowing green Razer-style circular ring on the ear cup
 */
export class WorkspaceHeadphones {
  constructor(materials) {
    this.materials = materials;
    this.group = new THREE.Group();
    this.group.name = 'headphones';

    this.interactiveMeshes = [];

    this.buildHeadphones();
  }

  buildHeadphones() {
    const hpGroup = new THREE.Group();
    // Positioned right of mouse, in front of the PC tower
    hpGroup.position.set(0.48, 0.74, 0.28);
    // Slight angle toward user
    hpGroup.rotation.y = THREE.MathUtils.degToRad(-15);

    // 1. Stand Base (Circular flat disk)
    const baseGeo = new THREE.CylinderGeometry(0.065, 0.068, 0.008, 32);
    const baseMesh = new THREE.Mesh(baseGeo, this.materials.darkMetal);
    baseMesh.position.y = 0.004;
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    hpGroup.add(baseMesh);

    // 2. Stand Vertical Rod
    const rodHeight = 0.26;
    const rodGeo = new THREE.CylinderGeometry(0.008, 0.008, rodHeight, 16);
    const rodMesh = new THREE.Mesh(rodGeo, this.materials.darkMetal);
    rodMesh.position.y = rodHeight / 2 + 0.008;
    rodMesh.castShadow = true;
    hpGroup.add(rodMesh);

    // 3. Stand Top Cradle (Curved rest)
    const cradleGeo = new THREE.TorusGeometry(0.038, 0.006, 12, 24, Math.PI);
    cradleGeo.rotateZ(Math.PI);
    const cradleMesh = new THREE.Mesh(cradleGeo, this.materials.darkPlastic);
    cradleMesh.position.y = rodHeight + 0.008;
    hpGroup.add(cradleMesh);

    // 4. Over-Ear Headset Assembly
    const headset = new THREE.Group();
    headset.position.y = rodHeight + 0.005;

    // Headband (Arch)
    const bandGeo = new THREE.TorusGeometry(0.075, 0.01, 16, 32, Math.PI);
    bandGeo.rotateZ(Math.PI);
    const bandMesh = new THREE.Mesh(bandGeo, this.materials.darkPlastic);
    bandMesh.castShadow = true;
    headset.add(bandMesh);

    // Ear Cups (Left & Right)
    const cupRadius = 0.038;
    const cupThickness = 0.024;
    const cupY = -0.072;

    // Front/Facing Ear Cup (Left relative to headphone axis)
    const cupGeo = new THREE.CylinderGeometry(cupRadius, cupRadius * 0.95, cupThickness, 24);
    cupGeo.rotateZ(Math.PI / 2);
    const cupMeshA = new THREE.Mesh(cupGeo, this.materials.darkPlastic);
    cupMeshA.position.set(-0.075, cupY, 0);
    cupMeshA.castShadow = true;
    headset.add(cupMeshA);

    // Glowing Green Circular Ring on Ear Cup (From reference photo)
    const ledRingGeo = new THREE.TorusGeometry(cupRadius * 0.55, 0.003, 12, 24);
    ledRingGeo.rotateY(Math.PI / 2);
    const ledRingMesh = new THREE.Mesh(ledRingGeo, this.materials.glowingGreen);
    ledRingMesh.position.set(-0.075 - cupThickness / 2 - 0.001, cupY, 0);
    headset.add(ledRingMesh);
    this.ledRingMesh = ledRingMesh;

    // Center Green Logo Dot
    const logoDotGeo = new THREE.CylinderGeometry(0.007, 0.007, 0.002, 16);
    logoDotGeo.rotateZ(Math.PI / 2);
    const logoDot = new THREE.Mesh(logoDotGeo, this.materials.glowingGreen);
    logoDot.position.set(-0.075 - cupThickness / 2 - 0.001, cupY, 0);
    headset.add(logoDot);

    // Cushion Pad
    const padGeo = new THREE.TorusGeometry(cupRadius * 0.88, 0.012, 16, 24);
    padGeo.rotateY(Math.PI / 2);
    const padMat = new THREE.MeshStandardMaterial({ color: 0x111317, roughness: 0.95 });
    const padA = new THREE.Mesh(padGeo, padMat);
    padA.position.set(-0.075 + cupThickness / 2, cupY, 0);
    headset.add(padA);

    // Opposite Ear Cup (Right relative to headphone axis)
    const cupMeshB = new THREE.Mesh(cupGeo, this.materials.darkPlastic);
    cupMeshB.position.set(0.075, cupY, 0);
    cupMeshB.castShadow = true;
    headset.add(cupMeshB);

    const padB = new THREE.Mesh(padGeo, padMat);
    padB.position.set(0.075 - cupThickness / 2, cupY, 0);
    headset.add(padB);

    hpGroup.add(headset);

    // 5. Clickable Interaction Zone
    const hitGeo = new THREE.BoxGeometry(0.2, rodHeight + 0.08, 0.18);
    const hitMesh = new THREE.Mesh(hitGeo, new THREE.MeshBasicMaterial({ visible: false }));
    hitMesh.name = 'hit_headphones';
    hitMesh.position.y = (rodHeight + 0.08) / 2;
    hitMesh.userData = {
      objectId: 'headphones',
      targetMesh: cupMeshA,
      title: 'Gaming Headset — Transmission & Contact Channel',
      category: 'Contact & Connect'
    };
    hpGroup.add(hitMesh);
    this.interactiveMeshes.push(hitMesh);

    this.group.add(hpGroup);
    this.hpGroup = hpGroup;
  }

  /**
   * Subtle breathing on the green LED ear cup
   */
  update(time) {
    if (this.ledRingMesh) {
      const breath = 1.5 + Math.sin(time * 2.2) * 0.4;
      this.ledRingMesh.material.emissiveIntensity = breath;
    }
  }
}
