import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Contact from './mycomponent/Contact';
import About from './mycomponent/About';
import Home from './mycomponent/Home';
import Navbar from './mycomponent/Navbar';
import Test from './mycomponent/Test';
import PrivateRoute from './PrivateRoute'
import Login from './mycomponent/Login';
class App extends Component {
  render() {
    return (
      
        <BrowserRouter>
          <div className="container my-3">
            
            <Navbar/>
            <Switch>
              {/* <Route path="/" render={()=>{
                return <Home name="Shahinur Rahman"/>
              }}/> */}
              <Route path="/" exact component={Home}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/about" component={About}/>
              <PrivateRoute path='/posts/:postId' component={Test}/>
              <Route path="/login" component={Login}/>

            </Switch>
          </div>
        </BrowserRouter>
      
    );
  }
}

export default App;
