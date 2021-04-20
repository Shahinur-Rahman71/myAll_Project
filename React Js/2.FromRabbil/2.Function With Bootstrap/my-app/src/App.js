import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Welcome from './mycomponents/Welcome'
import ArrowFunction from './mycomponents/ArrowFunction'
// function App(){
//   return(
//     <div className="App">

//       <Welcome></Welcome>
      
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome></Welcome>
        <ArrowFunction></ArrowFunction>
      </div>
    );
  }
}

export default App;
