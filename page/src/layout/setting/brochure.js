import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import { Form, Input, Button, Icon } from 'antd';
import { List } from 'antd';
import MySider from './sider.js';
import {axios} from '../setting';

const {Header, Content, Sider} = Layout


class Brochure extends Component {

  state = {
    brochure : {
      name: "",
      description: ""
    }
  }

  componentDidMount = () => {
    const {brochureId} = this.props;
    console.log(brochureId);
    axios.get(`/api/brochures/${brochureId}`)
      .then(response => {
        this.setState({brochure: response.data});
      });
  };

  render = () => {
    const {brochure} = this.state;
    const { getFieldDecorator } = this.props.form;

    console.log(getFieldDecorator);
    return (
      <Form>
        <Form.Item label="名字">
          {
            getFieldDecorator('name', {
              initialValue: brochure.name,
            })(<Input style={{width : "250px"}} />)
          }
        </Form.Item>
        <Form.Item label="描述">
          {
            getFieldDecorator('description', {
              initialValue: brochure.description,
            })(<Input.TextArea style={{width: "400px"}} />)
          }
        </Form.Item>
        <Form.Item>
          <Button type="primary">保存</Button>
        </Form.Item>
      </Form>
    )
  }
}

class Card extends Component {

  state = {
    cards : new Array()
  };

  componentDidMount = () => {
    const {brochureId} = this.props;
    axios.get(`/api/brochures/${brochureId}/cards`)
      .then(response => {
        this.setState({cards: response.data});
      });
  };

  render = () => {

    const lists = this.state.cards.map(o =>
      <List.Item actions={[<a>编辑</a>]} key={o.id}>
        <Row style={{width: '100%'}}>
          <Col span={9}>
            {o.front}
          </Col>
          <Col span={9}>
            {o.back}
          </Col>
        </Row>
      </List.Item>
    );


    return (
      <div>
        <Button.Group>
          <Button icon="plus-square">新增</Button>
          <Button icon="file-add">批量导入</Button>
        </Button.Group>
      <List >
        {lists}
      </List>
      </div>
    )
  }
}

const BrochureForm = Form.create()(Brochure);

class Setting extends Component {

  state = {
    component : null
  }

  onClick = (e) => {
    const {brochureId} = this.props.match.params;
    if (e.key == '1') {
      this.setState({component: <BrochureForm brochureId={brochureId}/>})
    } else {
      this.setState({component: <Card brochureId={brochureId}/>})
    }
  };

  render = () => {
    const {brochureId} = this.props.match.params;
    var {component} = this.state;
    if (component == null) {
      component = (<BrochureForm brochureId={brochureId}/>);
    }

    return (
      <Layout>
          <Sider style={{ background: '#fff' }}>
            <MySider handleClick={this.onClick}/>
          </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280, textAlign: 'left'}}>
          {component}
        </Content>
      </Layout>
    )
  }
}

export default Setting;
