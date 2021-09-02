import { useState, useEffect } from "react";
import { getAllAuthors } from "../../services/getAllAuthors";

const AllAuthors = () => {
    const [authors, setAuthors] = useState ([]);

    useEffect(() => {
        getAllAuthors()
            .then(author => setAuthors(author))
    }, [])

    return (
        <div className="w-75 mx-auto text-center mt-5">
            <h2 className="mb-4">AUTHORS ({authors.length-1})</h2>
            {
                authors.map((author, index) => <h4 className="border-bottom mb-3 py-2 text-start" key={index}>{author.name}</h4>)
            }
        </div>
        
    )
};

export default AllAuthors