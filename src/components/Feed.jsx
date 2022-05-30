import React, {useState} from 'react';

import NavBar from './FeedPage/NavBar'
import PostList from './FeedPage/PostList'
import NewPostButton from './FeedPage/NewPostButton'
import NewPostModalWindow from './FeedPage/NewPostModalWindow'

const Feed = () => {

    let [isModalActive, setIsModalActive] = useState(false)

    return (
        <div>
            <NavBar/>
            <PostList/>
            <NewPostButton onClick={() => setIsModalActive(true)}/>
            <NewPostModalWindow active={isModalActive} setActive={setIsModalActive}/>
        </div>
    );
};

export default Feed;