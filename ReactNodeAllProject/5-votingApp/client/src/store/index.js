import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const default_state = {
    error: {
        message: null
    }
}

export const store = createStore(
    rootReducer,
    default_state
)