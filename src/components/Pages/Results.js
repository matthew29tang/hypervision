import React from 'react';
import PostList from '../posts/PostList.js';
import './Pages.css';

class Results extends React.Component {

    render() {
        return (
            <div className="head">
                <h2>Results</h2>
                <PostList />
            </div>
        );
    }
}

export default Results;