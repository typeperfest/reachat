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

    function searchButtonClicked() {
        console.log("Search clicked")
    }

    return (
        <div className={"navBar"}>
            <NavBarButton onClick={myPostsButtonClicked} text={"My Posts"} />
            <NavBarButton onClick={allPoststButtonClicked} text={"All Posts"} />
            <NavBarButton onClick={searchButtonClicked} text={"Search"} />
        </div>
    );
};

export default NavBar;