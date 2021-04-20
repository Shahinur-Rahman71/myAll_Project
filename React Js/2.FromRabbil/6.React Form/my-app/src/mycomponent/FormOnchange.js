import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Formdesign extends Component{

    constructor(){
        super()
        this.state = {
            name: " "
        };
    }
    
    Change = (event) => {
        var newname = event.target.value;  
        this.setState({
            name: newname
        })
    }

    render(){
        return (
            <div className="App">
                <form>
                    <h2 className=" bg-dark text-light my-3">OnChange Event</h2>
                    <h3>{this.state.name}</h3>
                    {/* //onChange event.............. */}
                    <input className="inputborder" onChange={this.Change} type="text" placeholder="Enter your name : "></input><br></br>
                    <input type="submit" value="Submit" className="btn btn-info my-3"></input>

                </form>
            </div>
        )
    }


}
export default Formdesign;