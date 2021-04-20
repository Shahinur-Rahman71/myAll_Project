import React, { Component } from 'react';
import axios from 'axios'

class PostData extends Component {

    constructor(){
        super()
        this.state ={
            postvalue: " ",
            resultvalue: " "
        }
    }

    OnchangeHandler =(event)=>{
        var getvalue= event.target.value;
        this.setState({postvalue: getvalue})
    }
    OnclickHandler =()=>{
        axios.post('here we add url',this.state.postvalue)
        .then(response=>{
            this.setState({resultvalue: response.data})
            alert(this.state.resultvalue)
        })
        .catch(error=>{
            alert(error);
        })
    }

    render() {
        return (
            <div className="App">
                <input onChange={this.OnchangeHandler} type="text"/>
                <input onClick={this.OnclickHandler} type="submit" value="submit"/>
            </div>
        );
    }
}

export default PostData;