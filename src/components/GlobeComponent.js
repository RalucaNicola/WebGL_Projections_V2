import GLCanvas from './../scene/GLCanvas';
import Earth from './../scene/Earth';
import ProjectionCenter from './../scene/ProjectionCenter';
import React, { Component } from 'react';
const THREE = require('three');


class GlobeComponent extends Component {

  componentDidMount() {
    const glCanvas = new GLCanvas(this.root);
    const earth = new Earth(glCanvas.scene);
    const projectionCenter = new ProjectionCenter(glCanvas.scene);
    const clock  = new THREE.Clock();

    function animate () {
      const delta = clock.getDelta();
      requestAnimationFrame(animate);

      glCanvas.update(delta);
    };

    animate();
  }

  render() {
    console.log('rendering');
    return <div className='right-sider' ref={element => this.root = element}/>
  }
}

export default GlobeComponent;