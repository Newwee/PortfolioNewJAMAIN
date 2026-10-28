import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/**
 * Camera Controller managing cinematic framing, OrbitControls,
 * and smooth damped camera transitions to focused workspace objects.
 */
export class CameraController {
  constructor(camera, domElement) {
    this.camera = camera;
    this.domElement = domElement;

    // Default Cinematic Perspective (Matching reference photograph)
    this.defaultState = {
      position: new THREE.Vector3(0.0, 1.16, 1.52),
      target: new THREE.Vector3(0.02, 0.98, 0.05)
    };

    // Transition State
    this.isTransitioning = false;
    this.transitionStart = 0;
    this.transitionDuration = 800; // ms
    this.startPos = new THREE.Vector3();
    this.endPos = new THREE.Vector3();
    this.startTarget = new THREE.Vector3();
    this.endTarget = new THREE.Vector3();

    this.initControls();
  }

  initControls() {
    this.controls = new OrbitControls(this.camera, this.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.06;

    // Reasonable orbital bounds to prevent breaking the desk composition
    this.controls.minDistance = 0.65;
    this.controls.maxDistance = 2.8;
    this.controls.minPolarAngle = Math.PI / 6;       // 30 deg
    this.controls.maxPolarAngle = Math.PI / 2.05;    // 87 deg (never clip below floor/desk)
    this.controls.minAzimuthAngle = -Math.PI / 3.2;  // -56 deg
    this.controls.maxAzimuthAngle = Math.PI / 3.2;   // +56 deg

    this.resetToDefault(false);
  }

  resetToDefault(animate = true) {
    if (!animate) {
      this.camera.position.copy(this.defaultState.position);
      this.controls.target.copy(this.defaultState.target);
      this.controls.update();
      this.isTransitioning = false;
      return;
    }

    this.flyTo(this.defaultState.position, this.defaultState.target, 800);
  }

  flyTo(targetPosition, lookAtTarget, duration = 800) {
    this.isTransitioning = true;
    this.transitionStart = performance.now();
    this.transitionDuration = duration;

    this.startPos.copy(this.camera.position);
    this.endPos.copy(targetPosition);

    this.startTarget.copy(this.controls.target);
    this.endTarget.copy(lookAtTarget);

    this.controls.enabled = false;
  }

  /**
   * Smooth ease-out cubic interpolation
   */
  easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
  }

  update() {
    if (this.isTransitioning) {
      const elapsed = performance.now() - this.transitionStart;
      const progress = Math.min(elapsed / this.transitionDuration, 1.0);
      const ease = this.easeOutCubic(progress);

      this.camera.position.lerpVectors(this.startPos, this.endPos, ease);
      this.controls.target.lerpVectors(this.startTarget, this.endTarget, ease);

      if (progress >= 1.0) {
        this.isTransitioning = false;
        this.controls.enabled = true;
      }
    }

    if (this.controls.enabled) {
      this.controls.update();
    }
  }

  /**
   * Adjust responsive camera FOV and position on mobile screens
   */
  handleResize(width, height) {
    const aspect = width / height;
    this.camera.aspect = aspect;

    if (aspect < 1.0) {
      // Mobile vertical portrait view: step back slightly to frame both monitors & PC
      this.defaultState.position.set(0.0, 1.25, 2.15);
      this.camera.fov = 58;
    } else if (aspect < 1.4) {
      // Tablet view
      this.defaultState.position.set(0.0, 1.18, 1.75);
      this.camera.fov = 50;
    } else {
      // Desktop widescreen view
      this.defaultState.position.set(0.0, 1.16, 1.52);
      this.camera.fov = 46;
    }

    this.camera.updateProjectionMatrix();
  }
}
