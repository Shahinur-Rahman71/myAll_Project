import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import RenderMethod from './mycomponent/RenderMethod'
import HydrateMethod from './mycomponent/HydrateMethod'
import FindDomnode from './mycomponent/FindDomnode'


class App extends Component {
  render() {
    return (
      <div className="App">
        <RenderMethod/>
        <HydrateMethod/>
        <FindDomnode/>
      </div>
    );
  }
}

export default App;
