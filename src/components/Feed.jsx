import React from 'react';

import NavBar from './FeedPage/NavBar'
import PostList from './FeedPage/PostList'
import NewPostButton from './FeedPage/NewPostButton'

const Feed = () => {
    return (
        <div>
            <NavBar/>
            <PostList/>
            <NewPostButton/>
        </div>
    );
};

export default Feed;