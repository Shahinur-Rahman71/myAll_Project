import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { byeCake } from '../redux/cake/CakeActions';

const HookCakeContainer = () => {
    const numberOfCake = useSelector(state => state.numberOfCake);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Number of Cake Using Hook: {numberOfCake}</h1>
            <button onClick={() => dispatch(byeCake())}>Bye Cake</button>
        </div>
    );
};

export default HookCakeContainer;