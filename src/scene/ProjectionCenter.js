const THREE = require('three');

class ProjectionCenter {
  constructor(scene) {
    this.sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 32, 32),
      new THREE.MeshBasicMaterial({color: 0xffff00})
    );

    this.earthCenter = new THREE.Object3D();
    this.lightCenter = new THREE.Object3D();

    this.earthCenter.add(this.lightCenter);
    this.lightCenter.add(this.sphere);

    scene.add(this.earthCenter);
  }

  setOrientation(lat, lon) {
    this.earthCenter.rotation.z = lat;
    this.earthCenter.rotation.y = lon;
  }

  setOffset(offset) {
    this.sphere.position.y = offset;
  }

  setLatitude(rotation) {
    this.lightCenter.rotation.z = rotation;
  }

  setLongitude(rotation) {
    this.lightCenter.rotation.y = rotation;
  }
}

export default ProjectionCenter;