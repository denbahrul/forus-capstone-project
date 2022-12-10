import React from "react";

function SearchBar({keyword, keywordChange}){
    return(
        <div className="search-bar">
        <input 
            type="text"
            placeholder="Coba cari ekonomi ..."
            value={keyword}
            onChange={(event) => keywordChange(event.target.value)}
            />
        </div>
    )
}

export default SearchBar;