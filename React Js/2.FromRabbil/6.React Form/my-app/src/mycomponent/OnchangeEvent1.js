import React, {Component} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Changeevent extends Component{

    constructor(){
        super()
        this.state ={
            username: ""
        };
    }
    OnChangeEvent = (event) =>{
        var myname = event.target.name;
        var myvalue = event.target.value;
        this.setState({
            [myname]: myvalue
        });
    }
    render(){
        return (
            <div className="App">
                <form>
                    <h2 className="bg-dark text-light my-3">OnChange Event1</h2>
                    <h3>{this.state.username}</h3>

                    <input className="inputborder" onChange={this.OnChangeEvent} name="username" type="text" placeholder="Enter your name : "></input><br></br>
                    <input type="submit" value="Submit" className="btn btn-info my-3"></input>
                </form>
            </div>
        )
    }
}
export default Changeevent;