import React from "react";


const SearchPages = ({searchEventHandler}) => {
    return (
        <div>
            <label>Search : </label>
            <input type="text"  onChange={(e) => searchEventHandler(e.target.value)} className="form-control" placeholder="Coba cari disini ..." />
        </div>
    );
}

export default SearchPages;