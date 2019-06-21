import React, { Component } from 'react';
import Brochure from './brochure';
import { Row, Col } from 'antd';
import {axios} from '../setting';

class Brochures extends Component {

  state = {
    brochures:[]
  };

  componentDidMount = () => {
    console.log("mount");
    axios.get('/api/brochures')
      .then((response) => {
        this.setState({brochures : response.data});
      })
  };

  renderRow = (brochures, start, end, width) => {
    var components = new Array();
    for (var i=start; i<=end; i++) {
      var b = brochures[i];
      components.push(
        <Col span={width} >
          <Brochure brochure={b} />
        </Col>
      )
    }
    return (
      <Row>
        {components}
      </Row>
    )
  };

  renderBrochures = (brochures) => {
    const cols = 4;
    const width = 24 / cols;
    var components = new Array();
    var len = brochures.length;

    var start = 0;
    while (start < len) {
      var end = start + cols >= len ? len - 1 : start + cols;
      components.push(this.renderRow(brochures, start, end, width));
      start = end + 1;
    }
    return components;
  };

  render () {
    const {brochures} = this.state;
    console.log(brochures.length);
    const brochuresComponent = this.renderBrochures(brochures);
    return (
      <div>
        {brochuresComponent}
      </div>
    )
  }
}

export default Brochures;
