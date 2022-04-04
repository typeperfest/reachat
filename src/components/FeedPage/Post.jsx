import React from 'react';
import './styles/feedContentStyles.css'

const Post = (props) => {
    return (
        <div className={"post"}>
            <div className={"postAuthor"}> {props.author} </div>
            <div className={"postContent"}> {props.content} </div>
        </div>
    );
};

export default Post;