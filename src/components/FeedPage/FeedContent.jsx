import React from 'react';
import PostList from './PostList'
import './styles/postStyles.css'

const FeedContent = () => {
    return (
        <div class={"feedContent"}>
            <PostList/>
        </div>
    );
};

export default FeedContent;