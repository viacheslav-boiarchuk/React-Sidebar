import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Layout from './component/Layout';
import  Sidebar from './component/Sidebar';
import  Main from './component/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Layout sidebar={<Sidebar ref="sidebar" />} >
              <Main />
          </Layout>
      </div>
    );
  }
}

export default App;
