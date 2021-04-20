import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

class Page3 extends Component {
    
    render() {

        if(sessionStorage.getItem("userName")==null){
            return <Redirect to="/login"/>
        }
        else{

            return(
                <div>
                    <h1>Page3</h1>
                </div>
            );
        }

    }
}

export default Page3;