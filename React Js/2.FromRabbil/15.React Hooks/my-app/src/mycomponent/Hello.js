import React, { useState, Fragment, useEffect } from 'react';

const Hello = () => {

    const [count,setCount]=useState(0);

    useEffect(()=>{
        document.title=`You Clicked ${count} times.`;
    })

    return (
        <Fragment>
            <p>You picked {count} times.</p>
            
            <button onClick={()=>setCount(count+1)}>Click</button>
        </Fragment>
    );
};

export default Hello;