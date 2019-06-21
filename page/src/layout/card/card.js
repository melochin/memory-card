import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {axios} from '../setting';
import { Row, Col, Button, Card, Icon } from 'antd';
import MemoryCard from './memoryCard';

// TODO 设备兼容性
class CardLayout extends Component {

    state = {
      mode : 0,
      brochure : {
        name: ""
      },
      cards: new Array()
    };

    changeMode = (mode) => {
      this.setState({mode})
    }

    componentDidMount = () => {
      const {brochureId} = this.props.match.params;
      axios.get(`/api/brochures/${brochureId}`)
        .then(response => {
          this.setState({brochure: response.data});
        })
      axios.get(`/api/brochures/${brochureId}/cards/memory`)
        .then((response) => {
          console.log(response.data);
          this.setState({cards : response.data});
        });

    };

    renderMemoryHome = () => {
      const {brochureId} = this.props.match.params;
      const {name} = this.state.brochure;
      const url = `/setting/${brochureId}`;
      const link = (<Link to={url}><Icon type="setting" /></Link>);
      return (
        <Card title={name} style={{margin: '50px 100px'}} extra={link}>
            <div className="center aligned extra content">
              <Row>
                <h2>单词数</h2>
                <h2>{this.state.cards.length}</h2>
              </Row>
              <Row>
                <Col span={6}></Col>
                <Col span={12}>
                  <Button block type="primary"
                          onClick={() => this.changeMode(1)}>
                          开始学习
                  </Button>
                </Col>
                <Col span={6}></Col>
              </Row>
            </div>
        </Card>
      )
    };

    renderMemory = () => {
      return (
        <Card style={{margin: '50px 100px'}}>
          <MemoryCard cards={this.state.cards}></MemoryCard>
        </Card>
      )
    };

    renderManage = () => {
      return (
        <div>manage</div>
      )
    };

    render () {
      const {mode} = this.state;
      var content = null;

      switch (mode) {
          case 0 :
              content = this.renderMemoryHome();
              break;
          case 1 :
              content = this.renderMemory();
              break;
          case 2 :
              content = this.renderManage();
              break;
      }

      return (
          <div id="card-box" className="ui container">
              <div id="card-content" className="ui segment">
                  {content}
              </div>
          </div>
      )
    }
}

export default CardLayout
