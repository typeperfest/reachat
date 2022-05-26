import React from 'react';

const ConfirmDataButton = (props) => {
    return (
        <button onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export default ConfirmDataButton;