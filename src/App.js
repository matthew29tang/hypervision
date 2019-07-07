import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import Router from './components/Router/Router';
import Approuter from './components/Router/Router';
import NavBar from './components/Router/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    )
  }
}

export default App;
