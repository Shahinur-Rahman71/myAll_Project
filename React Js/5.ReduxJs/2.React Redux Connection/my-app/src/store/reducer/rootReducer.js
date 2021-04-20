
const initialValue={
    count: 100
};

function rootReducer(state=initialValue,action){
    
    switch(action.type){
        case 'Add' : {
            return{
                count: state.count + 1
            }
        }
        case 'Sub' : {
            return{
                count: state.count - 1
            }
        }
        default: return state
    }
}

export default rootReducer;
