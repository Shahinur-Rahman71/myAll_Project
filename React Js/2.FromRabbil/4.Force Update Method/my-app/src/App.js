import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Refresh from './mycomponent/Refresh'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Refresh/>
      </div>
    );
  }
}

export default App;
