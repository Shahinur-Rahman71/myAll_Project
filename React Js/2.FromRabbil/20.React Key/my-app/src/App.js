import React, { Component, Fragment } from 'react';
import './App.css';
import Welcome from './mycomponent/Welcome'
import Idlists from './mycomponent/Idlists';

class App extends Component {
  render() {

      return (
        <Fragment >
            <Welcome/>
            <Idlists/>
        </Fragment>
      );
  }

}

export default App;
