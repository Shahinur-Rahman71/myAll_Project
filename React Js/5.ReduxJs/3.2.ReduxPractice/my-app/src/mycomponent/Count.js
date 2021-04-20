import React from 'react';
import { connect } from 'react-redux'; 
// store and Count will be connnected by connect

const Count = (props) => {
    return (
        <div>
            <h1>{props.count}</h1>
        </div>
    );
};

// by default ai function ta akta state pai
const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps) (Count);
// connect function ta redux er store er sathe Count er connection ghotabe.
// connect akta component or function return korbe jar sathe Count argument hobe.