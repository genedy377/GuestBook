import React, { Component } from 'react';
import Login from './components/Login/Login'
import Reply from './components/reply/reply'
import './App.css';
import { Row , Col } from 'antd';


class App extends Component {
  render() {
    return (
      <div className="App">
         <Row>
      <Col span={12} offset={6}>
        <Login></Login>
        <Reply></Reply>
      </Col>
    </Row>
       
      </div>
    );
  }
}

export default App;
