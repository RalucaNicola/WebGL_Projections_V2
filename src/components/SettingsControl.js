import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';


class SettingsControl extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    inputValue: this.props.value,
  }

  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
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
          <Slider marks={marks} min={min} max={max} onChange={this.onChange} value={this.state.inputValue} step={0.1} />
        </Col>
        <Col span={4}>
          <InputNumber
            min={min}
            max={max}
            style={{ marginLeft: 16 }}
            step={0.1}
            value={this.state.inputValue}
            onChange={this.onChange}
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