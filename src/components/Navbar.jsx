import React from "react";
import SearchBar from "./SearchBarr";

function Navbar() {
    return (
        <nav>
            <h1>ForUs</h1>
            <SearchBar />
            <div className="post-avatar"></div>
        </nav>
    )
}

export default Navbar;