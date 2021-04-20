import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'; // logger is middleware

const BYE_CAKE = 'withMoney ';
const FREE_CAKE = 'withoutMoney';

const byeCake = () => ({
    type: BYE_CAKE,
    info: 'this is amazing'
});

const freeCake = () => ({
    type: FREE_CAKE,
    info: 'this is hot news'
});
const initialByeCakeState = {
    cakePrice : 10
}
const initialFreeCakeState = {
    freeCakePrice : 10
}

const byeCakeReducer = (state = initialByeCakeState, action) => {
    switch(action.type) {

        case BYE_CAKE : 
            return {
                ...state,
                cakePrice: state.cakePrice + 1
            }
        default: return state
    }
}
const freeCakeReducer = (state = initialFreeCakeState, action) => {
    switch(action.type) {

        case FREE_CAKE : {
            return {           
                freeCakePrice: state.freeCakePrice - 10,
                News: action.info
            }
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    byeCake : byeCakeReducer,
    freeCakeReducer
})
const store = createStore(
    rootReducer,
    applyMiddleware(logger)
); // crreateStore only contain one Reducer.

store.subscribe( () => {
    // console.log(store.getState());
});

store.dispatch(byeCake())
store.dispatch(byeCake())
store.dispatch(freeCake())

const BuyCake = () => {
    return (
        <div>
            <h1>This is Buy Cake session. Go ahead man...</h1>
        </div>
    );
};

export default BuyCake;