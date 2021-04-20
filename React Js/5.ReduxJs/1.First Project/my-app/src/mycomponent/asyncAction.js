import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

const initialState = {
    loading: false,
    users: [],
    error: ''
}
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}
const fetchUserSuccess = (users) => ({
    type: FETCH_USER_SUCCESS,
    payload: users
});
const fetchUserFailure = (error) => ({
    type: FETCH_USER_FAILURE,
    payload: error
});

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_REQUEST : return {
            ...state,
            loading: true
        }
        case FETCH_USER_SUCCESS: return {
            loading: false,
            users: action.payload,
            error: ''
        }
        case FETCH_USER_FAILURE: return {
            loading: false,
            users: action.payload,
            error: ''
        }
        default: return state
    }
}

const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then( response => {
                // response.data is the array of users
                const users = response.data.map(user => user.id);
                dispatch(fetchUserSuccess(users));
            })
            .catch(err => {
                // err.message is the error description
                dispatch(fetchUserFailure(err.message))
            })
    }
}

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

store.subscribe( ()=> { console.log(store.getState())});
store.dispatch(fetchUsers());

const AsyncAction = () => {
    return (
        <div>
            <h1>This is Async Action Session. Practice make a man perfect.</h1>
        </div>
    );
};

export default AsyncAction;