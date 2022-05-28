import React, {useState} from 'react';
import Post from "./Post"

const PostList = () => {

    let [postList, setPostList] = useState([
        {
            id: 0,
            author: "Author 1",
            content: "Lorem1 ipsum dolor sit amet"
        },
        {
            id: 1,
            author: "Author 2",
            content: "Lorem2 ipsum dolor sit amet"
        },
        {
            id: 2,
            author: "Author 3",
            content: "Lorem3 ipsum dolor sit amet"
        }
    ])

    return (
        <div>
            {postList.map(post =>
                <Post id={post.id} author={post.author} content={post.content} />
            )}
        </div>
    );
};

export default PostList;