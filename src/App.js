import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src="https://www.pexels.com/photo/green-orchid-plant-1011302/" alt="flowers"/>
          <h1 className="App-title">Welcome to DevMountain</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          this is harder then it looks from the outside
        </p>
      </div>
    );
    }
}

export default App;
