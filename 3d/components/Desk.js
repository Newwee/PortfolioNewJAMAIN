import * as THREE from 'three';

/**
 * Developer Desk, Legs, Desk Mat & Accessories inspired by reference photo:
 * - Wide off-white / light-grey modern desk surface
 * - Sturdy white metal frame & support legs
 * - Large dark obsidian gaming desk mat with stitched edges
 * - Smartphone / flat accessory on the left
 */
export class WorkspaceDesk {
  constructor(materials) {
    this.materials = materials;
    this.group = new THREE.Group();
    this.group.name = 'deskGroup';

    this.interactiveMeshes = [];

    this.buildDesk();
  }

  buildDesk() {
    const tableWidth = 2.05;
    const tableDepth = 0.92;
    const tableThickness = 0.038;
    const tableHeight = 0.74; // Height from ground to top of desk

    // 1. Tabletop (Light grey/white laminate surface from photo)
    const topGeo = new THREE.BoxGeometry(tableWidth, tableThickness, tableDepth);
    const topMesh = new THREE.Mesh(topGeo, this.materials.deskTop);
    topMesh.position.set(0, tableHeight - tableThickness / 2, 0);
    topMesh.castShadow = true;
    topMesh.receiveShadow = true;
    this.group.add(topMesh);

    // 2. Desk Legs (4 sturdy modern rectangular steel legs + rear beam)
    const legWidth = 0.05;
    const legDepth = 0.05;
    const legHeight = tableHeight - tableThickness;

    const legGeo = new THREE.BoxGeometry(legWidth, legHeight, legDepth);

    const legX = tableWidth / 2 - 0.12;
    const legZ = tableDepth / 2 - 0.1;

    const legPositions = [
      [-legX, legHeight / 2, -legZ],
      [legX, legHeight / 2, -legZ],
      [-legX, legHeight / 2, legZ],
      [legX, legHeight / 2, legZ]
    ];

    legPositions.forEach(([x, y, z]) => {
      const legMesh = new THREE.Mesh(legGeo, this.materials.deskLeg);
      legMesh.position.set(x, y, z);
      legMesh.castShadow = true;
      legMesh.receiveShadow = true;
      this.group.add(legMesh);
    });

    // Support Crossbar under desk
    const crossGeo = new THREE.BoxGeometry(tableWidth - 0.24, 0.03, 0.03);
    const crossMesh = new THREE.Mesh(crossGeo, this.materials.deskLeg);
    crossMesh.position.set(0, tableHeight - tableThickness - 0.08, -legZ);
    this.group.add(crossMesh);

    // 3. Extra-Wide Obsidian Gaming Desk Mat
    const matWidth = 0.94;
    const matDepth = 0.44;
    const matThickness = 0.003;

    const matGeo = new THREE.BoxGeometry(matWidth, matThickness, matDepth);
    const matMesh = new THREE.Mesh(matGeo, this.materials.deskMat);
    // Centered under keyboard & mouse in front of center monitor
    matMesh.position.set(0.08, tableHeight + matThickness / 2, 0.35);
    matMesh.receiveShadow = true;
    this.group.add(matMesh);

    // 4. Flat Smartphone / Digital Slate on Left (From reference photo)
    const phoneW = 0.078;
    const phoneL = 0.158;
    const phoneH = 0.008;

    const phoneGeo = new THREE.BoxGeometry(phoneW, phoneH, phoneL);
    const phoneMesh = new THREE.Mesh(phoneGeo, this.materials.darkMetal);
    phoneMesh.position.set(-0.48, tableHeight + phoneH / 2, 0.35);
    phoneMesh.rotation.y = THREE.MathUtils.degToRad(-4);
    phoneMesh.castShadow = true;
    phoneMesh.receiveShadow = true;
    this.group.add(phoneMesh);

    // Phone Screen Glass
    const phoneScreenGeo = new THREE.PlaneGeometry(phoneW - 0.004, phoneL - 0.006);
    phoneScreenGeo.rotateX(-Math.PI / 2);
    const phoneScreenMat = new THREE.MeshStandardMaterial({
      color: 0x050811,
      roughness: 0.15,
      metalness: 0.95
    });
    const phoneScreen = new THREE.Mesh(phoneScreenGeo, phoneScreenMat);
    phoneScreen.position.set(-0.48, tableHeight + phoneH + 0.0005, 0.35);
    this.group.add(phoneScreen);

    // 5. Desk Mat Clickable Interaction Zone (Access to 3D Dossiers)
    const hitGeo = new THREE.BoxGeometry(matWidth * 0.45, 0.05, matDepth * 0.4);
    const hitMesh = new THREE.Mesh(hitGeo, new THREE.MeshBasicMaterial({ visible: false }));
    hitMesh.name = 'hit_deskMat';
    hitMesh.position.set(-0.25, tableHeight + 0.02, 0.35);
    hitMesh.userData = {
      objectId: 'deskMat',
      targetMesh: matMesh,
      title: 'Workspace Desk — 3D Interactive Dossiers',
      category: 'Dossiers & Blueprints'
    };
    this.group.add(hitMesh);
    this.interactiveMeshes.push(hitMesh);
  }
}
