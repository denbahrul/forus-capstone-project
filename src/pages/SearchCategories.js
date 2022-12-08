import React from "react";


const SearchCategories = ({searchCategoriesEvent}) => {
    return (
        <div className="my-2">
            <div className="form-check form-check-inline">
                <input type="radio"  onChange={(e) => searchCategoriesEvent(e)} className="form-check-input"  name="search_categories" id="flexRadioDefault1" value="search" defaultChecked={true}/>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Semua
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input type="radio"  onChange={(e) => searchCategoriesEvent(e)} className="form-check-input"  name="search_categories" id="flexRadioDefault2" value="title"/>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Bedasarkan judul
                </label>
            </div>
        </div>
    );
}

export default SearchCategories;