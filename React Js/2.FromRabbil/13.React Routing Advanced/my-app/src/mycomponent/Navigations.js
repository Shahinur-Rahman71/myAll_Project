import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class Navigations extends Component {
    render() {
        return (
            <div>
                <ul>                 
                    <li><NavLink to="/" exact activeStyle={{color: 'red'}}>Page1</NavLink></li>
                    <li><NavLink to="/Page2" exact activeStyle={{color: 'green'}}>Page2</NavLink></li>
                    <li><NavLink to="/Page3" exact activeStyle={{color: 'yellow'}}>Page3</NavLink></li>
                    <li><NavLink to="/Page4" exact activeStyle={{color: 'pink'}}>Page4</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Navigations;