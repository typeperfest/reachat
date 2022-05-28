import React from 'react';

const RegularButton = (props) => {
    return (
        <button onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export default RegularButton;