import React, { Component } from 'react';
import './App.css';
import Navigations from './mycomponent/Navigations';
import Myrouter from './mycomponent/Myrouter';
import {BrowserRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
            <Navigations/>
            <Myrouter/>
        </BrowserRouter>       
      </div>
    );
  }
}

export default App;
