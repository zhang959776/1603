/*
 * @Author: zhangluying 
 * @Date: 2018-10-31 18:51:42 
 * @Last Modified by: zhangluying
 * @Last Modified time: 2018-11-06 11:22:33
 */

import React, { Component } from 'react';
import Index from './common/index';
import Content from './components/content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Index/>
       <Content/>
      </div>
    );
  }
}

export default App;
