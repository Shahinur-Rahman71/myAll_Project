import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Page2 extends Component {
    constructor(){
        super()
        this.state={
            passdata: "ShahinurRahman"
        }
    }

    render() {
        const pass = "/Page3/"+this.state.passdata;
        return (
            <div>
                <h1>Page2</h1>
                {/* <button><Link to="/Page3/ShahinurRahman">Press my name</Link></button> */}
                <button><Link to={pass}>Press my name</Link></button>
            </div>
        );
    }
}

export default Page2;