import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, NavLink } from 'react-router-dom'
import App from './App';
import './index.css';
import Hello from './mycomponent/Hello';
import Welcome from './mycomponent/Welcome';
// import Notfound from './mycomponent/Notfound';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const routing = (
  <Router>
    <Fragment>
      <h1>React router example.</h1>

      


      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">

            
                <NavLink className="nav-item nav-link active" to="/" exact activeStyle={{ color: 'red' }}>App</NavLink>
              
                <NavLink className="nav-item nav-link active" to="/hello" exact activeStyle={{ color: 'green' }}>Hello</NavLink>
              
                <NavLink className="nav-item nav-link active" to="/welcome" exact activeStyle={{ color: 'pink' }}>Welcome</NavLink>
              

            {/* <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">Features</a>
            <a class="nav-item nav-link" href="#">Pricing</a>
            <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}

          </div>
        </div>
      </nav>

      <switch>
        <Route exact path="/" component={App} />
        <Route path="/hello" component={Hello} />
        <Route path="/welcome" component={Welcome} />
        {/* <Route component={Notfound} /> */}
      </switch>


    </Fragment>
  </Router>
)

ReactDOM.render(
  // <App />,
  routing,
  document.getElementById('root')
);
