import React, { Component } from 'react';
import { BrowserRouter, Route, IndexRoute } from 'react-router-dom'
import Brochures from './brochure/brochures';
import CardLayout from './card/card';
import Setting from './setting/main';
const containerId = "container";
import { Layout, Button, Row, Col, Form, Icon, Input, Checkbox, Modal } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class LoginForm extends Component {

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
        </Form.Item>
        <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

class Menu extends Component {

  state = {
    visible : false
  };

  renderLoginModal = () => {
    return (
      <Modal
        title="Login"
        visible={this.state.visible}
        onOk={this.handleCancel}
        onCancel={this.handleCancel}>
        <LoginForm />
      </Modal>
    )
  };

  handleModal = () => {
    this.setState({visible : true})
  };

  handleCancel = () => {
    this.setState({visible : false})
  };

  render () {
    const loginModal = this.renderLoginModal();
    console.log(loginModal)
    return (
      <Row type="flex" justify="end">
        <Col span={4}>
          <Button onClick={this.handleModal}>登录</Button>
          {loginModal}
        </Col>
      </Row>
    )
  }

}

class AppLayout extends Component {

  render() {
    return(
      <div className="layout">
        <Layout>
          <Header>
            <Menu />
          </Header>
          <Content>
            <div style={{margin: "50px 100px", minHeight: "400px"}}>
              <BrowserRouter>
                <Route path="/" exact component={Brochures}></Route>
                <Route path="/brochures/:brochureId" component={CardLayout}></Route>
                <Route path="/setting/:brochureId" component={Setting}></Route>
              </BrowserRouter>
            </div>
          </Content>
          <Footer>Memory Card ©2019 Created by 105</Footer>
        </Layout>
      </div>
    )
  }

}



export default AppLayout
