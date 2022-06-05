import React from 'react';
import UserInputForm from './GeneralComponents/UserInputForm'
import Logo from './GeneralComponents/Logo'
import Footer from './Footer'

import './TopLevelStyles/inputFormStyles.css'

const Login = () => {

    return (
        <div className={"form login"}>
            <Logo/>
            <p className={"tagline"}>For everyone to see your thoughts.</p>
            <UserInputForm fieldsNamesList={[{id: 0, name: "login"}, {id: 1, name: "password"}]} buttonText={"Sign in"} />
            <a href="/register">Don't have an account?</a>
            <Footer fixed={true}/>
        </div>
    );
};

export default Login;