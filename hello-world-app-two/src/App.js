import React, { Component } from 'react';
import React from 'react';
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
