import React, { Component, Fragment } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
class Firstproject extends Component {
    constructor(props){
        super(props);
        this.state={
            count: 0,
            colors: 'pink'
        }
    }
    Change=()=>{
        
        this.setState({
            count: this.state.count+1
        });

        if(this.state.count>=5){
            this.setState({
                colors: 'red'
            })
        }
        if(this.state.count>=10){
            this.setState({
                colors: 'green'
            })
        }
        
    }

    render() {
        const props=this.props;
        return (
            
            <Fragment><br/>
                <input type="button" onClick={this.Change} value={props.name} className="btn btn-info"/>
                <h5 style={{backgroundColor:this.state.colors, marginTop: 10}}>Total count {this.state.count} .</h5>
                
            </Fragment>
        );
    }
}

export default Firstproject;