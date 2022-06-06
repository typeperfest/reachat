import React from 'react';
import NavBarButton from './NavBarButton'
import './styles/navBarStyles.css'

const NavBar = () => {

    function myPostsButtonClicked() {
        console.log("My posts clicked")
    }

    function allPoststButtonClicked() {
        console.log("All posts clicked")
    }

    function logOutButtonClicked() {
        console.log("Log out clicked")
    }

    return (
        <div className={"navBar"}>
            <NavBarButton onClick={myPostsButtonClicked} text={"Profile"} />
            <NavBarButton onClick={allPoststButtonClicked} text={"Feed"} />
            <NavBarButton isFloatingRight={true} onClick={logOutButtonClicked} text={"Log out"}/>
        </div>
    );
};

export default NavBar;