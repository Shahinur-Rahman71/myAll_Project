import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

class GetData extends Component {

    constructor(){
        super();
        this.state = {
            myname:[]
        }
    }

    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response=>{
            this.setState({myname:response.data})
            // console.log(response.data);
        })
        .catch(error=>{
            console.log(error);
        })


    }

    render() {

        const CountryList = this.state.myname;
        const mylist= CountryList.map((mymethod)=>{
            return <li>{mymethod.name}</li>
        })
        return (
            <div>
                <ul>
                    {mylist}
                </ul>
            </div>
        );

    }
}

export default GetData;