import React, { Component } from 'react'

class Welcome extends Component{
    save(aa){
        alert(aa);
    }
    render(){
        const props=this.props;
        return(
            <div className="App">
                <h2>Hello, I am from Class components.</h2>
                <h1>District : {props.district}</h1>
                <button onClick={() =>this.save()}>Classical button1</button>
                {/* <button onClick={this.save}>Classical button2</button> */}
                <button onClick={this.save.bind(this,"This is Classical button.")}>Classical button2</button>
            </div>
        );
    }
}

export default Welcome;