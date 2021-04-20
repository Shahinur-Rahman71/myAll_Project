import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class Welcome extends Component{

     Agelistfunction = (agemethod) =>{
        return <option key={agemethod.id}>{agemethod.age}</option>
    }

    render(){

        const mylist=[
            {
                id: 1,
                name: "Shahinur Rahman",
                age: 24
            },
            {
                id: 2,
                name: "Shanto Islam",
                age: "27"
            },
            {
                id: 3,
                name: "Abdur Rafiq",
                age: "26"
            }
        ]

        const Namelist = mylist.map(
            namemethod => {
                return(               
                    <li key={namemethod.id}>{namemethod.name}</li>               
                ) 
            }
        );

        const Agelist = mylist.map(this.Agelistfunction);

        return(

            <div >
                
                 <ul>{Namelist}</ul> 
               
                <select>{Agelist}</select>
            </div>
        )

    }
}

export default Welcome;