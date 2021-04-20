import React from 'react';
import { connect } from 'react-redux';
import { byeCake } from '../redux/cake/CakeActions';

const CakeContainer = (props) => {
    return (
        <div>
            <h1>Number of Cake: {props.numberOfCake}</h1>
            <button onClick={props.add}>Bye Cake</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state)
    return {
        numberOfCake: state.numberOfCake
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: () => dispatch(byeCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer);