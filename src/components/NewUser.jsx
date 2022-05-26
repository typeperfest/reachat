import React from 'react';
import UserInputForm from './GeneralComponents/UserInputForm'

const NewUser = () => {
    return (
        <div>
            <UserInputForm fieldsNamesList={ [ {id: 0, name: "Login"},
                                               {id: 1, name: "Email"},
                                               {id: 2, name: "Password"},
                                               {id: 3, name: "Confirm password"} ] }
                           buttonText={"register"} />
        </div>
    );
};


export default NewUser;