import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jsonlist from './mycomponent/Jsonlist'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jsonlist/>
      </div>
    );
  }
}

export default App;
