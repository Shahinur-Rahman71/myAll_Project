import React, { Component } from 'react';

class Login extends Component {

    logins =()=>{
        sessionStorage.setItem("userName","ReactjsCoder")
    }
    logout =()=>{
        sessionStorage.clear();
    }

    render() {
        return (

            <div>
                <button onClick={this.logins}>Login</button>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}

export default Login;