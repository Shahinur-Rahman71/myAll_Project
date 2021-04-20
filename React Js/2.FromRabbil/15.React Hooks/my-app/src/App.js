import React, { Component, Fragment } from 'react';

import './App.css';
import Welcome from './mycomponent/Welcome'
import Hello from './mycomponent/Hello';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Welcome/>
        <Hello/>
      </Fragment>
    );
  }
}

export default App;
