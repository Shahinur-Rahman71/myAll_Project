import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../services/actions/counterAction';

const Counter = ({increment, decrement, count}) => {
    return (
        <div>
            <h1>Count : {count}</h1>
            <input onClick={ () => increment(5)} className="btn btn-outline-dark mt-3 mr-1" type="button" value="add"/>
            <input onClick={ () => decrement(5)} className="btn btn-outline-dark mt-3" type="button" value="sub"/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    count: state.counterReducer.count
})

export default connect(mapStateToProps, { increment, decrement}) (Counter);