//Concurrently run client+server use => npm run dev
import React, { Component } from 'react';
import './Customers.css'
class Customers extends Component {

    constructor(){
        super();
        this.state = {
          information: []
        }
      }
    
      componentDidMount(){
    
        fetch('/api/customer')
          .then(data => data.json())
          .then(res => {
            this.setState({information: res},()=> console.log('Customer fetched ', res));
          })
    
      }

    render() {
        return (
          <div>
            <h1>Customers</h1>
            <ul>
              {this.state.information.map((method) => (
                <li key={method.id}>
                  {method.fname} {method.lname}
                </li>
              ))}
            </ul>
          </div>
        );
    }
}

export default Customers;