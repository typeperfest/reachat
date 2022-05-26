import React from 'react';

const NamedInput = (props) => {
    return (
        <div>
            <div> {props.inputName + ':'} </div>
            <input type="text" onChange={ event => props.onChange(props.inputName, event.target.value) } />
        </div>
    );
};


export default NamedInput;