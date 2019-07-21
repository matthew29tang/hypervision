import React, { Component } from 'react';
import PostData from '../data/sampledata.json';

class PostList extends Component {
    render () {
        return (
            <div >
                {PostData.map((postDetail, index) => {
                    return <div>
                        <h3>Link: {postDetail.link}</h3>
                        <p>Click here to open URL</p>
                    </div>
                })}
            </div>
        )
    }
}

export default PostList;