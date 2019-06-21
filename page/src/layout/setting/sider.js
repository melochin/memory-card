import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

class MySider extends Component {

  render() {
    return (
      <Menu
        onClick={this.props.handleClick}

        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
      <Menu.ItemGroup key="g2" title="卡册维护">
        <Menu.Item key="1">卡册</Menu.Item>
        <Menu.Item key="2">卡片</Menu.Item>
      </Menu.ItemGroup>
      </Menu>
    );
  }
}

export default MySider;
