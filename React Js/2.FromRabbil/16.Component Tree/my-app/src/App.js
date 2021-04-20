import React, { Component } from 'react';

import './App.css';
import Son from './mycomponent/Son'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Son name="I am from app but get it puti."/>
      </div>
    );
  }
}

export default App;
