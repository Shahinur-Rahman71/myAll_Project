import React, { useState, Fragment } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Welcome(){

    const [name,setName] = useState({
        country: "Bangladesh"
    });

    function Change(){
        setName({
            country: "Pakistan"
        })
    }
    return(
        <Fragment >
            <h1>{name.country}</h1>
            <button onClick={Change}>Change</button>
            <button onClick={()=>setName({country: "India"})}>Again Change</button>
        </Fragment>
    )
}


export default Welcome;