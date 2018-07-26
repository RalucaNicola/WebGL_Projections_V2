import React, { Component } from 'react';
import GlobeComponent from './components/GlobeComponent';
import { Slider } from 'antd';

class App extends Component {

  render() {
    return (
      <div className='container'>
        <div className='story-bar left-sider'>
          <h1>My projection</h1>
          <p>
          The intention of this web application is to demonstrate the construction of map projections. On the left side of the application, you find the controls panel to adjust the parameters of the different objects present in the 3D-scene in the center of this application. To navigate within the 3D-scene, use the left mouse button to rotate, the right mouse button to pan and the middle mouse button to zoom.
          If you want to restore the default settings, use the reset-button in the control panel.
          </p>
          <Slider defaultValue={30}/>
        </div>
        <GlobeComponent/>
      </div>
    );
  }
}

export default App;
