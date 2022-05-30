import React, {useRef} from 'react';
import './styles/modal.css'
import ConfirmDataButton from '../GeneralComponents/ConfirmDataButton'

const NewPostModalWindow = (props) => {

    let inputContentRef = useRef()

    function newPostAdded(e) {
        let date = new Date();
        let stringDate = String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0')
            + '.' + date.getFullYear();
        let postObject = { author: 0, content: inputContentRef.current.value, date: stringDate}
        console.log(postObject)
        props.setActive(false)
    }

    return (
        <div className={props.active ? "modal active" : "modal"} onClick={() => props.setActive(false)} >
            <div className={props.active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
                <textarea ref={inputContentRef} className={"text__area"} />
                <ConfirmDataButton text={"Add"} onClick={newPostAdded}/>
            </div>
        </div>
    );
};

export default NewPostModalWindow;