import * as THREE from 'three';

/**
 * Desktop Gaming PC Tower inspired by the reference image:
 * - Full ATX chassis with beveled front
 * - Tempered glass side panel revealing illuminated internal components
 * - 3 Front intake RGB ring fans + 1 rear exhaust RGB fan
 * - Rotating animated fan blades and cycling RGB spectrum
 * - Internal GPU, RAM sticks, and liquid cooler block
 */
export class WorkspacePC {
  constructor(materials) {
    this.materials = materials;
    this.group = new THREE.Group();
    this.group.name = 'pcTower';

    this.fans = [];
    this.interactiveMeshes = [];

    this.buildPC();
  }

  buildPC() {
    const pcGroup = new THREE.Group();
    // Positioned on the right side of the desk
    pcGroup.position.set(0.88, 0.98, 0.05);

    const width = 0.22;
    const height = 0.48;
    const depth = 0.46;

    // 1. Main Black Metal Chassis Frame
    const frameGeo = new THREE.BoxGeometry(width, height, depth);
    const frameMesh = new THREE.Mesh(frameGeo, this.materials.darkMetal);
    frameMesh.castShadow = true;
    frameMesh.receiveShadow = true;
    pcGroup.add(frameMesh);

    // 2. Interior Cavity (Darker black interior)
    const cavityGeo = new THREE.BoxGeometry(width - 0.02, height - 0.04, depth - 0.04);
    const cavityMat = new THREE.MeshStandardMaterial({
      color: 0x07080c,
      roughness: 0.9,
      metalness: 0.1
    });
    const cavityMesh = new THREE.Mesh(cavityGeo, cavityMat);
    pcGroup.add(cavityMesh);

    // 3. Tempered Glass Left Side Panel (Facing left toward desk center)
    const glassGeo = new THREE.PlaneGeometry(depth - 0.02, height - 0.02);
    glassGeo.rotateY(Math.PI / 2);
    const glassMesh = new THREE.Mesh(glassGeo, this.materials.temperedGlass);
    glassMesh.position.set(-width / 2 - 0.002, 0, 0);
    pcGroup.add(glassMesh);

    // 4. Internal Components (GPU, Motherboard, Cooler, RAM)
    this.createInternalComponents(pcGroup, width, height, depth);

    // 5. 3 Front Intake RGB Fans (Stacked vertically)
    const fanRadius = 0.06;
    const fanZ = depth / 2 + 0.002;
    const fanYPositions = [0.13, 0.0, -0.13];

    fanYPositions.forEach((yPos, index) => {
      const fanObj = this.createRGBFan(fanRadius, index);
      fanObj.group.position.set(0, yPos, fanZ);
      pcGroup.add(fanObj.group);
      this.fans.push(fanObj);
    });

    // 6. 1 Rear Exhaust RGB Fan (Inside back panel)
    const rearFan = this.createRGBFan(0.055, 3);
    rearFan.group.position.set(0, 0.11, -depth / 2 + 0.04);
    rearFan.group.rotation.y = Math.PI;
    pcGroup.add(rearFan.group);
    this.fans.push(rearFan);

    // 7. Clickable Interaction Zone (Slightly enlarged for effortless tapping)
    const hitGeo = new THREE.BoxGeometry(width + 0.12, height + 0.08, depth + 0.1);
    const hitMesh = new THREE.Mesh(hitGeo, new THREE.MeshBasicMaterial({ visible: false }));
    hitMesh.name = 'hit_pc';
    hitMesh.userData = {
      objectId: 'pc',
      targetMesh: frameMesh,
      title: 'PC Workstation Rig — Tech Stack & Hardware',
      category: 'Engineering Arsenal'
    };
    pcGroup.add(hitMesh);
    this.interactiveMeshes.push(hitMesh);

    this.group.add(pcGroup);
    this.pcGroup = pcGroup;
  }

  createInternalComponents(parent, w, h, d) {
    const interior = new THREE.Group();

    // Motherboard Backplate
    const moboGeo = new THREE.BoxGeometry(0.008, h * 0.72, d * 0.65);
    const moboMat = new THREE.MeshStandardMaterial({ color: 0x14161f, roughness: 0.8, metalness: 0.3 });
    const mobo = new THREE.Mesh(moboGeo, moboMat);
    mobo.position.set(w / 2 - 0.02, 0.02, -0.02);
    interior.add(mobo);

    // CPU Liquid Cooler Block (Glowing RGB circular ring)
    const coolerGeo = new THREE.CylinderGeometry(0.032, 0.032, 0.015, 24);
    coolerGeo.rotateZ(Math.PI / 2);
    const coolerMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 1.4,
      roughness: 0.2
    });
    const cooler = new THREE.Mesh(coolerGeo, coolerMat);
    cooler.position.set(w / 2 - 0.035, 0.08, -0.04);
    interior.add(cooler);
    this.coolerMesh = cooler;

    // RAM Sticks with RGB tops
    for (let i = 0; i < 2; i++) {
      const ramGeo = new THREE.BoxGeometry(0.006, 0.045, 0.022);
      const ramMat = new THREE.MeshStandardMaterial({
        color: 0xf472b6,
        emissive: 0xec4899,
        emissiveIntensity: 1.2
      });
      const ram = new THREE.Mesh(ramGeo, ramMat);
      ram.position.set(w / 2 - 0.038, 0.08, 0.015 + i * 0.015);
      interior.add(ram);
    }

    // High-End Dedicated GPU with illuminated accent bar
    const gpuGeo = new THREE.BoxGeometry(0.055, 0.038, d * 0.55);
    const gpuMat = new THREE.MeshStandardMaterial({ color: 0x1e222d, roughness: 0.4, metalness: 0.8 });
    const gpu = new THREE.Mesh(gpuGeo, gpuMat);
    gpu.position.set(0.02, -0.06, -0.02);
    interior.add(gpu);

    // GPU Glowing Accent Line
    const gpuGlowGeo = new THREE.BoxGeometry(0.004, 0.006, d * 0.52);
    const gpuGlowMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x38bdf8,
      emissiveIntensity: 2.0
    });
    const gpuGlow = new THREE.Mesh(gpuGlowGeo, gpuGlowMat);
    gpuGlow.position.set(-0.028, -0.06, -0.02);
    interior.add(gpuGlow);

    parent.add(interior);
  }

  createRGBFan(radius, fanIndex) {
    const fanGroup = new THREE.Group();

    // 1. Outer Glowing RGB Ring
    const ringGeo = new THREE.TorusGeometry(radius, 0.006, 16, 48);
    // Unique phase offset per fan so they create a flowing rainbow column
    const initialHue = (fanIndex * 0.28) % 1;
    const ringMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color().setHSL(initialHue, 1, 0.55),
      emissive: new THREE.Color().setHSL(initialHue, 1, 0.5),
      emissiveIntensity: 2.2,
      roughness: 0.1
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    fanGroup.add(ringMesh);

    // 2. Center Hub
    const hubGeo = new THREE.CylinderGeometry(0.018, 0.018, 0.008, 20);
    hubGeo.rotateX(Math.PI / 2);
    const hubMesh = new THREE.Mesh(hubGeo, this.materials.darkPlastic);
    fanGroup.add(hubMesh);

    // 3. Rotating Fan Blades
    const bladesGroup = new THREE.Group();
    const bladeCount = 7;
    const bladeGeo = new THREE.BoxGeometry(0.008, radius * 0.82, 0.002);
    bladeGeo.rotateZ(0.2);

    for (let b = 0; b < bladeCount; b++) {
      const angle = (b / bladeCount) * Math.PI * 2;
      const bladeMat = new THREE.MeshStandardMaterial({
        color: 0x1a1d26,
        transparent: true,
        opacity: 0.85,
        roughness: 0.4
      });
      const blade = new THREE.Mesh(bladeGeo, bladeMat);
      blade.position.set(
        Math.sin(angle) * (radius * 0.45),
        Math.cos(angle) * (radius * 0.45),
        0
      );
      blade.rotation.z = -angle;
      bladesGroup.add(blade);
    }
    fanGroup.add(bladesGroup);

    return {
      group: fanGroup,
      blades: bladesGroup,
      ringMesh: ringMesh,
      ringMat: ringMat,
      phaseOffset: fanIndex * 0.28
    };
  }

  /**
   * Called every frame to rotate blades and animate RGB color cycling
   */
  update(time) {
    const rotationSpeed = 8.5; // Smooth spinning fan speed
    this.fans.forEach((fan) => {
      // Spin blades
      fan.blades.rotation.z += rotationSpeed * 0.016;

      // Cycle RGB Ring Color
      const hue = (time * 0.12 + fan.phaseOffset) % 1;
      fan.ringMat.color.setHSL(hue, 1, 0.55);
      fan.ringMat.emissive.setHSL(hue, 1, 0.5);
    });

    // Subtle cooler breathing
    if (this.coolerMesh) {
      const coolerHue = (time * 0.08) % 1;
      this.coolerMesh.material.color.setHSL(coolerHue, 0.9, 0.5);
      this.coolerMesh.material.emissive.setHSL(coolerHue, 0.9, 0.4);
    }
  }
}
