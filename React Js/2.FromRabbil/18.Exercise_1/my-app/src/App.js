import React, { Component,Fragment } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';

const Contacts=({match})=> <p>{match.params.id}</p>
class App extends Component {
  render() {
    const {url} =this.props.match;
    return (
      <Fragment >
        <h4>Welcome to contact page. </h4>
        <ul>
          <li>
            <Link to="/App/1">Contacts 1</Link>
          </li>
          <li>
            <Link to="/App/2">Contacts 2</Link>
          </li>
          <li>
            <Link to="/App/3">Contacts 3</Link>
          </li>
          <li>
            <Link to="/App/4">Contacts 4</Link>
          </li>
        </ul>
        <Route path="/App/:id" component={Contacts}/>
      </Fragment>
    );
  }
}

export default App;
