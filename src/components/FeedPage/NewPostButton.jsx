import React from 'react';

const NewPostButton = () => {

    function newPostButtonClicked() {
        console.log("New post clicked")
    }

    return (
        <button onClick={newPostButtonClicked} >
            +
        </button>
    );
};

export default NewPostButton;