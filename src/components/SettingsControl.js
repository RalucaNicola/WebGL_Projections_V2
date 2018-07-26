import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';


class SettingsControl extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const min = this.props.min;
    const max = this.props.max;
    const marks = getMarks(min, max);

    return (
      <Row>
        <Col span={4} style={{textAlign: 'center'}}>
          <label>{this.props.label}</label>
        </Col>
        <Col span={12}>
          <Slider marks={marks} min={min} max={max} onChange={(value) => {this.props.onChange(value)}} value={this.props.value} step={0.01} />
        </Col>
        <Col span={4}>
          <InputNumber
            min={min}
            max={max}
            style={{ marginLeft: 16 }}
            step={0.01}
            value={this.props.value}
            onChange={(value) => {this.props.onChange(value)}}
          />
        </Col>
      </Row>
    );
  }
}

export default SettingsControl;

function getMarks(min, max) {
  const marks = {};
  for (let i = min; i <= max; i++) {
    marks[i] = i.toString();
  }
  return marks;
}