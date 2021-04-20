import React from 'react';
import './App.css';
import {createStore, combineReducers} from 'redux'
import {connect,Provider} from 'react-redux'
import Basic from './mycomponent/Basic';

//Action Type
const ADD_NUMBER ='add_number';
const SUBSTRACT_NUMBER = 'subtract_number';
//Action
const addAction = ()=>({ // ({}) means return {type: ADD_NUMBER,payload: 1}
  type: ADD_NUMBER,
  payload: 1
});
const subAction = ()=>({
  type: SUBSTRACT_NUMBER,
  payload: 1,
});

//Reducer
const mathReducer = (state={number: 0},action)=>{
  if(action.type=== ADD_NUMBER){
    return{
      ...state,
      number: state.number + action.payload
    }
  }else if(action.type === SUBSTRACT_NUMBER){
    return{
      ...state,
      number: state.number - action.payload
    }
  }

  return state;
}

//combineReducer
const rootReducer = combineReducers({
  math: mathReducer,
});

// store
const store = createStore(rootReducer);

//mapStateToProps
const mapStateToProps =(state)=>{
  return{
    number: state.math.number,
  }
};

//mapDispatchToProps
const mapDispatchToProps =(dispatch)=>({
  add: ()=>dispatch(addAction()),
  sub: ()=>dispatch(subAction())
});

const WithPayload=(props)=>{
  return(
    <div>
      <h3>Count : {props.number}</h3>
      <input onClick={props.add} className="btn btn-outline-dark mt-3 mr-1" type="button" value="add"/>
      <input onClick={props.sub} className="btn btn-outline-dark mt-3" type="button" value="sub"/>
    </div>
  )
}
const Connection =connect(mapStateToProps,mapDispatchToProps)(WithPayload);

const App =()=>{
  return(
    <div className="container mt-5">
      <Provider store={store}>
        <Connection/>
      </Provider>
      <Basic/>
    </div>
  )
}

export default App;
 