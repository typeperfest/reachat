import React from 'react';
import UserInputForm from '../GeneralComponents/UserInputForm'
import Footer from '../GeneralComponents/Footer'

import '../TopLevelStyles/inputFormStyles.css'
import '../TopLevelStyles/wrapperStyles.css'

const NewUser = () => {
    return (
        <div className="wrapper">
            <div className={"form register"}>
                <p className={"registerQuote"}>register as a new user</p>
                <UserInputForm fieldsNamesList={ [ {id: 0, name: "login"},
                    {id: 1, name: "email"},
                    {id: 2, name: "password"},
                    {id: 3, name: "confirm password"} ] }
                               buttonText={"register"} />
                <a href="/login">Already have an account?</a>
            </div>
            <Footer/>
        </div>
    );
};


export default NewUser;