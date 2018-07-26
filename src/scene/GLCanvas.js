const THREE = require('three');
const TrackballControls = require('three-trackballcontrols');
const boundaries = require('./../images/boundaries.png');

class GLCanvas {
  constructor(canvas) {
    this.glContainer = canvas;
    this.width = this.glContainer.clientWidth;
    this.height = this.glContainer.clientHeight;

    this.scene  = new THREE.Scene();
    this.scene.background = new THREE.Color("#FFFAE2");
    this.camera = new THREE.PerspectiveCamera( 75, this.width/this.height, 0.1, 1000 );

    this.camera.position.y = 5;
    this.camera.position.z = 5;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.width, this.height);

    this.glContainer.append(this.renderer.domElement);
    this.gl = this.renderer.getContext();

    this.trackballControls = new TrackballControls(this.camera, this.renderer.domElement);
    this.light = new THREE.DirectionalLight( 0xeeeeee );
    this.light.position.set( 1, 1, 1 ).normalize();
    this.scene.add(this.light);
    this.scene.add(new THREE.AmbientLight(0x111111));
    this.trackballControls.addEventListener('change', () => {
      const p = this.camera.position;
      this.light.position.set(p.x, p.y + 1,p.z);
    });

    this.earthMesh =  new THREE.Mesh(
      new THREE.SphereGeometry(1.0, 128, 128),
      new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load(boundaries),
        transparent: true,
        opacity: 0.5,
        side: THREE.DoubleSide,
      })
    );

    this.scene.add(this.earthMesh);

    const axisHelper = new THREE.AxesHelper( 2 );
    this.scene.add( axisHelper );
  }

  update(delta) {
    this.renderer.render(this.scene, this.camera);
    this.trackballControls.update(delta);
  }
}

export default GLCanvas;



