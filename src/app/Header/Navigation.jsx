import { Link } from "react-router-dom";

import "./Navigation.css";

const Navigation = () => {
    return (
        <ul className="d-flex">
            <li className="pe-3 border-end"><Link to="/" className="nav-link active">Home</Link></li>
            <li className="px-3 border-end"><Link to="/authors" className="nav-link active">Authors</Link></li>
            <li className="ps-3"><Link to="/about" className="nav-link active">About</Link></li>
        </ul>
    )
};

export default Navigation;