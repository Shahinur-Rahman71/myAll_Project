import React, { Component } from 'react';
import axios from 'axios'

// const BASE_URL="https://jsonplaceholder.typicode.com/"

class Postdata extends Component {

    state={
        name: "",
        capital: "",
        population: 27657145,
        isSubmitted: false,
        error: false
    }

    ChangeHandler=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    OnsubmitHandler=(event)=>{
        event.preventDefault();

        // axios.post(`${BASE_URL}/posts`,{
        axios.post('https://restcountries.eu/rest/v2/all',{
            name: this.state.name,
            capital: this.state.capital,
            population: this.state.population
        })
        .then(res=>{
            this.setState({
                isSubmitted: true,
                error: false
            })
            console.log(res);
        })
        .catch(error=>{
            this.setState({
                error: true,
                isSubmitted: false
            })
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.OnsubmitHandler}>
                    <div className="form-group">
                        <input
                            onChange={this.ChangeHandler}
                            type="text"
                            className="form-control my-1"
                            placeholder="Your text..."
                            name="name"
                            value={this.state.name}
                        />
                        <textarea
                            onChange={this.ChangeHandler}
                            placeholder="Your comment..."
                            name="capital"
                            value={this.state.capital}
                            className="form-control my-1"
                        />
                        <button type="submit" className="btn btn-info my-1">Submit</button>

                        {this.state.isSubmitted && <p>Form submited successfully.</p>}
                        {this.state.error && <p>Something happend worng</p>}
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default Postdata;