import React from 'react';
import './styles/roundButtonStyles.css'

const NewPostButton = (props) => {
    return (
        <button className={"roundButton"} onClick={props.onClick}/>
    );
};

export default NewPostButton;