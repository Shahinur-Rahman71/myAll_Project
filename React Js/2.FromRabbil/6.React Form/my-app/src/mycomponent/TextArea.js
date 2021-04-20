import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class TextArea extends Component {
    constructor(){
        super()
        this.state = {
            message : ""
        }
    }
    Textchange = (event)=>{
        var mytext=event.target.value;
        this.setState({message: mytext});
    }
    render() {
        return (
            <div className="App">
                <h2 className="bg-dark my-3 text-light">TextArea</h2>              
                <h3>{this.state.message}</h3>
                <textarea onChange={this.Textchange} placeholder="message..." className="col-10 mb-2"/>
            </div>
        );
    }
}

export default TextArea;