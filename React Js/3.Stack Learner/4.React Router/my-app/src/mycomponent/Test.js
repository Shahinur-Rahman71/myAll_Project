import React from 'react';
import { Link } from 'react-router-dom';

const Test = ({match}) => {
    
    return (
        <div>
            <h4>Hi, I am Test {match.params.postId}</h4>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default Test;