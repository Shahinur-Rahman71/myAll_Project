import React, { Component } from 'react';

class AdvancedState extends Component {
    constructor(){
        super();
        this.state={
            biodata: false
        }
        //this.togglebutton = this.togglebutton.bind(this);
    }

    togglebutton = ()=>{
        this.setState({
            biodata: !this.state.biodata
        })
    }

    render() {

        return (
            <div className="App">
                <h4 style={{backgroundColor: "red"}}>Advanced label code</h4>
                {
                    this.state.biodata ? (
                        <div>
                            <h4>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h4>  
                            <button onClick={this.togglebutton}>Show less</button>
                        </div>
                    ): (
                        <div>
                            <button onClick={this.togglebutton}>Read More</button>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default AdvancedState;