import React from 'react';
import './App.css';
import styles from './Mycss.module.css'
import './Mystyle.scss';

// this is object CSS
const mystyle= {
  backgroundColor: "green",
  margin: "20px", 
  color: "red"
}

function App(){
  return(
    <div className="App">
      {/* this is inline Css */}
      <h2 style={{backgroundColor: "green",margin: "20px", color: "red"}}>Inline Css</h2>
      <h2 style={mystyle}>object css</h2>
      <h2 className="TextStyle" >module css</h2>
      <h2 className="Sassstyles" >scss style</h2>
    </div>
  );
}

export default App;
