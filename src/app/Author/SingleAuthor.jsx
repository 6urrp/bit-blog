import { Fragment, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { getAuthor } from "../../services/getAuthor";
import AuthorName from "./AuthorName";
import AuthorAddress from "./AuthorAddress";

const SingleAuthor = () => {
    const [singleAuthor, setSingleAuthor] = useState(null)

    useEffect(() => {
        getAuthor(localStorage.authorId)
            .then(single => setSingleAuthor(single))
    }, []);

    console.log(singleAuthor)
    return (
        !singleAuthor ? <h2>Loading</h2>
        :
        <Fragment>
            <div className="w-75 mx-auto mt-3">
                <p><Link to="/authors"> &#60; Back</Link></p>
                <AuthorName author={singleAuthor} />
                <AuthorAddress author={singleAuthor} />
            </div>
        </Fragment>
        
    )
}

export default SingleAuthor;