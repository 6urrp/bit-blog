import "./Header.css";

import Navigation from "./Navigation";

const Header = () => {
    return (
        <header className="w-75 mx-auto mt-4 d-flex justify-content-between">
            <h1>RND BLG</h1>
            <Navigation />
        </header>
    )
};

export default Header;