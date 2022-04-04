import React from 'react';
import PostList from './PostList'
import './styles/feedContentStyles.css'

const FeedContent = () => {
    return (
        <div class={"feedContent"}>
            <PostList/>
        </div>
    );
};

export default FeedContent;