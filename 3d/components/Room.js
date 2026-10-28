import * as THREE from 'three';

/**
 * Dark Studio Room Backdrop:
 * - Matte dark back wall for realistic screen light bouncing and cinematic mood
 * - Ground plane with subtle reflection
 */
export class WorkspaceRoom {
  constructor(materials) {
    this.materials = materials;
    this.group = new THREE.Group();
    this.group.name = 'roomGroup';

    this.buildRoom();
  }

  buildRoom() {
    // 1. Back Wall behind the desk
    const wallGeo = new THREE.PlaneGeometry(8, 5);
    const wallMesh = new THREE.Mesh(wallGeo, this.materials.roomWall);
    wallMesh.position.set(0, 1.8, -0.6);
    wallMesh.receiveShadow = true;
    this.group.add(wallMesh);

    // 2. Floor Plane
    const floorGeo = new THREE.PlaneGeometry(8, 8);
    floorGeo.rotateX(-Math.PI / 2);
    const floorMesh = new THREE.Mesh(floorGeo, this.materials.roomFloor);
    floorMesh.position.set(0, 0, 1.5);
    floorMesh.receiveShadow = true;
    this.group.add(floorMesh);

    // 3. Subtle Baseboard Trim along the wall
    const trimGeo = new THREE.BoxGeometry(8, 0.12, 0.02);
    const trimMesh = new THREE.Mesh(trimGeo, this.materials.darkMetal);
    trimMesh.position.set(0, 0.06, -0.59);
    this.group.add(trimMesh);
  }
}
