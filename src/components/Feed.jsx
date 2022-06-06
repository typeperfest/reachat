import React, {useState} from 'react';

import NavBar from './GeneralComponents/NavBarComponents/NavBar'
import NewPostButton from './FeedPage/NewPostButton'
import NewPostModalWindow from './FeedPage/NewPostModalWindow'
import FeedContent from './FeedPage/FeedContent'
import Footer from './GeneralComponents/Footer'

const Feed = () => {

    let [isModalActive, setIsModalActive] = useState(false)

    return (
        <div>
            <NavBar/>
            <FeedContent/>
            <NewPostButton onClick={() => setIsModalActive(true)}/>
            <NewPostModalWindow active={isModalActive} setActive={setIsModalActive}/>
            <Footer/>
        </div>
    );
};

export default Feed;