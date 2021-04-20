import React,{Component} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class BigForm extends Component{
    constructor(){
        super();
        this.state = {
            fname: " ",
            lname: " ",
            email: " ",
            mobileno: " "
        }
    }

    Bigformfunction = (event) =>{
        var inputname = event.target.name;
        var inputvalue = event.target.value;
        this.setState ({
            [inputname]: inputvalue
        });
        
        //Form validation        
        if(inputname==="fname"){
            var patternName = /^([a-zA-Z ]){2,30}$/;
            if(!patternName.test(inputvalue)){
                this.setState({fname: "Fname is not valid."});
            }
        }
        if(inputname==="lname"){
            var patternName = /^([a-zA-Z ]){2,30}$/;
            if(!patternName.test(inputvalue)){
                this.setState({lname: "lname is not valid."});
            }
        }
        if(inputname==="email"){
            var patternName = /([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})/;
            if(!patternName.test(inputvalue)){
                this.setState({email: "Email is not valid."});
            }
        } 
        if(inputname==="mobileno"){
            
            if(!Number(inputvalue)){
                this.setState({mobileno: "Mobile no is not valid."});
            }
        }
    }

    render(){
        return (
            <div className="App">
                <h2 className="bg-dark my-3 text-light">Big form for OnChange event</h2>
                <b>FirstName : {this.state.fname}</b><br></br>
                <b>LastName : {this.state.lname}</b><br></br>
                <b>Email : {this.state.email}</b><br></br>
                <b>Mobil No : {this.state.mobileno}</b><br></br>
                <form className="border m-5">
                    <input onChange={this.Bigformfunction} className="inputborder my-2" name="fname" type="text" placeholder="Enter your first name.." ></input> <br></br>
                    <input onChange={this.Bigformfunction} className="inputborder my-2" name="lname" type="text" placeholder="Enter your last name.." ></input> <br></br>
                    <input onChange={this.Bigformfunction} className="inputborder my-2" name="email" type="email" placeholder="Enter your email.." ></input> <br></br>
                    <input onChange={this.Bigformfunction} className="inputborder my-2" name="mobileno" type="text" placeholder="Enter your mobile no.." ></input> <br></br>
                    <input className="btn btn-outline-dark my-3" value="submit" type="submit"></input>
                </form>
            </div>
        )
    }
}

export default BigForm;