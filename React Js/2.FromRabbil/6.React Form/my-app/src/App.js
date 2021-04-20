import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Formdesign from './mycomponent/FormOnchange';
import OnchangeEvent1 from './mycomponent/OnchangeEvent1';
import Onsubmitaction from './mycomponent/OnSubmit';
import BigForm from './mycomponent/BigForm'
import TextArea from './mycomponent/TextArea'
import DropDownMenu from './mycomponent/DropDownMenu'
import List from './mycomponent/List'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Formdesign/>
        <OnchangeEvent1/>
        <Onsubmitaction/>
        <BigForm/>
        <TextArea/>
        <DropDownMenu/>
        <List/>
      </div>
    );
  }
}

export default App;
