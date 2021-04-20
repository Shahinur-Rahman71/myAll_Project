import React, { Component, createRef } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
let initialstate={
    name: "",
    email: "",
    password: "",
    textarea: "",
    selectbox: '',
    radiobox: "",
    checkbox: "",
    skill: []

}
class Formdesign extends Component {

    constructor(){
        super();
        this.input = React.createRef();
        //for clear inputfield
    }

    // state=initialstate
    state={
        ...initialstate
    };

    Change=(event)=>{
        if(event.target.type==='checkbox'){
            if(event.target.checked){
                this.setState({
                    ...this.state,
                    skill: this.state.skill.concat(event.target.value)
                })
            }else{
                this.setState({
                    ...this.state,
                    skill: this.state.skill.filter(skill=>skill !== event.target.value)
                })
            }

        }else{
            let allname=event.target.name;
            let allvalue=event.target.value;
            this.setState({
                [allname]: allvalue
            });
        }
        
    }

    submitHandler=(event)=>{
        console.log(this.state);
        event.preventDefault();
        this.input.current.reset()
        this.setState({
            ...initialstate
        })
    }

    render() {
        
        return (
            <div>

                <form onSubmit={this.submitHandler} ref={this.input} className="border border-info p-5">

                    <div className="form-row ">
                        <div className="form-group col-md-6">
                            <label>Input :  {this.state.name}</label>
                            <input onChange={this.Change} type="text" name="name" value={this.state.name} className="form-control" placeholder="Enter your full name"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Input :  {this.state.email}</label>
                            <input onChange={this.Change} type="email" name="email" value={this.state.email} className="form-control" placeholder="Enter your email address"/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Input :  {this.state.password}</label>
                            <input onChange={this.Change} type="password" name="password" value={this.state.password} className="form-control" placeholder="Enter your full password"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Input :  {this.state.textarea}</label>
                            <textarea onChange={this.Change} type="text" value={this.state.textarea} name="textarea" className="form-control" placeholder="Enter your bio"/>
                        </div>
                    </div>
                    

                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputState">State</label>
                            <select onChange={this.Change} id="inputState" name="selectbox" className="form-control">
                                <option >Choose your country..</option>
                                <option>Bangladesh</option>
                                <option>India</option>
                                <option>Pakistan</option>
                                <option>Napal</option>
                                <option>Bhutan</option>
                            </select>
                        </div>                       
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">

                            <div className="form-check">
                                <input onChange={this.Change} className="form-check-input" type="radio" name="radiobox" id="exampleRadios1" value="Male" />
                                <label  htmlFor="exampleRadios1">
                                    Male
                                </label>
                            </div>

                            <div className="form-check">
                                <input onChange={this.Change} className="form-check-input" type="radio" name="radiobox" id="exampleRadios2" value="Female" />
                                <label  htmlFor="exampleRadios2">
                                    FeMale
                                </label>
                            </div>

                            <div className="form-check">
                                <input onChange={this.Change} className="form-check-input" type="radio" name="radiobox" id="exampleRadios3" value="Other" />
                                <label  htmlFor="exampleRadios3">
                                    Other
                                </label>
                            </div>

                        </div>

                        <div className="form-group col-md-6">
                            <div className="form-check">
                                <input name="checkbox" onChange={this.Change} className="form-check-input position-static" type="checkbox" id="blankCheckbox1" value="JavaScript"/>
                                <label className="form-check-label mx-2" htmlFor="blankCheckbox1">
                                    JavaScript
                                </label>
                            </div>
                            <div className="form-check">
                                <input name="checkbox" onChange={this.Change} className="form-check-input position-static" type="checkbox" id="blankCheckbox2" value="React Js"/>
                                <label className="form-check-label mx-2" htmlFor="blankCheckbox2">
                                    React Js
                                </label>
                            </div>
                            <div className="form-check">
                                <input name="checkbox" onChange={this.Change} className="form-check-input position-static" type="checkbox" id="blankCheckbox3" value="Node Js"/>
                                <label className="form-check-label mx-2" htmlFor="blankCheckbox3">
                                    Node Js
                                </label>
                            </div>
                        </div>
                        
                                               
                    </div>

                    <button type="submit"  className="btn btn-dark btn-block">Submit</button>

                </form>

            </div>
        );
    }
}

export default Formdesign;