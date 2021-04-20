import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {connect} from 'react-redux'
// store and Count will be connnected by connect

const Count =(props)=>{
    return (
        <div>
            <h3>{props.counts}</h3>               
        </div>
    );  
}

// by default ai function ta akta state pai
const mapstateToprops=(states)=>{
    return{
        counts: states.count
    }
}

export default connect(mapstateToprops)(Count);
//connect function component paskorbe. Here count will be argument.
// connect function ta redux er store er sathe Count er connection ghotabe.
// connect akta component or function return korbe jar sathe Count argument hobe.
