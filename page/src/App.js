import React, { Component } from 'react';
import AppLayout from './layout/layout';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppLayout />
      </div>
    );
  }
}

export default App;
