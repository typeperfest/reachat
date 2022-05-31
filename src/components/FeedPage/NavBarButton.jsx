import React from 'react';
import './styles/navBarStyles.css'

const NavBarButton = (props) => {

    return (
        <button className={props.isFloatingRight ? "navButton right" : "navButton" } onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export default NavBarButton;