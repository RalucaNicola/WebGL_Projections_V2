const THREE = require('three');
const countries = require('./../images/Countries.png');
const tissot = require('./../images/Tissot.png');
const graticule = require('./../images/Graticule.png');
const empty = require('./../images/Empty.png');

class Earth {
  constructor(scene) {

    this.scene = scene;

    this.countriesTexture = new THREE.TextureLoader().load(countries);
    this.tissotTexture    = new THREE.TextureLoader().load(tissot);
    this.graticuleTexture = new THREE.TextureLoader().load(graticule);
    this.emptyTexture     = new THREE.TextureLoader().load(empty);

    const uniforms = {
      tCountries: { type: 't', value: this.countriesTexture },
      tGraticule: { type: 't', value: this.graticuleTexture },
      tTissot:    { type: 't', value: this.tissotTexture }
    };

    const blendMaterial = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShaderEarth,
      fragmentShader: fragmentShaderEarth,
      side: THREE.DoubleSide,
      transparent: true
    });

    this.earthMesh =  new THREE.Mesh(
      new THREE.SphereGeometry(1.0, 128, 128),
      blendMaterial
    );

    this.scene.add(this.earthMesh);

  }

  enableCountriesTexture() {
    this.earthMesh.material.uniforms.tCountries.value = this.countriesTexture;
  }

  disableCountriesTexture() {
    this.earthMesh.material.uniforms.tCountries.value = this.emptyTexture;
  }

  enableGraticuleTexture() {
    this.earthMesh.material.uniforms.tGraticule.value = this.graticuleTexture;
  }

  disableGraticuleTexture() {
    this.earthMesh.material.uniforms.tGraticule.value = this.emptyTexture;
  }

  enableTissotTexture() {
    this.earthMesh.material.uniforms.tTissot.value = this.tissotTexture;
  }

  disableTissotTexture() {
    this.earthMesh.material.uniforms.tTissot.value = this.emptyTexture;
  }
}

export default Earth;

const vertexShaderEarth = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShaderEarth = `
  uniform sampler2D tCountries;
  uniform sampler2D tGraticule;
  uniform sampler2D tTissot;

  varying vec2 vUv;
  void main() {
    vec4 color;
    vec4 CCountries = texture2D(tCountries, vUv);
    vec4 CGraticule = texture2D(tGraticule, vUv);
    vec4 CTissot = texture2D(tTissot, vUv);

    color = CCountries;
    color = vec4(color.rgb * color.a * (1.0 - CGraticule.a) + CGraticule.a * CGraticule.rgb, 1.0);
    color = vec4(color.rgb * color.a * (1.0 - CTissot.a) + CTissot.a * CTissot.rgb, 1.0);

    gl_FragColor = vec4(color.rgb, 0.75);
  }
`;