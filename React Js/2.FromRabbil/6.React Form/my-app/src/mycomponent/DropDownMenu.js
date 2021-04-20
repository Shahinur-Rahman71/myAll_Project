import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class DropDownMenu extends Component {
    constructor(){
        super()
        this.state = {
            city1: "Dhaka",
            city2: "Tangail",
            city3: "Rajshahi",
            city4: "Pabna",
            show: " ",
            auto: "Rajshahi"
        }
    }
    OnchangeHandler = (event)=>{
        var selectvalue = event.target.value;
        this.setState ({
            show: selectvalue,
            auto: selectvalue
        })
    }

    render() {
        return (
            <div className="App my-5">
                <h2 className="bg-dark my-3 text-light">Drop down menu or Select menu</h2>
                <b>{this.state.show}</b><br></br>
                <select onChange={this.OnchangeHandler} value={this.state.auto}>
                    <option>{this.state.city1}</option>
                    <option>{this.state.city2}</option>
                    <option>{this.state.city3}</option>
                    <option>{this.state.city4}</option>
                </select>
            </div>
        );
    }
}

export default DropDownMenu;