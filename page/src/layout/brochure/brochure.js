import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, Modal, Button, Input, Form, Icon } from 'antd';

class BrochureModal extends Component {

  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  renderForm = (name, des) => {
    return (
      <Form layout="inline">
        <Form.Item>
          <Input defaultValue={name} />
        </Form.Item>
        <Form.Item>
          <Input defaultValue={des} />
        </Form.Item>
      </Form>
    )
  }

  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    const { name, description } = this.props;
    const form = this.renderForm(name, description);
    return (
      <div>
        <Icon type="edit" onClick={this.showModal}/>
        <Modal
          title="编辑"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          {form}
        </Modal>
      </div>
    );
  }
}


class Brochure extends Component {

  render() {
    const {name, description, id} = this.props.brochure;
    const link = (
      <Link to={`/brochures/${id}`}>
        进入
      </Link>
    )
    return (
      <Card title={name} extra={<BrochureModal name={name} description={description} />} style={{ margin: "0 8px" }}
      actions={[link]}
      >
        <p>{description}</p>
      </Card>
    )
  }
}

export default Brochure;
