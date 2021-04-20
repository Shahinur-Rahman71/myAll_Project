import React, { Component} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'



class Jsonlist extends Component{

    Childrenfunction= (datacity)=>{
        return(
            <option>{datacity.zip}</option>
        )
    }

    render(){
        //create json array
        const mylist = [
            {
                city: "Rajshahi",
                zip: "1000"
            },
            {
                city: "Rangpur",
                zip: "1001"
            },
            {
                city: "Dhaka",
                zip: "1002"
            },
            {
                city: "Gopalgonj",
                zip: "1003"
            }
        ]
        const dataitemcity = mylist.map(
            (datacity)=>{
                return <option>{datacity.city}</option>
            }
        );
        const dataitemzip = mylist.map(this.Childrenfunction);

        return(
            <div>
                <button className="btn btn-danger btn-block mb-5">Json Array</button>
                <select>
                    {dataitemcity}
                </select>
                <select>
                    {dataitemzip}
                </select>
                
            </div>
        )
    }
}

export default Jsonlist;