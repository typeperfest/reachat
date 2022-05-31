import React from 'react';
import './styles/inputStyles.css'

const NamedInput = (props) => {
    return (
        <div className={"namedInput"}>
            <div className={"name"}> {props.inputName + ':'} </div>
            <input className={"input"} type="text" onChange={ event => props.onChange(props.inputName, event.target.value) } />
        </div>
    );
};


export default NamedInput;