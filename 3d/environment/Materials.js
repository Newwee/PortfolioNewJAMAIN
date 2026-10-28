import * as THREE from 'three';

/**
 * PBR Materials library for the 3D Developer Workspace.
 * Optimized for realistic dark-cinematic appearance with minimal performance overhead.
 */
export class WorkspaceMaterials {
  constructor() {
    this.createMaterials();
  }

  createMaterials() {
    // Desk Surface (Light off-white / light-grey modern laminate from reference photo)
    this.deskTop = new THREE.MeshStandardMaterial({
      color: 0xd8dde4,
      roughness: 0.32,
      metalness: 0.08,
      name: 'deskTop'
    });

    // Desk Legs & Support Beams (White / light grey modern steel)
    this.deskLeg = new THREE.MeshStandardMaterial({
      color: 0xcfd6df,
      roughness: 0.4,
      metalness: 0.25,
      name: 'deskLeg'
    });

    // Extra-wide Desk Mat (Matte dark obsidian neoprene)
    this.deskMat = new THREE.MeshStandardMaterial({
      color: 0x121318,
      roughness: 0.88,
      metalness: 0.02,
      name: 'deskMat'
    });

    // Dark Brushed Metal (Monitor bezels, PC frame, chassis)
    this.darkMetal = new THREE.MeshStandardMaterial({
      color: 0x111317,
      roughness: 0.35,
      metalness: 0.7,
      name: 'darkMetal'
    });

    // Deep Black Plastic (Keycaps, mouse body, headphone cups)
    this.darkPlastic = new THREE.MeshStandardMaterial({
      color: 0x181a20,
      roughness: 0.45,
      metalness: 0.15,
      name: 'darkPlastic'
    });

    // Shiny Chrome / Metallic accents (Monitor arms, screws, headphone stand rod)
    this.chrome = new THREE.MeshStandardMaterial({
      color: 0xc8d0db,
      roughness: 0.18,
      metalness: 0.9,
      name: 'chrome'
    });

    // Tempered Glass (PC Side Panel)
    this.temperedGlass = new THREE.MeshPhysicalMaterial({
      color: 0x182030,
      transparent: true,
      opacity: 0.36,
      roughness: 0.08,
      metalness: 0.85,
      transmission: 0.65,
      ior: 1.52,
      name: 'temperedGlass'
    });

    // Glowing Green Logo Accent (Razer style for mouse and headphones)
    this.glowingGreen = new THREE.MeshStandardMaterial({
      color: 0x00ff66,
      emissive: 0x00e65c,
      emissiveIntensity: 1.6,
      roughness: 0.2,
      metalness: 0.1,
      name: 'glowingGreen'
    });

    // Plant Ceramic Pot (Clean matte white)
    this.ceramicWhite = new THREE.MeshStandardMaterial({
      color: 0xf5f7fb,
      roughness: 0.25,
      metalness: 0.05,
      name: 'ceramicWhite'
    });

    // Plant Soil
    this.soil = new THREE.MeshStandardMaterial({
      color: 0x221a14,
      roughness: 0.95,
      metalness: 0.0,
      name: 'soil'
    });

    // Plant Leaves (Lush succulent foliage)
    this.plantLeaves = new THREE.MeshStandardMaterial({
      color: 0x2e8b46,
      roughness: 0.55,
      metalness: 0.05,
      name: 'plantLeaves'
    });

    // Dark Room Wall & Floor
    this.roomWall = new THREE.MeshStandardMaterial({
      color: 0x090b14,
      roughness: 0.9,
      metalness: 0.1,
      name: 'roomWall'
    });

    this.roomFloor = new THREE.MeshStandardMaterial({
      color: 0x05060a,
      roughness: 0.8,
      metalness: 0.15,
      name: 'roomFloor'
    });

    // Generic highlight material when hovering interactive objects
    this.interactiveHover = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.45,
      transparent: true,
      opacity: 0.35,
      name: 'interactiveHover'
    });
  }
}
