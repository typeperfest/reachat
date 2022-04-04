import React, {useState} from 'react';
import Post from "./Post"
import './styles/feedContentStyles.css'

const PostList = () => {

    let [postList, setPostList] = useState([
        {
            id: 0,
            author: "1",
            content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolor dolore eaque. Cumque distinctio dolore dolores enim est incidunt odio provident voluptatibus? Aliquid aperiam aspernatur assumenda cupiditate deleniti fugit id illum inventore ipsum itaque iure magnam minus nihil nisi nobis officiis perferendis praesentium provident quaerat quia quod repellat sint, tempora tenetur totam vel velit. Adipisci aliquam at aut, blanditiis cumque dignissimos, dolorum, id impedit mollitia nisi omnis porro quibusdam quis quod quos repellat unde vero? Alias animi beatae culpa distinctio ea, eos illo, ipsam libero magni natus placeat quia sit. Consequatur debitis dicta doloremque eius incidunt, iste nobis possimus rerum!</p>
        },
        {
            id: 1,
            author: "Author 1000000",
            content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolor dolore eaque. Cumque distinctio dolore dolores enim est incidunt odio provident voluptatibus? Aliquid aperiam aspernatur assumenda cupiditate deleniti fugit id illum inventore ipsum itaque iure magnam minus nihil nisi nobis officiis perferendis praesentium provident quaerat quia quod repellat sint, tempora tenetur totam vel velit. Adipisci aliquam at aut, blanditiis cumque dignissimos, dolorum, id impedit mollitia nisi omnis porro quibusdam quis quod quos repellat unde vero? Alias animi beatae culpa distinctio ea, eos illo, ipsam libero magni natus placeat quia sit. Consequatur debitis dicta doloremque eius incidunt, iste nobis possimus rerum!</p>
        },
        {
            id: 2,
            author: "Author 3",
            content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolor dolore eaque. Cumque distinctio dolore dolores enim est incidunt odio provident voluptatibus? Aliquid aperiam aspernatur assumenda cupiditate deleniti fugit id illum inventore ipsum itaque iure magnam minus nihil nisi nobis officiis perferendis praesentium provident quaerat quia quod repellat sint, tempora tenetur totam vel velit. Adipisci aliquam at aut, blanditiis cumque dignissimos, dolorum, id impedit mollitia nisi omnis porro quibusdam quis quod quos repellat unde vero? Alias animi beatae culpa distinctio ea, eos illo, ipsam libero magni natus placeat quia sit. Consequatur debitis dicta doloremque eius incidunt, iste nobis possimus rerum!</p>
        },
        {
            id: 3,
            author: "Author 4",
            content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolor dolore eaque. Cumque distinctio dolore dolores enim est incidunt odio provident voluptatibus? Aliquid aperiam aspernatur assumenda cupiditate deleniti fugit id illum inventore ipsum itaque iure magnam minus nihil nisi nobis officiis perferendis praesentium provident quaerat quia quod repellat sint, tempora tenetur totam vel velit. Adipisci aliquam at aut, blanditiis cumque dignissimos, dolorum, id impedit mollitia nisi omnis porro quibusdam quis quod quos repellat unde vero? Alias animi beatae culpa distinctio ea, eos illo, ipsam libero magni natus placeat quia sit. Consequatur debitis dicta doloremque eius incidunt, iste nobis possimus rerum!</p>
        },
        {
            id: 4,
            author: "Author 5",
            content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolor dolore eaque. Cumque distinctio dolore dolores enim est incidunt odio provident voluptatibus? Aliquid aperiam aspernatur assumenda cupiditate deleniti fugit id illum inventore ipsum itaque iure magnam minus nihil nisi nobis officiis perferendis praesentium provident quaerat quia quod repellat sint, tempora tenetur totam vel velit. Adipisci aliquam at aut, blanditiis cumque dignissimos, dolorum, id impedit mollitia nisi omnis porro quibusdam quis quod quos repellat unde vero? Alias animi beatae culpa distinctio ea, eos illo, ipsam libero magni natus placeat quia sit. Consequatur debitis dicta doloremque eius incidunt, iste nobis possimus rerum!</p>
        },
        {
            id: 5,
            author: "Author 6",
            content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolor dolore eaque. Cumque distinctio dolore dolores enim est incidunt odio provident voluptatibus? Aliquid aperiam aspernatur assumenda cupiditate deleniti fugit id illum inventore ipsum itaque iure magnam minus nihil nisi nobis officiis perferendis praesentium provident quaerat quia quod repellat sint, tempora tenetur totam vel velit. Adipisci aliquam at aut, blanditiis cumque dignissimos, dolorum, id impedit mollitia nisi omnis porro quibusdam quis quod quos repellat unde vero? Alias animi beatae culpa distinctio ea, eos illo, ipsam libero magni natus placeat quia sit. Consequatur debitis dicta doloremque eius incidunt, iste nobis possimus rerum!</p>
        },
        {
            id: 6,
            author: "Author 7",
            content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolor dolore eaque. Cumque distinctio dolore dolores enim est incidunt odio provident voluptatibus? Aliquid aperiam aspernatur assumenda cupiditate deleniti fugit id illum inventore ipsum itaque iure magnam minus nihil nisi nobis officiis perferendis praesentium provident quaerat quia quod repellat sint, tempora tenetur totam vel velit. Adipisci aliquam at aut, blanditiis cumque dignissimos, dolorum, id impedit mollitia nisi omnis porro quibusdam quis quod quos repellat unde vero? Alias animi beatae culpa distinctio ea, eos illo, ipsam libero magni natus placeat quia sit. Consequatur debitis dicta doloremque eius incidunt, iste nobis possimus rerum!</p>
        },
        {
            id: 7,
            author: "Author 8",
            content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolor dolore eaque. Cumque distinctio dolore dolores enim est incidunt odio provident voluptatibus? Aliquid aperiam aspernatur assumenda cupiditate deleniti fugit id illum inventore ipsum itaque iure magnam minus nihil nisi nobis officiis perferendis praesentium provident quaerat quia quod repellat sint, tempora tenetur totam vel velit. Adipisci aliquam at aut, blanditiis cumque dignissimos, dolorum, id impedit mollitia nisi omnis porro quibusdam quis quod quos repellat unde vero? Alias animi beatae culpa distinctio ea, eos illo, ipsam libero magni natus placeat quia sit. Consequatur debitis dicta doloremque eius incidunt, iste nobis possimus rerum!</p>
        }
    ])

    return (
        <div className={"postList"}>
            {postList.map(post =>
                <Post key={post.id} author={post.author} content={post.content} />
            )}
        </div>
    );
};

export default PostList;