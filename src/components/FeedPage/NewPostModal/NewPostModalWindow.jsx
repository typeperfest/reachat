import React from 'react';
import './modal.css'

const NewPostModalWindow = (props) => {
    return (
        <div className={props.active ? "modal active" : "modal"} onClick={() => props.setActive(false)} >
            <div className={props.active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    );
};

export default NewPostModalWindow;