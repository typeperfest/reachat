import React, {useState} from 'react';

import NavBar from './FeedPage/NavBar'
import NewPostButton from './FeedPage/NewPostButton'
import NewPostModalWindow from './FeedPage/NewPostModalWindow'
import FeedContent from './FeedPage/FeedContent'
import Footer from './Footer'

const Feed = () => {

    let [isModalActive, setIsModalActive] = useState(false)

    return (
        <div>
            <NavBar/>
            <FeedContent/>
            <NewPostButton onClick={() => setIsModalActive(true)}/>
            <NewPostModalWindow active={isModalActive} setActive={setIsModalActive}/>
            <Footer fixed={false}/>
        </div>
    );
};

export default Feed;