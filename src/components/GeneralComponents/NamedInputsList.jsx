import React, {useEffect, useState} from 'react';
import NamedInput from './NamedInput'
import './styles/inputStyles.css'

const NamedInputsList = (props) => {
    return (
        <div className={"namedInputList"}>
            {
                props.fieldsNamesList.map(field =>
                 <NamedInput onChange={props.onChange} inputName={field.name} key={field.id} />
            )}
        </div>
    );
};

export default NamedInputsList;