import React from 'react';
import './TopLevelStyles/footerStyles.css'

const Footer = (props) => {
    return (
        <div className={props.fixed ? "footer absoluteBottom" : "footer"}>
            <div className={"copyright"}> created by typeperfest @PerfestS </div>
        </div>
    );
};

export default Footer;