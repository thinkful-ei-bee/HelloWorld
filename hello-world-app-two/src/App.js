import React, { Component } from 'react';
import Bomb from './state-drills/Bomb'
import './App.css';
import HelloWorld from './state-drills/HelloWorld';
import RouletteGun from './state-drills/RouletteGun'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>Hello World App Drill</h4>
        <HelloWorld />
        <h4>Time bomb App Drill</h4>
        
        <h4>RouletteGun App Drill</h4>
        <RouletteGun bulletInChamber={8}/>
      </div>
    );
  }
}

export default App;
