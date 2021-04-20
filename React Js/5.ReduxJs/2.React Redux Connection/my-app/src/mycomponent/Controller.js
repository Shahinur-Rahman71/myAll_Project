import React from 'react';
import {connect} from 'react-redux'

const Controller = (props) => {
    return (
        <div>
            <button onClick={()=>props.Add()}>ADD+</button>
            <button onClick={()=>props.Sub()}>SUB-</button>
        </div>
    );
};

const mapDispatchToProps=(dispatch)=>{//Here dispatch is a argument name.It can be shanto..etc
    return {
        Add: ()=>{
            dispatch({type: 'Add'})
        },
        Sub: ()=>{
            dispatch({type: 'Sub'})
        } 
    }
}

export default connect(null,mapDispatchToProps)(Controller);
// here we define null,because first argument is {mapStatetoProps}