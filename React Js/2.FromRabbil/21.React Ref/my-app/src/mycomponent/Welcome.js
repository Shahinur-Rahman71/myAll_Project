import React, { Component, Fragment } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class Welcome extends Component{
    constructor(props){
        super(props);
        this.callRef=React.createRef();
    }

    addInput = ()=>{
        this.callRef.current.focus();
    }

    render(){
        return(
            <Fragment>
                <h1>Ref means referrence</h1>
                <input type="text" ref={this.callRef}/>
                <input type="button" value="Add text input" onClick={this.addInput}/>               
            </Fragment>
        )
    }
}

export default Welcome;