import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hooks from './Hook';

class App extends Component {

  constructor(){
    super();
    this.state = {
      apiResponse: 'please resume this properties',
      users: []
    }
  }

  callApi() {
    fetch("http://localhost:9000/myapi")
      // .then(res => res.text())
      .then(res => res.json())
      // .then(res => this.setState({apiResponse: res}))
      .then(users => this.setState({ users }))
  }

  componentDidMount(){
    this.callApi();
  }


  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <p className="App-intro">
          {this.state.apiResponse}
        </p>

        <ul>
          {this.state.users.map((data,index) => 
            <li key={index}>ID : {data.id}  Name : {data.name}</li>
          )}
        </ul>

        <Hooks/>

      </div>
    );
  }

}

export default App;
