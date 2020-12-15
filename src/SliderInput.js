import React, {Component} from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

class IntegerStep extends Component {
  state = {
    inputValue: 10,
  };

  onChange = value => {
    this.setState({
      inputValue: value,
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={10}
            max={99999999}
            onChange={this.onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={10}
            max={99999999}
            style={{ margin: '0 16px' }}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}

class SliderInput extends Component {
    render() {
        return (
            <div>
                <IntegerStep />
            </div>
        );
    }
}

export default SliderInput;