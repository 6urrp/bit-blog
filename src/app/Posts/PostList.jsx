import { useState } from "react";
import { useEffect } from "react";

import Post from "./Post";
import { getPosts } from "../../services/getPosts";

import "./PostList.css"

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(allPosts => {
            setPosts(allPosts);
        })
    }, []);

    return (
        <div className="w-75 mx-auto">
            <h2 className="text-center mb-5">POSTS</h2>
            {
            posts.map((post, index) => 
                <Post post={post} key={index} />
            )
            }
        </div>
    )
};

export default PostList;