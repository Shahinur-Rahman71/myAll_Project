import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';

class HydrateMethod extends Component{

    Change(){
        var container = document.getElementById("my");
        var element = <h1>Hi, I am hydrate method.</h1>
        var cllback = function (){
            alert("Hi, I am callback function");
        }

        ReactDOM.hydrate(element,container,cllback);
    }
    render(){
        return (
            <div className="App">
                <h1 id="my">Hi, I am hydrate Class.</h1>
                <button onClick={this.Change} className="btn btn-danger">Save</button>
            </div>
        
        )
    }
    
}

export default HydrateMethod;