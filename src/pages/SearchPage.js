import React from "react";
import SearchCategories from "../components/SearchCategories";
import SearchOutput from "../components/SearchOutput";
import SearchLoading from "../components/SearchLoading";

function SearchPage({ searchCategoriesEvent, isLoading, data}) {

  return (
    <div className="app-container">
     <div className="container">
       <div className="row justify-content-center">
        <div className="col-md-6">
          <SearchCategories searchCategoriesEvent={searchCategoriesEvent} />
          {isLoading ? <SearchLoading /> :  
            <SearchOutput output={data} />
          }
          </div>
        </div>
       </div>
     </div>
  );
}

export default SearchPage;
