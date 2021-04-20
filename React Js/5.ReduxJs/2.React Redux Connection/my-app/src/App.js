import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store';//index.js automatic niya nibe
import Count from './mycomponent/Count';
import Controller from './mycomponent/Controller';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Hi, I am react-redux.</h1>
          <Count />
          <Controller/>
        </div>
      </Provider>
    );
  }
}

export default App;
