import React from "react";

const SearchBar = ({searchEventHandler, setKeyword}) => {
    return (
        <div>
            <form onSubmit={(e) => searchEventHandler(e)}>
                <div>
                    <div className="search-bar">
                        <input type="text" onChange={(e) => setKeyword(e.target.value)}   className="form-control" placeholder="Coba cari disini ..." />
                        <button className="search-button">Cari</button>
                    </div>
                    <div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;