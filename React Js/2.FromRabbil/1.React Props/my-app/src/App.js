import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Hello from './mycomponents/Hello'
import Welcome from './mycomponents/Welcome'

function App(){
  return (
    <div className="App">
        <Hello name="Shanto" age="23"></Hello>
        {/* <Hello name="Shanto Islam" age="24"></Hello>
        <Hello name="Shahinur Rahman" age="25"></Hello> */}
        <Welcome district='Rajshahi'></Welcome>
    </div>
  );
  
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Shahinur Rahman</h1>
//         <h2>{2+4+5}</h2>
//       </div>
//     );
//   }
// }

export default App;
