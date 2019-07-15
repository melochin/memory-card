import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import { Form, Input, Button, Icon } from 'antd';
import { List, message } from 'antd';
import {axios} from '../setting';

class CardForm extends Component {

    handleSave = () => {
        const {brochureId} = this.props;
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                //TODO API
                console.log(values);
                axios.post(`/api/brochures/${brochureId}/cards`, values)
                  .then(response => {
                    this.setState({cards: response.data});
                    this.props.onAfterSave();
                    this.props.onCancel();
                 });
            }
        });
    };

    render = () => {
        const {onCancel} = this.props;
        const {getFieldDecorator} = this.props.form;
        return (
            <Form style={{marginTop: "20px"}}>
                <Form.Item label="正面">
                    {
                        getFieldDecorator("front")(
                            <Input.TextArea style={{width : "400px"}}/>
                        )
                    }
                </Form.Item>
                <Form.Item label="反面">
                    {
                        getFieldDecorator("back")(
                            <Input.TextArea style={{width : "400px"}}/>
                        )
                    }
                </Form.Item>
                <Form.Item>
                  <Button type="primary" onClick={this.handleSave}>保存</Button>
                  <Button style={{marginLeft: "10px"}}
                    onClick={onCancel}>取消</Button>
                </Form.Item>
            </Form>
        )
    }
}

const WrappedCardForm = Form.create()(CardForm);

class Card extends Component {

  state = {
    cards : new Array(),
    model : '',
  };

  list = () => {
      const {brochureId} = this.props;
      axios.get(`/api/brochures/${brochureId}/cards`)
        .then(response => {
          this.setState({cards: response.data});
        });
  }

  componentDidMount = () => {
      this.list();
  };

  handleDelete = (id) => {
      const {brochureId} = this.props;
      axios.delete(`/api/brochures/${brochureId}/cards/${id}`)
        .then(response => {
            this.list();
        });
  }

  render = () => {

    const lists = this.state.cards.map(o => {
        const handleDelete = () => this.handleDelete(o.id);
        return (
            <List.Item actions={[<a>编辑</a>, <a onClick={handleDelete}>删除</a>]} key={o.id}>
              <Row style={{width: '100%'}}>
                <Col span={9}>
                  {o.front}
                </Col>
                <Col span={9}>
                  {o.back}
                </Col>
              </Row>
            </List.Item>
        )
    });

    return (
      <div>
        <Button.Group>
          <Button icon="plus-square"
            onClick={() => this.setState({model : 'form'})}>新增</Button>
          <Button icon="file-add">批量导入</Button>
        </Button.Group>
        {this.state.model == 'form' &&
            <WrappedCardForm
                brochureId = {this.props.brochureId}
                onAfterSave={() => this.list()}
                onCancel={() => this.setState({model: ''})}/>}
      <List >
        {lists}
      </List>
      </div>
    )
  }
}

export default Card;
