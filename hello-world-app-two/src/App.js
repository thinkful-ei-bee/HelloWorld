import React, { Component } from 'react';
import Bomb from './state-drills/Bomb'
import './App.css';
import HelloWorld from './state-drills/HelloWorld';
import RouletteGun from './state-drills/RouletteGun'
import Tab from './state-drills/Tab'

const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>Hello World App Drill</h4>
        <HelloWorld />
        <h4>Time bomb App Drill</h4>
        
        <h4>RouletteGun App Drill</h4>
        <RouletteGun bulletInChamber={8}/>
        <Tab tabs={tabsProp}/>
      </div>
    );
  }
}

export default App;
