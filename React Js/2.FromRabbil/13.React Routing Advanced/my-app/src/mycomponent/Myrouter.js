import React, { Component } from 'react';
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import Page4 from './Pages/Page4'
import {Route, Switch} from 'react-router-dom'
import NotFound from './Pages/NotFound';

class Myrouter extends Component {
    render() {
        return (
            <div> 
                <Switch>
                    <Route exact path="/" component={Page1}></Route>
                    <Route exact path="/Page2" component={Page2}></Route>
                    <Route exact path="/Page3/:username" component={Page3}></Route>
                    <Route exact path="/Page4" component={Page4}></Route>  
                    <Route  component={NotFound}></Route>  
                </Switch>                                        
            </div>
        );
    }
}

export default Myrouter;