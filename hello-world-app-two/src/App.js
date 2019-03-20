import React, { Component } from 'react';
import Bomb from './state-drills/Bomb'
import './App.css';
import HelloWorld from './state-drills/HelloWorld';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <Bomb />
      </div>
    );
  }
}

export default App;
