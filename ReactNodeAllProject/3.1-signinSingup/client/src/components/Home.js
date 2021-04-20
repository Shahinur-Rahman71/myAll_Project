import React, { Component } from 'react';
import { getFromStorage, setInStorage } from '../utils/Storage';

// at the end of sign In you should be go browser inspect and type in the console : localStorage.clear()

class Home extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            token: '',
            signUpError: '',
            signInError: '',
            signInEmail: '',
            signInPassword: '',
            signUpfirstName: '',
            signUplastName: '',
            signUpEmail: '',
            signUpPassword: ''
        }
    }

    componentDidMount() {
        const obj = getFromStorage('The_home_app');       
        if (obj && obj.token) {
             const { token } = obj;
            // varify token
            fetch('/api/account/verify?token=' + token)
                .then(res => res.json())
                .then(jsondata => {
                    if (jsondata.success) {
                        this.setState({
                            token,
                            isLoading: false
                        });
                    } else {
                        this.setState({
                            isLoading: false
                        });
                    }
                });
        } else {
            this.setState({
                isLoading: false
            })
        }
    }

    // sign in
    onChangeSignInEmail = (e) => {
        this.setState({
            signInEmail: e.target.value
        })
    }
    onChangeSignInPassword = (e) => {
        this.setState({
            signInPassword: e.target.value
        })
    }
    // sign up
    onChangeSignUpfirstName = (e) => {
        this.setState({
            signUpfirstName: e.target.value
        })
    }
    onChangeSignUplastName = (e) => {
        this.setState({
            signUplastName: e.target.value
        })
    }
    onChangeSignUpEmail = (e) => {
        this.setState({
            signUpEmail: e.target.value
        })
    }
    onChangeSignUpPassword = (e) => {
        this.setState({
            signUpPassword: e.target.value
        })
    }

    // sign In
    onSignIn = () => {
        // post request form backend
        const {
            signInEmail,
            signInPassword
        } = this.state;

        this.setState({
            isLoading: true
        });

        fetch('http://localhost:8080/api/account/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                email: signInEmail,
                password: signInPassword
            }),           
        }).then(res =>res.json())
          .then(jsondata => {
                if(jsondata.success){
                    setInStorage('The_home_app', {token: jsondata.token});
                    this.setState({
                        signInError: jsondata.message,
                        isLoading: false,
                        signInEmail: '',
                        signInPassword: '',
                        token: jsondata.token
                    });
                }else {
                    this.setState({
                        signInError: jsondata.message,
                        isLoading: false,                       
                    });
                }

            });

    }

    // sign Up
    onSignUp = ()=> {
        // post request form backend
        const {
            signUpfirstName,
            signUplastName,
            signUpEmail,
            signUpPassword
        } = this.state;

        this.setState({
            isLoading: true
        });

        fetch('http://localhost:8080/api/account/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: signUpfirstName,
                lastName: signUplastName,
                email: signUpEmail,
                password: signUpPassword
            }),           
        }).then(res =>res.json())
          .then(jsondata => {
                if(jsondata.success){
                    this.setState({
                        signUpError: jsondata.message,
                        isLoading: false,
                        signUpfirstName: '',
                        signUplastName: '',
                        signUpEmail: '',
                        signUpPassword: ''
                    });
                }else {
                    this.setState({
                        signUpError: jsondata.message,
                        isLoading: false,                       
                    });
                }

            });

    }

    // log out
    logOut = () => {
        this.setState({
            isLoading: true
        });

        const obj = getFromStorage('The_home_app');      
        if (obj && obj.token) {
             const { token } = obj;
            // varify token
            fetch('/api/account/logout?token=' + token)
                .then(res => res.json())
                .then(jsondata => {
                    if (jsondata.success) {
                        this.setState({
                            token: '',
                            isLoading: false
                        });
                    } else {
                        this.setState({
                            isLoading: false
                        });
                    }
                });
        }

    }

    render() {
        const {
            isLoading,
            token,
            signInError,
            signInEmail,
            signInPassword,
            signUpfirstName,
            signUplastName,
            signUpEmail,
            signUpPassword,
            signUpError
        } = this.state;

        if (isLoading) {
            return (<div><h1>Loading</h1></div>)
        }

        if (!token) {
            return (
                <div>

                    <div>
                        {
                            (signInError) ? (
                                <p>{signInError}</p>
                            ) : null
                        }
                        <p>Sign In</p>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={signInEmail}
                            onChange={this.onChangeSignInEmail}
                        /><br/><br/>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={signInPassword}
                            onChange={this.onChangeSignInPassword}
                        /><br /><br/>
                        <button onClick={this.onSignIn}>Sign In</button>
                    </div> <br /><br />

                    <div>
                        {
                            (signUpError) ? (
                                <p>{signUpError}</p>
                            ) : null
                        }

                        <p>Sign Up</p>
                        <input
                            type="text"
                            placeholder="Enter your first name"
                            value={signUpfirstName}
                            onChange={this.onChangeSignUpfirstName}
                        /><br /><br/>
                        <input
                            type="text"
                            placeholder="Enter your last name"
                            value={signUplastName}
                            onChange={this.onChangeSignUplastName}
                        /><br /><br/>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={signUpEmail}
                            onChange={this.onChangeSignUpEmail}
                        /><br /><br/>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={signUpPassword}
                            onChange={this.onChangeSignUpPassword}
                        /><br /><br/>
                        <button onClick={this.onSignUp}>Sign Up</button>
                    </div>

                </div>
            )
        }

        return (
            <div>
                <h1>Account</h1>
                <button onClick={this.logOut}>LoguOut</button>
            </div>
        );
    }

}

export default Home;