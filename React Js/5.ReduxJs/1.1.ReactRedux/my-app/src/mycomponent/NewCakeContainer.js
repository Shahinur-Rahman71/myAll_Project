import React,{ useState } from 'react';
import { connect } from 'react-redux';
import { byeCake } from '../redux/cake/CakeActions';

const NewCakeContainer = (props) => {
    const [number, setNumber] = useState(1);
    return (
        <div>
            <h1>Number of Cake: {props.numberOfCake}</h1>
            <input type="text" value={number} onChange={ (e) => setNumber(e.target.value)}/>
            <button onClick={() => props.add(number)}>Bye {number} Cake</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        numberOfCake: state.numberOfCake
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (number) => dispatch(byeCake(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (NewCakeContainer);