import { useState, useEffect } from "react";
import { getAllAuthors } from "../../services/getAllAuthors";

import { Link } from "react-router-dom";

const AllAuthors = () => {
    const [authors, setAuthors] = useState ([]);

    useEffect(() => {
        getAllAuthors()
            .then(author => setAuthors(author))
    }, []);


    return (
        <div className="w-75 mx-auto text-center mt-5">
            <h2 className="mb-4">AUTHORS ({authors.length-1})</h2>
            {
                authors.map((author, index) => {
                    return <h4 className="border-bottom mb-3 py-2 text-start" key={index} id={author.id}><Link to={{
                        pathname: `/author/${author.id}`,
                        state: {
                            author
                        }
                    }} className="text-reset text-decoration-none">{author.name}</Link></h4>
                })
            }
        </div>
        
    )
};

export default AllAuthors;