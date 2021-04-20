import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h4>Buddy! I am home page Powered By Shanto</h4>
                <Link to="/posts/post-1">Post-1</Link>
                <Link to="/posts/post-2">Post-2</Link>
                <Link to="/posts/post-3">Post-3</Link>
            </div>
        );
    }
}

export default Home;