import React, { Component } from 'react';

import './App.css';
import Welcome from './mycomponent/Welcome'
import SetState from './mycomponent/SetState'
import IfElse from './mycomponent/IfElse'
import ConditionalElement from './mycomponent/ConditionalElement'
import AdvancedState from './mycomponent/AdvancedState';

class App extends Component {
  render() {
    return (
      <div className="">
        <Welcome/>
        <SetState></SetState>
        <IfElse/>
        <ConditionalElement/>
        <AdvancedState/>
      </div>
    );
  }
}

export default App;
