import React, { Component } from 'react';
import GlobeComponent from './components/GlobeComponent';
import SettingsControl from './components/SettingsControl';
import AreaHighlight from './components/AreaHighlight';
import { Divider, Anchor, Button, Switch, List, Avatar } from 'antd';
const { Link } = Anchor;

const globeAvatar = require('./images/globe.png');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lightSource: {
        offset: 0,
        latitude: 0,
        longitude: 0
      },
      geometry: {
        axis: 4,
        upperRadius: 0.01,
        lowerRadius: 4,
        offset: 1
      },
      graticule: true,
      tissot: true,
      countries: true
    }
  }

  render() {
    const data = [{
      title: "A representation of the Earth",
      description: "A simplified representation of the Earth, typically in the shape of a sphere or a spheroid."
    }, {
      title: "A projection center",
      description: "The projection center is typically represented as a point."
    }, {
      title: "A projection surface",
      description: "The projection surface has the shape of a plane, cylinder or cone."
    }]
    return (
      <div className='container'>
        <div className='story-bar left-sider'>
          <h1>Projection tool</h1>
          <p>
          This web application shows how map projections are constructed and what are the main projections.
          The tutorial below is an introduction to map projections. If you're already an expert, feel free to
          jump straight to the last part of the tutorial, where you can adjust the projection parameters and
          create your own projection.
          </p>
          <Anchor affix={false}>
            <Link href="#intro" title="Introduction" />
            <Link href="#surfaces" title="Projection surfaces" />
            <Link href="#projections" title="Common projections" />
            <Link href="#settings" title="Create my own projection" />
          </Anchor>

          <Divider orientation="left" id="intro">Introduction</Divider>
          <p>
            A common approach to construct map projections makes use of three geometric objects:
          </p>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={`${globeAvatar}`} />}
                  title={item.title}
                  description={item.description}
                />
              </List.Item>
            )}
          />
          <p>
            In the simplest case, the <span className="highlight">projection surface</span> is directly represented as a flat plane.
          </p>
          <p>
            The <span className="highlight">projection center</span> is located at the center of the earth, represented as a yellow sphere.
            The position of the projection center is an important aspect when constructing map projections.
            This can be adjusted by changing the "offset" value in the "light source" section of the controls panel.
            Observe how different positions of the projection center change the resulting projection and
            the geometry of the rays.
          </p>
          <SettingsControl
            value={this.state.lightSource.offset}
            max={2}
            min={-2}
            label={'Light source offset'}
            markStep={1}
            onChange={(value) => {
              this.setState({
                ...this.state,
                lightSource: {
                  ...this.state.lightSource,
                  offset: value
                }
              });
            }}
          />
          <Divider orientation="left" id="surfaces">Projection surfaces</Divider>
          <p>Typically, three different projection surfaces are used: The plane, the cone and the cylinder.
            A projection based on the plane is shown by default when starting this web application.
            If the settings have been modified, you can use the following button to enable the default settings.
          </p>

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
          <AreaHighlight title="Projection surface geometry parameters">
          <SettingsControl
            value={this.state.geometry.axis}
            min={0}
            max={4}
            markStep={1}
            label={'Axis length'}
            onChange={(value) => {
              this.setState({
                ...this.state,
                geometry: {
                  ...this.state.geometry,
                  axis: value
                }
              });
            }}
          />
          <SettingsControl
            value={this.state.geometry.upperRadius}
            min={0.01}
            max={4}
            markStep={1}
            label={'Upper radius'}
            onChange={(value) => {
              this.setState({
                ...this.state,
                geometry: {
                  ...this.state.geometry,
                  upperRadius: value
                }
              });
            }}
          />
          <SettingsControl
            value={this.state.geometry.lowerRadius}
            min={0.01}
            max={4}
            markStep={1}
            label={'Lower radius'}
            onChange={(value) => {
              this.setState({
                ...this.state,
                geometry: {
                  ...this.state.geometry,
                  lowerRadius: value
                }
              });
            }}
          />
          <SettingsControl
            value={this.state.geometry.offset}
            min={-2}
            max={2}
            markStep={1}
            label={'Offset'}
            onChange={(value) => {
              this.setState({
                ...this.state,
                geometry: {
                  ...this.state.geometry,
                  offset: value
                }
              });
            }}
          />
          </AreaHighlight>
          <AreaHighlight title="Light source parameters">
          <SettingsControl
            value={this.state.lightSource.latitude}
            min={-180}
            max={180}
            markStep={90}
            label={'Relative latitude'}
            onChange={(value) => {
              this.setState({
                ...this.state,
                lightSource: {
                  ...this.state.lightSource,
                  latitude: value
                }
              });
            }}
            />
            <SettingsControl
            value={this.state.lightSource.longitude}
            min={-180}
            max={180}
            markStep={90}
            label={'Relative latitude'}
            onChange={(value) => {
              this.setState({
                ...this.state,
                lightSource: {
                  ...this.state.lightSource,
                  longitude: value
                }
              });
            }}
            />
          <SettingsControl
            value={this.state.lightSource.offset}
            min={-2}
            max={2}
            markStep={1}
            label={'Offset'}
            onChange={(value) => {
              this.setState({
                ...this.state,
                lightSource: {
                  ...this.state.lightSource,
                  offset: value
                }
              });
            }}
            />
          </AreaHighlight>
          <Switch className="switch" checkedChildren="Graticule" unCheckedChildren="Graticule" defaultChecked
           onChange={(value) => {
            this.setState({
              ...this.state,
              graticule: value
            });
            console.log(this.state);
          }}/>
          <Switch className="switch" checkedChildren="Countries" unCheckedChildren="Countries" defaultChecked
          onChange={(value) => {
            this.setState({
              ...this.state,
              countries: value
            });
          }}/>
          <Switch className="switch" checkedChildren="Indicators" unCheckedChildren="Indicators" defaultChecked
          onChange={(value) => {
            this.setState({
              ...this.state,
              tissot: value
            });
          }}
          />
        </div>
        <GlobeComponent params={this.state}/>
      </div>
    );
  }
}

export default App;
