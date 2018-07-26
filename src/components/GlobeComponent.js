import GLCanvas from './../scene/GLCanvas';
import React, { Component } from 'react';
const THREE = require('three');


class GlobeComponent extends Component {

  componentDidMount() {
    const glCanvas = new GLCanvas(this.root);
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