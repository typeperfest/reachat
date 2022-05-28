import React from 'react';

const Post = (props) => {
    return (
        <div>
            <div> {props.author} </div>
            <div> {props.content} </div>
        </div>
    );
};

export default Post;