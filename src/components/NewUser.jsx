import React from 'react';
import UserInputForm from './GeneralComponents/UserInputForm'
import Footer from './Footer'

import './TopLevelStyles/inputFormStyles.css'

const NewUser = () => {
    return (
        <div className={"form register"}>
            <p className={"registerQuote"}>register as a new user</p>
            <UserInputForm fieldsNamesList={ [ {id: 0, name: "login"},
                                               {id: 1, name: "email"},
                                               {id: 2, name: "password"},
                                               {id: 3, name: "confirm password"} ] }
                           buttonText={"register"} />
            <Footer fixed={true}/>
        </div>
    );
};


export default NewUser;