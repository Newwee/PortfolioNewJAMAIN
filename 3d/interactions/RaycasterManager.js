import * as THREE from 'three';

/**
 * Manages 3D mouse and touch raycasting, hover highlights,
 * pointer state changes, and click/tap selection with drag-filtering.
 */
export class RaycasterManager {
  constructor(camera, domElement, interactiveMeshes) {
    this.camera = camera;
    this.domElement = domElement;
    this.interactiveMeshes = interactiveMeshes;

    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2(-999, -999);

    this.hoveredObject = null;
    this.hoverCallbacks = [];
    this.selectCallbacks = [];

    // Drag-detection to distinguish between camera orbit and intentional click
    this.pointerDownPos = new THREE.Vector2();
    this.isPointerDown = false;
    this.dragThreshold = 6; // pixels

    this.initEvents();
  }

  initEvents() {
    this.onPointerMove = (e) => this.handlePointerMove(e);
    this.onPointerDown = (e) => this.handlePointerDown(e);
    this.onPointerUp = (e) => this.handlePointerUp(e);

    this.domElement.addEventListener('pointermove', this.onPointerMove, { passive: true });
    this.domElement.addEventListener('pointerdown', this.onPointerDown, { passive: true });
    this.domElement.addEventListener('pointerup', this.onPointerUp, { passive: true });
  }

  handlePointerMove(event) {
    const rect = this.domElement.getBoundingClientRect();
    this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    this.clientPos = { x: event.clientX, y: event.clientY };
  }

  handlePointerDown(event) {
    this.isPointerDown = true;
    this.pointerDownPos.set(event.clientX, event.clientY);
  }

  handlePointerUp(event) {
    if (!this.isPointerDown) return;
    this.isPointerDown = false;

    const dist = Math.hypot(
      event.clientX - this.pointerDownPos.x,
      event.clientY - this.pointerDownPos.y
    );

    // If movement exceeded threshold, user was dragging/orbiting the camera
    if (dist > this.dragThreshold) return;

    // Trigger selection if hovering an interactive target
    if (this.hoveredObject && this.hoveredObject.userData?.objectId) {
      this.triggerSelect(this.hoveredObject.userData.objectId, event);
    }
  }

  update() {
    if (this.pointer.x === -999) return;

    this.raycaster.setFromCamera(this.pointer, this.camera);
    const intersects = this.raycaster.intersectObjects(this.interactiveMeshes, false);

    let newHovered = null;
    if (intersects.length > 0) {
      newHovered = intersects[0].object;
    }

    if (newHovered !== this.hoveredObject) {
      // Hover exit
      if (this.hoveredObject) {
        this.domElement.style.cursor = 'default';
        this.triggerHover(null, null);
      }

      // Hover enter
      this.hoveredObject = newHovered;
      if (this.hoveredObject) {
        this.domElement.style.cursor = 'pointer';
        this.triggerHover(this.hoveredObject.userData, this.clientPos);
      }
    } else if (this.hoveredObject) {
      // Still hovering, update screen coordinates for floating tooltip
      this.triggerHoverMove(this.hoveredObject.userData, this.clientPos);
    }
  }

  onHover(callback) {
    this.hoverCallbacks.push(callback);
  }

  onSelect(callback) {
    this.selectCallbacks.push(callback);
  }

  triggerHover(data, clientPos) {
    this.hoverCallbacks.forEach(cb => cb({ type: 'hover', data, clientPos }));
  }

  triggerHoverMove(data, clientPos) {
    this.hoverCallbacks.forEach(cb => cb({ type: 'move', data, clientPos }));
  }

  triggerSelect(objectId, event) {
    this.selectCallbacks.forEach(cb => cb(objectId, event));
  }

  destroy() {
    this.domElement.removeEventListener('pointermove', this.onPointerMove);
    this.domElement.removeEventListener('pointerdown', this.onPointerDown);
    this.domElement.removeEventListener('pointerup', this.onPointerUp);
  }
}
