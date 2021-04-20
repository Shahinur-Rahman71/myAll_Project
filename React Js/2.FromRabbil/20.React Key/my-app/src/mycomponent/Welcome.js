import React, { Fragment } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


function Listname(props){
    const listnames=props.itemlist;
    return(
        
            <li >{listnames}</li>
    );
}
function Namelist(props){

    const items = props.items;
    const fromnamelist= items.map((mymethod)=>
        <Listname key={mymethod.toString()} itemlist={mymethod}/>
    );
    return(
        <Fragment>
            <h1>Incorrect key usages example</h1>
            <ol>{fromnamelist}</ol>
        </Fragment>
    )
}
function Welcome(){

    const listarray=['shanto','johir','raihana','jasim','juwel','readul'];
    return (
        <Fragment>
            <Namelist items={listarray}/> 
        </Fragment>
              
    )

}

export default Welcome;