import React, { useState } from 'react';
import './App.css'

const Hooks = ()=> {

    const [count, setCount] = useState(0);

    const Increment = ()=> {
        setCount(count + 1)
    }

    const Decrement = ()=> {
        setCount(count -1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    )
}

export default Hooks;