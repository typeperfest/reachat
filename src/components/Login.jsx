import React from 'react';
import UserInputForm from './GeneralComponents/UserInputForm'

const Login = () => {

    return (
        <div>
            <UserInputForm fieldsNamesList={[{id: 0, name: "Login"}, {id: 1, name: "Password"}]} buttonText={"Sign in"} />
            <a href="/register">Don't have an account?</a>
        </div>
    );
};

export default Login;