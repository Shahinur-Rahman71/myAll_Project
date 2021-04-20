import React, { Component } from 'react';
import { createStore} from 'redux'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Basic extends Component {
    render() {
        //redux state means application state
        //A reducer function must have two parameters.
        // State, Action // state={} this is empty object
        const reducer = (state= {}, action) =>{
            if(action.type === 'A')
            {
                return{   
                    ...state,
                    A: 'I am A'
                }
            }
            if(action.type === 'C')
            {
                return{   
                    ...state,
                    C: 'I am C'
                }
            }
            return state
        }

        const store = createStore(reducer)
        // const store = createStore(reducer, "currentState") 
        // second argument is initial state value but in the reducer function you will be declere
        // like (state, action)

        // store.subscribe(()=> {
        //     console.log(store.getState())
        // })
        // store.subscribe(()=> {
        //     console.log(store.getState().A)
        // })
        store.subscribe(()=> {
            console.log(store.getState().C)
        })

        store.dispatch({type: "C"})//dispatch means event.
        store.dispatch({type: "something..."})
        store.dispatch({type: "A"})
        store.dispatch({type: "something..."})
        // type or payload dui tai useable

        return (
            <div>
                <h3>ok! Done</h3>
            </div>
        );
    }
}

export default Basic;