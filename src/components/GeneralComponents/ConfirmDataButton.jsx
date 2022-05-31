import React from 'react';
import './styles/buttonStyles.css'

const ConfirmDataButton = (props) => {
    return (
        <button className={"confirmButton"} onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export default ConfirmDataButton;