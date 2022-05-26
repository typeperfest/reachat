import React from 'react';
import UserInputForm from './GeneralComponents/UserInputForm'

const Login = () => {

    return (
        <div>
            <UserInputForm fieldsNamesList={[{id: 0, name: "Login"}, {id: 1, name: "Password"}]} buttonText={"login"} />
        </div>
    );
};

export default Login;