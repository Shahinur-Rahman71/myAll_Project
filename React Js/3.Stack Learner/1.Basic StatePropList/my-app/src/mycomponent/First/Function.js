import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Function = () => {
    const [Name,setState]=useState({
        name: ""
    })

   const Change=(event)=>{
        setState({
            name: event.target.value
        })
    }
    return (
        <div>
            <h4>I am {Name.name}</h4>
            <input type="text" onChange={Change}/>
            
        </div>
    );
};

export default Function;