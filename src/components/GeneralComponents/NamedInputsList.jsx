import React, {useEffect, useState} from 'react';
import NamedInput from './NamedInput'

const NamedInputsList = (props) => {
    return (
        <div>
            {
                props.fieldsNamesList.map(field =>
                 <NamedInput onChange={props.onChange} inputName={field.name} key={field.id} />
            )}
        </div>
    );
};

export default NamedInputsList;