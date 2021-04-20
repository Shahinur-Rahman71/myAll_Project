import React, { Component } from 'react';

class Page3 extends Component {
    constructor({match}){
        super();
        this.state ={
            myname: match.params.username
        }
    }
    render() {
        console.log(this.state.myname);
        return (
            <div>
                <h1>{this.state.myname}</h1>
            </div>
        );
    }
}

export default Page3;