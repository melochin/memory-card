import React, { Component } from 'react';
import { Layout} from 'antd';
import BrochureForm from './brochure.js';
import Card from './card.js';
import MySider from './sider.js';
const {Content, Sider} = Layout

class Setting extends Component {

  state = {
    key : 'brochure'
  }

  handleClick = (e) => {
    this.setState({key: e.key});
  };

  render = () => {
    const {brochureId} = this.props.match.params;
    var component = null;
    if (this.state.key == 'brochure') {
        component = (<BrochureForm brochureId={brochureId}/>);
    }
    if (this.state.key == 'card') {
        component = (<Card brochureId={brochureId}/>);
    }

    return (
      <Layout>
          <Sider style={{ background: '#fff' }}>
            <MySider onClick={this.handleClick}/>
          </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280, textAlign: 'left'}}>
          {component}
        </Content>
      </Layout>
    )
  }
}

export default Setting;
