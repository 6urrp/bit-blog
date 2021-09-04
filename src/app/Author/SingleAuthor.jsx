import { Fragment, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { getAuthor } from "../../services/getAuthor";
import AuthorName from "./AuthorName";
import AuthorAddress from "./AuthorAddress";
import AuthorCompany from "./AuthorCompany";

const SingleAuthor = (props) => {
    const [singleAuthor, setSingleAuthor] = useState(null)
    useEffect(() => {
        getAuthor(props.location.state.author.id)
            .then(single => setSingleAuthor(single))
    }, []);

    return (
        !singleAuthor ? <h2>Loading</h2>
        :
        <Fragment>
            <div className="w-75 mx-auto mt-3">
                <p><Link to="/authors"> &#60; Back</Link></p>
                <AuthorName author={singleAuthor} />
                <AuthorAddress author={singleAuthor} />
                <AuthorCompany author={singleAuthor} />
            </div>
        </Fragment>
        
    )
}

export default SingleAuthor;