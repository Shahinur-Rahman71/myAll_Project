import React,{Component} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class condition extends Component{

    constructor(){
        super()
        this.state = {
            name: false
        }
    }

    render(){
        return (
            this.state.name ? <h3>Shanto</h3> : <h4>Shahinur Rahman</h4>
            //? and : are variable elements
        )
    }
}
export default condition