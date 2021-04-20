import React, { Component } from 'react';

import './App.css';
import Son from './mycomponent/Son'
import { DadaProvider } from './mycomponent/MyContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DadaProvider value="Dada to Puti.">
            <Son/>
        </DadaProvider>
        
      </div>
    );
  }
}

export default App;
