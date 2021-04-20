const { BYE_CAKE } = require("./CakeTypes")

const initialState = {
    numberOfCake: 10
}
const CakeReducer = (state = initialState, action ) => {
    switch(action.type) {
        case BYE_CAKE : return {
            ...state,
            numberOfCake: state.numberOfCake - action.payload
        }
        default: return state
    }
}

export default CakeReducer;