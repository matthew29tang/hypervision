import React, { Component } from 'react';
import PostData from '../data/sampledata.json';
import { Route, Link } from 'react-router-dom';

class PostList extends Component {

    render () {
        return (
            <div >
                {PostData.map((postDetail, index) => {
                    return <div>
                        <h3>Link: <a target="_blank" href={postDetail.link}> {postDetail.link}</a></h3>
                    </div>
                })}
            </div>
        )
    }
}

export default PostList;
