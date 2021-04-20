import React,{Component} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class Welcome extends Component{

    constructor(){
        super();
        // var obj ={
        //     MyName: "Shahinur Rahman",
        //     Age: "24",
        //     Village: "MeherChandi",
        //     District: "Rajshahi"
        // }
        // this.state = obj

        this.state = {
            MyName: "Shahinur Rahman",
            Age: ['20','21','22','23','24'],// this is array
            Village: "MeherChandi",
            District: {
                Dhaka: "Dhaka",
                Chitta: "Chittagong",
                Raj: "Rajshahi"
            }
        }
    }

    render(){
        return(
            <div >
                <button className="btn btn-danger btn-block mt-3">State</button>
                <h3>My Name : {this.state.MyName}</h3>
                <h3>Age : {this.state.Age[3]}</h3>
                <h3>village : {this.state.Village}</h3>
                <h3>District : {this.state.District.Dhaka}</h3>
            </div>
        )
    }
}

export default Welcome;