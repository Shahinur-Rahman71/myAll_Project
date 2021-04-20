import React, { Component } from 'react';
import './App.css';
import Welcome from './mycomponent/GetData'
import Formdesign from './mycomponent/Formdesign';
import Postdata from './mycomponent/Postdata';

class App extends Component {
  render() {
    return (
      <div className="container my-4">
        <Postdata/>
        <Formdesign/>
        <Welcome/>
      </div>
    );
  }
}

export default App;
