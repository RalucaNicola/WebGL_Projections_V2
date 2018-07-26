import React, { Component } from 'react';
import GlobeComponent from './components/GlobeComponent';
import SettingsControl from './components/SettingsControl';
import { Divider, Anchor, Button } from 'antd';

const { Link } = Anchor;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      parameters: {
        lightSource: {
          offset: 0
        }
      }
    }
  }

  onChange = (value) => {
    this.setState({
      parameters: {
        lightSource: {
          offset: value
        }
      }
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='story-bar left-sider'>
          <h1>Projection tool</h1>
          <p>
          The intention of this web application is to demonstrate the construction of map projections.
          </p>
          <Anchor affix={false}>
            <Link href="#surfaces" title="Projection surfaces" />
            <Link href="#projections" title="Common projections" />
            <Link href="#settings" title="Create my own projection" />
          </Anchor>

          <Divider orientation="left" id="surfaces">Projection surfaces</Divider>
          <p>Typically, three different projection surfaces are used: The plane, the cone and the cylinder.
            A projection based on the plane is shown by default when starting this web application.
            If the settings have been modified, you can use the following button to enable the default settings.
          </p>
          <p>
            The <span className="highlight">projection center</span> is located at the center of the earth, represented as a yellow sphere.
            The position of the projection center is an important aspect when constructing map projections.
            This can be adjusted by changing the "offset" value in the "light source" section of the controls panel.
            Observe how different positions of the projection center change the resulting projection and
            the geometry of the rays.
          </p>
          <SettingsControl
            value={this.state.parameters.lightSource.offset}
            max={2}
            min={-2}
            label={'Light source offset'}
            onChange={this.onChange}
          />

          <Divider orientation="left" id="projections">Common projections</Divider>
          <p>
          Let's have a look at some map projections.
          These projections form the class of the so-called "true perspective projections" and are the only common
          projections that can be constructed using this web application.
          Maybe the most simple map projection one can imagine is the <span className="highlight">gnomonic azimuthal</span> map projection,
          which is also the default setting in this web application. In this case, the projection surface is the plane
          touch the North Pole and the light source is located at the center of the earth. Use the following button to
          construct this map projection:
          </p>
          <div style={{textAlign: "center"}}>
            <Button type="primary">Gnomonic Azimuthal</Button>
          </div>
          <Divider orientation="left" id="settings">Create my own projection</Divider>
          <p>Now that you know the main concepts behind projection tools, feel free to
            play with the parameters and create your own projections:
          </p>
          <SettingsControl
            value={this.state.parameters.lightSource.offset}
            max={2}
            min={-2}
            label={'Light source offset'}
            onChange={this.onChange}
          />
        </div>
        <GlobeComponent parameters={this.state.parameters}/>
      </div>
    );
  }
}

export default App;
