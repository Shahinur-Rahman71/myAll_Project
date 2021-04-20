import React from 'react';
import {createStore} from 'redux';
import {connect,Provider} from 'react-redux';

//reducer
const rootReducer =(state ={count: 0}, action)=>{

    switch(action.type){
      case 'add' :{
          return{
            // ...state,
            count: state.count + action.payload,
          }
      }
      case 'sub' :{
          return{
            // ...state,
            count: state.count - action.payload
          }
      }
      default: return state
    }
}

//store
const store = createStore(rootReducer);

//mapStateToProps
const mapStateToProps = (state)=>({
  count: state.count
});

//mapDispatchToProps
const mapDispatchToProps = (dispatch)=>({
  add: ()=>{dispatch({type: "add", payload: 5})},
  sub: ()=>{dispatch({type: "sub", payload:6})}
});

const Controller =(props)=>{
  return(
    <div>
        <h3 className="mt-5">CountDown : {props.count} </h3>
        <button onClick={props.add}className="btn btn-outline-dark mt-3 mr-1">Add</button>
        <button onClick={props.sub}className="btn btn-outline-dark mt-3">Sub</button>
    </div>          
  );
}

const ConnectController = connect(mapStateToProps,mapDispatchToProps)(Controller);

const Basic = () => {
  return (
    <div>
      <Provider store={store}>
        <ConnectController/>
      </Provider>
    </div>
  );
};

export default  Basic;