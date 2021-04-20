import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
class Welcome extends Component {

    state={
        postdata: []
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            this.setState({postdata: response.data})
        })
        .catch(error=>{
            alert(error);
        })
    }

    render() {

        // console.log(this.state);
        // const netdata=this.state.postdata;
        // const mapdata=netdata.map(method=>{
        //     return <li key={method.id}>{method.title}</li>
        // });

        let {postdata}= this.state

        if(postdata.length===0){
            return(
                <h3 className="text-center">Loading...</h3>
            )
        }else{
            return (
                        
                <div>
                    <ul className="list-group my-3">
                        {postdata.map(method=>{
                            return <li className="list-group-item" key={method.id}>{method.title}</li>
                        })}                    
                    </ul>
                </div>
            );
        }


        
    }
}

export default Welcome;