import React, { Component } from 'react';
import Bomb from './state-drills/Bomb'
import './App.css';
import HelloWorld from './state-drills/HelloWorld';
import RouletteGun from './state-drills/RouletteGun'
import Tab from './state-drills/Tab'
import Accordion from './state-drills/Accordion'

const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>Hello World App Drill</h4>
        <HelloWorld />
        <h4>Time bomb App Drill</h4>
        <Bomb />
        <h4>RouletteGun App Drill</h4>
        <RouletteGun bulletInChamber={8}/>
        <h4>Tab App Drill</h4>
        <Tab tabs={tabsProp}/>
        <h4>Accordion App Drill</h4>
        <Accordion sections={sections}/>
      </div>
    );
  }
}

export default App;
