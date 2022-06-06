import React from 'react';
import NavBar from '../GeneralComponents/NavBarComponents/NavBar'
import ProfileCard from './ProfileCard'
import Footer from '../GeneralComponents/Footer'
import PostList from '../GeneralComponents/PostComponents/PostList'

import './profileStyles.css'

const Profile = () => {
    return (
        <div className={"profileWrapper"}>
            <NavBar/>
            <ProfileCard profileName={"Specified Name"}/>
            <PostList/>
            <Footer/>
        </div>
    );
};

export default Profile;