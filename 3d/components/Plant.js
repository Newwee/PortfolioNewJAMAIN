import * as THREE from 'three';

/**
 * Potted Desk Plant & Mug Accessory inspired by the reference photo:
 * - Minimalist white ceramic cylindrical pot
 * - Organic green succulent foliage
 * - Matching white ceramic cup/diffuser accessory on coaster
 */
export class WorkspacePlant {
  constructor(materials) {
    this.materials = materials;
    this.group = new THREE.Group();
    this.group.name = 'plant';

    this.interactiveMeshes = [];

    this.buildPlant();
  }

  buildPlant() {
    const plantGroup = new THREE.Group();
    // Positioned on the left side of the desk, under the left monitor
    plantGroup.position.set(-0.72, 0.74, 0.22);

    const potRadius = 0.048;
    const potHeight = 0.082;

    // 1. White Ceramic Cylindrical Pot
    const potGeo = new THREE.CylinderGeometry(potRadius, potRadius * 0.92, potHeight, 28);
    const potMesh = new THREE.Mesh(potGeo, this.materials.ceramicWhite);
    potMesh.position.y = potHeight / 2;
    potMesh.castShadow = true;
    potMesh.receiveShadow = true;
    plantGroup.add(potMesh);

    // 2. Dark Soil Inside Pot
    const soilGeo = new THREE.CylinderGeometry(potRadius * 0.94, potRadius * 0.94, 0.005, 24);
    const soilMesh = new THREE.Mesh(soilGeo, this.materials.soil);
    soilMesh.position.y = potHeight - 0.003;
    plantGroup.add(soilMesh);

    // 3. Multi-Tier Succulent Green Foliage
    const stemGroup = new THREE.Group();
    stemGroup.position.y = potHeight;

    const leafLayers = 4;
    const leavesPerLayer = 6;
    for (let l = 0; l < leafLayers; l++) {
      const layerScale = 1 - l * 0.18;
      const layerY = l * 0.016;

      for (let i = 0; i < leavesPerLayer; i++) {
        const angle = (i / leavesPerLayer) * Math.PI * 2 + (l * 0.45);
        const leafGeo = new THREE.SphereGeometry(0.016 * layerScale, 12, 10);
        leafGeo.scale(1.8, 0.45, 0.85);

        const leafMesh = new THREE.Mesh(leafGeo, this.materials.plantLeaves);
        const dist = (0.024 - l * 0.004);
        leafMesh.position.set(
          Math.cos(angle) * dist,
          layerY + 0.012,
          Math.sin(angle) * dist
        );
        leafMesh.rotation.y = -angle;
        leafMesh.rotation.z = 0.35 + l * 0.1;
        leafMesh.castShadow = true;
        stemGroup.add(leafMesh);
      }
    }
    plantGroup.add(stemGroup);

    // 4. White Desk Cup / Accessory with Coaster (Visible right next to the plant in photo)
    const coasterGeo = new THREE.CylinderGeometry(0.042, 0.042, 0.004, 24);
    const coasterMat = new THREE.MeshStandardMaterial({ color: 0x14161f, roughness: 0.9 });
    const coasterMesh = new THREE.Mesh(coasterGeo, coasterMat);
    coasterMesh.position.set(0.09, 0.002, 0.02);
    coasterMesh.receiveShadow = true;
    plantGroup.add(coasterMesh);

    const mugGeo = new THREE.CylinderGeometry(0.03, 0.026, 0.075, 24);
    const mugMesh = new THREE.Mesh(mugGeo, this.materials.ceramicWhite);
    mugMesh.position.set(0.09, 0.039, 0.02);
    mugMesh.castShadow = true;
    plantGroup.add(mugMesh);

    // 5. Clickable Interaction Zone
    const hitGeo = new THREE.BoxGeometry(0.24, 0.18, 0.18);
    const hitMesh = new THREE.Mesh(hitGeo, new THREE.MeshBasicMaterial({ visible: false }));
    hitMesh.name = 'hit_plant';
    hitMesh.position.set(0.04, 0.09, 0.01);
    hitMesh.userData = {
      objectId: 'plant',
      targetMesh: potMesh,
      title: 'Desk Plant — Personal Philosophy & Mindset',
      category: 'Vision & Creed'
    };
    plantGroup.add(hitMesh);
    this.interactiveMeshes.push(hitMesh);

    this.group.add(plantGroup);
    this.plantGroup = plantGroup;
  }
}
