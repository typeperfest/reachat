import React, {useState, useEffect}  from 'react';
import ConfirmDataButtom from './ConfirmDataButton'
import NamedInputsList from './NamedInputsList'
import './styles/inputStyles.css'

const UserInputForm = (props) => { // has (str)buttonText, (str[])fieldsNames

    let [inputUserData, setInputUserData] = useState( { } )

    function userInnputDataChanged(fieldName, value) {
        let currData = inputUserData
        currData[fieldName] = value
        setInputUserData(currData)
    }

    function confirmNewUser(data) {
        console.log(inputUserData)
    }

    return (
        <div className={"userInputForm"}>
            <NamedInputsList fieldsNamesList={props.fieldsNamesList} onChange={userInnputDataChanged}/>
            <ConfirmDataButtom onClick={confirmNewUser} text={props.buttonText}/>
        </div>
    );
};

export default UserInputForm;