import React,{Component} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class SetState extends Component{

    // constructor(){
    //     super()
    //     this.state = {
    //         MyName : "Shanto"
    //     }
    // }

    // Change(a){
    //     this.setState({MyName : a})
    // }
    // render(){

    //     return(
    //         <div>
    //             <button className="btn btn-info btn-block">setState properties</button>
    //             <h1>{this.state.MyName}</h1>
    //             <button onClick={this.Change.bind(this,"Shahinur Rahman")}>Save</button>
    //         </div>
    //     )
    // }
    constructor(){
        super()
        this.state ={
            Name : "Abdur Rahim"
        }
    }
    Change(a){
        this.setState({Name: a})
    }
    render(){
        return (
            <div>
                <h1>{this.state.Name}</h1>
                <button onClick={this.Change.bind(this,"Jasim Uddin")}>Edit</button>
            </div>
        )
    }
}
export default SetState