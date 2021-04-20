import React, { Component } from 'react';

class ListMap extends Component {
    constructor(){
        super();
        this.state={
            focus: ""
        }
    }
    Change=(event)=>{
        this.setState({
            focus: event.target.value
        })
    }
    render() {

        const list=[
            {name: 'shanto', age: 23},
            {name: 'salman', age: 24},
            {name: 'rafiq', age: 25}
        ]

        const result=list.map((Name,indexi)=>{
            return <option key={indexi}>{Name.name}</option>
        });

        const ageresult=list.map((Age,indexj)=>{
            return <option key={indexj}>{Age.age}</option>
        })

        return (
            <div>
                <h3>{this.state.focus}</h3>
                <select onClick={this.Change}>{result}</select>
                <select>{ageresult}</select>
            </div>
        );
        
    }
}

export default ListMap;