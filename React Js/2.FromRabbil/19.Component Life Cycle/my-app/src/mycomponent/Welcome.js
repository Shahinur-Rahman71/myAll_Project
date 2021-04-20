import React, { Component, Fragment } from 'react';

class Welcome extends Component {
    constructor(){
        super();
        this.state={
            mydata: "I am from mydata varaiable."
        }
    }

    render() {
        return (
            <Fragment>
                <h1>Component life cycle.</h1>
                    <h4>{this.state.mydata}</h4>
                <button onClick={this.Changefunction}>Change</button>
            </Fragment>
        );
    }
    
    componentDidMount=()=>{
            console.log("Component did mount.");
    }
    Changefunction=()=>{
        this.setState({
            mydata: "Oh! are you ready to change?"
        })
    }
    componentWillMount=()=>{
        console.log("Component will mount");
    }

}

export default Welcome;