import { incrementValue, decrementValue} from '../type';

const initialValue = {
    count: 1
}

export default function(state = initialValue, action) {

    switch(action.type) {
        case incrementValue :
            return {
                ...state,
                count: state.count + action.payload
            }
        case decrementValue : 
            return {
                ...state,
                count: state.count - action.payload
            }
        default: return state
    }
}