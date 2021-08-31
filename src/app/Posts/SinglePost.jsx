import { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";

import { getSinglePost } from "../../services/getSinglePost";
import { getAuthor } from "../../services/getAuthor";

const SinglePost = props => {
    const [singlePost, setSinglePost] = useState(null);
    const [author, setAuthor] = useState(null);

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
            <div>

            </div>
        </Fragment>
    )
}

export default SinglePost;