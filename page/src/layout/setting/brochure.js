import React, { Component } from 'react';
import { Layout } from 'antd';
import { Form, Input, Button } from 'antd';
import { message } from 'antd';
import { axios} from '../setting';

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

  handleSave = () => {
      const {brochureId} = this.props;
      this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
              values['id'] = brochureId;
              console.log('Received values of form: ', values);
              axios.put('/api/brochures', values)
              .then(response => {
                  // TODO 没有更新表单的目前值
                  this.setState({brochure: response.data});
                  message.success('更新成功', 1);
              })
          }
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
          <Button type="primary" onClick={this.handleSave}>保存</Button>
        </Form.Item>
      </Form>
    )
  }
}

const BrochureForm = Form.create()(Brochure);

export default BrochureForm;
