import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import Router from './components/Router/Router';
import Approuter from './components/Router/Router';
import Upload from './components/Upload/Upload';
import NavBar from './components/Router/NavBar';

/*function App() {
  return (
    <div className="App">
      <Toolbar />
      <main style={{marginTop: '64px'}}>
        <p>This is the page content!</p>
      </main>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    )
  }
}

/*
<main style={{marginTop: '150px'}}>
</main>
*/

export default App;
