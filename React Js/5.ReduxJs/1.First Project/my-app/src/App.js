import React, { Component } from 'react';
import './App.css';
import AsyncAction from './mycomponent/asyncAction';
// import Basic from './mycomponent/Basic'
import BuyCake from './mycomponent/BuyCake';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Basic/> */}
        <BuyCake/>
        <AsyncAction/>
      </div>
    );
  }
}

export default App;
