import React from "react";

const SearchPages = ({searchEventHandler, setKeyword}) => {
    return (
        <div>
            <form onSubmit={(e) => searchEventHandler(e)}>
                <div className="d-flex align-items-center gap-1 mt-3">
                    <div style={{width: "90%"}}>
                        <input type="text" onChange={(e) => setKeyword(e.target.value)}   className="form-control" placeholder="Coba cari disini ..." />
                    </div>
                    <div>
                    <button className="btn btn-light border">
                        &#x1F50E;&#xFE0E;
                    </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SearchPages;