import React from 'react';
import { connect } from 'react-redux';

const ItemContainer = (props) => {
    return (
        <div>
            <h4>Item - {props.item}</h4>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.numberOfCake : 'No Cake';
    return {
        item: itemState
    }
}

export default connect(mapStateToProps) (ItemContainer);