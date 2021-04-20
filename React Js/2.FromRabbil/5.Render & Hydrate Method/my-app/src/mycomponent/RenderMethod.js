import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';

class Welcome extends Component{

    Change(){

        var element = <h1>Hi, I am render method.</h1>
        var container = document.getElementById("myid");
        var callback = function (){
            alert("Hi, I am callback function");
        }

        ReactDOM.render(element,container,callback);
    }
    render(){
        return (
            <div className="App">
                <h1 id="myid">Hi, I am render Class.</h1>
                <button onClick={this.Change} className="btn btn-danger">Save</button>
            </div>
        
        )
    }
    
}

export default Welcome;