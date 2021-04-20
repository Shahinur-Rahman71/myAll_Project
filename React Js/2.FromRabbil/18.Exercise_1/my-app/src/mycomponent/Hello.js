import React, { Component } from 'react';

function Namelists(props){

    const myLists=props.myLists;
    const listitems =myLists.map((mapmethod)=>{
        return <li key={mapmethod}>{mapmethod}</li>
    });

    return(
        <div>
            <h1>Rendering list inside Components</h1>
            <ol>{listitems}</ol>
        </div>
    );

}

class Hello extends Component {
    render() {
        const myLists = ['Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa'];
        return (
            <div>
                <Namelists myLists={myLists}/>
            </div>
        );
    }
}

export default Hello;