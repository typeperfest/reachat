import React from 'react';
import './profileStyles.css'

const ProfileCard = (props) => {
    return (
        <div className={"profileCard"}>
            <p> {props.profileName} </p>
        </div>
    );
};

export default ProfileCard;