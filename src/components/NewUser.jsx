import React from 'react';
import UserInputForm from './GeneralComponents/UserInputForm'

import './TopLevelStyles/inputFormStyles.css'

const NewUser = () => {
    return (
        <div className={"form"}>
            <UserInputForm fieldsNamesList={ [ {id: 0, name: "login"},
                                               {id: 1, name: "email"},
                                               {id: 2, name: "password"},
                                               {id: 3, name: "confirm password"} ] }
                           buttonText={"register"} />
        </div>
    );
};


export default NewUser;