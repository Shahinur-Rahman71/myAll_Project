import React from 'react';
import { Provider } from 'react-redux';
import Controller from './mycomponent/Controller';
import Count from './mycomponent/Count';
import store from './store';

const App =()=>{
  return(
    <div className="container mt-5">
      <Provider store={store}>
        <h1>all in all</h1>
        <Count/>
        <Controller/>
      </Provider>
    </div>
  )
}

export default App;
 