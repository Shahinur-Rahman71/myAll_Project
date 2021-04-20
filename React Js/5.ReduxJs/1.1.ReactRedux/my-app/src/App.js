import React, { Component } from 'react';
import './App.css';
import CakeContainer from './mycomponent/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/store';
import HookCakeContainer from './mycomponent/HookCakeContainer';
import NewCakeContainer from './mycomponent/NewCakeContainer';
import ItemContainer from './mycomponent/ItemContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ItemContainer cake/>
          <ItemContainer/>
          <CakeContainer/>
          <HookCakeContainer/>
          <NewCakeContainer/>
        </div>
      </Provider>     
    );
  }
}

export default App;
