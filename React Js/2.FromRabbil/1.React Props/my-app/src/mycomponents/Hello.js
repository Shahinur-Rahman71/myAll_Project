import React from 'react'


function Hello(props){

    function fn(a){
        alert(a)
    }
    return (
        <div>
            <h2>Hello I am from functional components.</h2>
            <h1>Name : {props.name} and Age : {props.age}</h1>
            {/* button click korar por fn kaj korbe.
            <button onClick={fn}>Functional button1</button> */}
            <button onClick={fn.bind(this,"This is function")}>Functional button1</button>
            {/* button click korar age fn() kaj korbe. */}
            <button onClick={fn()}>Functional button2</button>
        </div>
    )
}

export default Hello