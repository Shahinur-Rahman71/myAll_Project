import React, { Component } from 'react';
import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Firstproject from './First/Count';
import Function from './First/Function';
import ListMap from './First/ListMap';

class App extends Component {

  state={
    person:[
        {name: 'shanto', id: 26},
        {name: 'shahinur rahman', id: 27},
        {name: 'jolill', id: 21}
    ]
}

  render() {
    return (
      <div className="container">

          {this.state.person.map((people,index)=>{
              return(
                <div key={index}>
                  <Firstproject name={people.name}/>             
                </div>
              ) 
            })
          }
          <Function/>
          <ListMap/>
      </div>
    );
  }
}

export default App;
