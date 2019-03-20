import React, { Component } from 'react';
import Bomb from './state-drills/Bomb'
import './App.css';
import HelloWorld from './state-drills/HelloWorld';
import RouletteGun from './state-drills/RouletteGun'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
        
        <RouletteGun bulletInChamber={8}/>
      </div>
    );
  }
}

export default App;
