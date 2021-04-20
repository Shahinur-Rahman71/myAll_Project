import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../services/actions/counterAction';


const CounterTwo = () => {

    const count = useSelector( state => state.counterReducer.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Count : {count}</h1>
            <input onClick={ () => dispatch(increment(3))} className="btn btn-outline-dark mt-3 mr-1" type="button" value="add"/>
            <input onClick={() => dispatch(decrement(3))} className="btn btn-outline-dark mt-3" type="button" value="sub"/>
        </div>
    );
};

export default CounterTwo;