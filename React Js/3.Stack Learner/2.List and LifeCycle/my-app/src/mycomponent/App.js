import React, { Component } from 'react';
import './App.css';
import Welcome from './Books/Welcome'

class App extends Component {

  constructor(){
    super();
    console.log("App Constructor");
    //code for component life cycle
  }


  componentDidMount(){
    console.log("App componentDidMount");
  }
  componentDidUpdate(){
    console.log("App componentDidUpdate");
  }

  state={
    person:[
      {
        bookname: 'bangla',
        author: 'almain ahamed',
        id: 1
      },
      {
        bookname: 'english',
        author: 'jolill ahamed',
        id: 2
      },
      {
        bookname: 'math',
        author: 'khalill ahamed',
        id: 3
      }
    ]
  }
deletebutton=(id)=>{
  let newperson=this.state.person.filter(method=>method.id !== id );
  this.setState({
    person: newperson
  })
}

edithandler=(bookname,id)=>{
    let newperson = this.state.person.map(method=>{

      if(id===method.id){
        return{
          ...method,
          bookname
        }
      }

      return method;
    });
    this.setState({
      person: newperson
    })
}

  render() {
    console.log("App render");
    return (
      <div className="mt-5">
        <Welcome 
            deletehandler={this.deletebutton.bind(this)} 
            person={this.state.person}
            edithandler={this.edithandler.bind(this)}
        />
      </div>
    );
  }
}

export default App;
