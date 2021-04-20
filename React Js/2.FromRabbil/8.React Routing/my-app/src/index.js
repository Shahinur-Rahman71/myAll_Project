import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import {Route,Link, BrowserRouter as Router} from '../node_modules/react-router-dom'

//cons variable
const myrouter = (
  
  <Router>
      <div>
        {/* Here has two part: navigation part. */}
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/portfolio">Portfolio</Link>
        </ul>

        {/* and routing part. */}
        <Route exact path="/" component={App}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/portfolio" component={Portfolio}></Route>

      </div>
  </Router>
)

ReactDOM.render(
  myrouter,
  document.getElementById('root')
);
