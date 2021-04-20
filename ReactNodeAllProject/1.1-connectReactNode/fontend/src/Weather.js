import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Weather extends Component {
    constructor(){
        super();
        this.state = {
            weather: "Not set gotten"
        }
    }

    buttonHandle = ()=>{
        axios.get('/weather').then( response => {
            // console.log(response);
            this.setState({weather: response.data.temperature})
        })
    }

    render() {
        return (
            <div>
                <h1>The weather in rajshahi : {this.state.weather}</h1>
                <button onClick={this.buttonHandle}>Weather in Rajshahi</button>
            </div>
        );
    }
}

export default Weather;