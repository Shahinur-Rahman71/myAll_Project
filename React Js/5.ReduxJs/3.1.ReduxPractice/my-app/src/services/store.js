import { createStore } from 'redux';

import rootReducer from './ruducers';

const initialState = {}

export const store = createStore(
    rootReducer,
    initialState
)