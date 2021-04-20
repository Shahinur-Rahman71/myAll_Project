import React,{Component} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class IfElse extends Component{

    constructor(){
        super()
        this.state = {
            login: true
        }
    }

    render(){

        if(this.state.login==true){
            return(   //return er vitor if else use kora jabe na.
                <button className="btn btn-danger m-3">Login Button</button>
            )
        }else{
            return(
                <button className="btn btn-danger m-3">Logout Button</button>
            )
        }
    }
}

export default IfElse