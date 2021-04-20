import React, { Component } from 'react';

import {Redirect} from 'react-router-dom'

class Page2 extends Component {
    

    render() {
       
        if(sessionStorage.getItem("userName")==null){

            return <Redirect to="/login"/>
        }
        else{
            return(
                <div>
                    <h1>Page2</h1>
                </div>
            )
        }
    }
}

export default Page2;