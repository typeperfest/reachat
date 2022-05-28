import React from 'react';
import RegularButton from '../GeneralComponents/RegularButton'

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
        <div>
            <RegularButton onClick={myPostsButtonClicked} text={"My Posts"} />
            <RegularButton onClick={allPoststButtonClicked} text={"All Posts"} />
            <RegularButton onClick={searchButtonClicked} text={"Search"} />
        </div>
    );
};

export default NavBar;