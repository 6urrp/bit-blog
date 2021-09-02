import { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";

import { getSinglePost } from "../../services/getSinglePost";
import { getAuthor } from "../../services/getAuthor";
import { getPostsFromAuthor } from "../../services/getPostsFromAuthor";

const SinglePost = props => {
    const [singlePost, setSinglePost] = useState(null);
    const [author, setAuthor] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getSinglePost(props.match.params.id)
            .then(singlePost => setSinglePost(singlePost))
    }, [])

    useEffect(() => {
        if(singlePost) {
            getAuthor(singlePost.userId)
            .then(author => setAuthor(author));
        }
    }, [singlePost])

    useEffect(() =>{
        if(author) {
            getPostsFromAuthor(author.id)
            .then(posts => setPosts(posts));
            localStorage.setItem("authorId", author.id)
        }
    },[author])



    return (
            !author
            ? <h1>Loading...</h1>
            : <Fragment>
            <div className="w-75 mx-auto mt-3">
                <p><Link to="/"> &#60; Back</Link></p>
            </div>
            <div className="text-center w-75 mx-auto mt-5 border-bottom">
                <h3>{singlePost.title}</h3>
                <h5 className="mb-5"><Link to={`/author/${author.id}`}>{author.name}</Link></h5>
                <p>{singlePost.body}</p>
            </div>
            <div className="w-75 mx-auto mt-3">
                <h3>{posts.length} more posts from the same author</h3>
                <ul className="ps-0">
                    {
                        posts.map((post, index) => <li className="fs-5" key={index}> <Link to="/">{index+1}. {post.title.slice(0, 7)} - {post.body.slice(0, 15)}</Link></li>)
                    }
                </ul>
            </div>
        </Fragment>
    )
}

export default SinglePost;