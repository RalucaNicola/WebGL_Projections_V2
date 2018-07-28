import GLCanvas from './../scene/GLCanvas';
import Earth from './../scene/Earth';
import ProjectionCenter from './../scene/ProjectionCenter';
import Surface from './../scene/Surface';
import React, { Component } from 'react';
const THREE = require('three');


class GlobeComponent extends Component {

  componentDidMount() {
    const glCanvas = new GLCanvas(this.root);
    this.earth = new Earth(glCanvas.scene);
    this.surface = new Surface(glCanvas.scene, this.earth);
    this.projectionCenter = new ProjectionCenter(glCanvas.scene);
    const clock  = new THREE.Clock();

    function animate () {
      const delta = clock.getDelta();
      requestAnimationFrame(animate);
      glCanvas.update(delta);
    }

    animate();
  }

  componentDidUpdate(prevProps) {
    const previous = prevProps.params;
    const current = this.props.params;

    if (previous.lightSource.offset !== current.lightSource.offset) {
      this.projectionCenter.setOffset(current.lightSource.offset);
    }
    if (previous.graticule !== current.graticule) {
      this.setTexture('graticule', current.graticule);
    }
    if (previous.countries !== current.countries) {
      this.setTexture('countries', current.countries);
    }
    if (previous.tissot !== current.tissot) {
      this.setTexture('tissot', current.tissot);
    }

  }

  setTexture(type, on) {
    switch (type) {
      case 'graticule':
        if (on) {
          this.earth.enableGraticuleTexture();
          this.surface.enableGraticuleTexture();
        }
        else {
          this.earth.disableGraticuleTexture();
          this.surface.disableGraticuleTexture();
        }
      break;
      case 'tissot':
        if (on) {
          this.earth.enableTissotTexture();
          this.surface.enableTissotTexture();
        }
        else {
          this.earth.disableTissotTexture();
          this.surface.disableTissotTexture();
        }
      break;
      case 'countries':
        if (on) {
          this.earth.enableCountriesTexture();
          this.surface.enableCountriesTexture();
        }
        else {
          this.earth.disableCountriesTexture();
          this.surface.disableCountriesTexture();
        }
      break;
    }
  }

  render() {
    return <div className='right-sider' ref={element => this.root = element}/>;
  }
}

export default GlobeComponent;