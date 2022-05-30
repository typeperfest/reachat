import React from 'react';
import './styles/roundButton.css'

const NewPostButton = (props) => {
    return (
        <button className={"roundButton"} onClick={props.onClick} >
            +
        </button>
    );
};

export default NewPostButton;