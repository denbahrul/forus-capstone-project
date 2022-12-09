import React from "react";
import SearchBar from "./SearchBar";

function Navbar({searchEventHandler, setKeyword}) {
    return (
        <nav>
            <h1>ForUs</h1>
            <SearchBar searchEventHandler={searchEventHandler} setKeyword={setKeyword}  />
            <div className="post-avatar"></div>
        </nav>
    )
}

export default Navbar;