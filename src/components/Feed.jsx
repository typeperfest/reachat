import React, {useState} from 'react';

import NavBar from './FeedPage/NavBar'
import NewPostButton from './FeedPage/NewPostButton'
import NewPostModalWindow from './FeedPage/NewPostModalWindow'
import FeedContent from './FeedPage/FeedContent'

const Feed = () => {

    let [isModalActive, setIsModalActive] = useState(false)

    return (
        <div>
            <NavBar/>
            <FeedContent/>
            <NewPostButton onClick={() => setIsModalActive(true)}/>
            <NewPostModalWindow active={isModalActive} setActive={setIsModalActive}/>
        </div>
    );
};

export default Feed;