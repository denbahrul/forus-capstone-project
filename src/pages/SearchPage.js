import { useState, useEffect } from "react";
import React from "react";
import SearchBar from "../components/SearchBar";
import SearchCategories from "../components/SearchCategories";
import SearchOutput from "../components/SearchOutput";
import SearchLoading from "../components/SearchLoading";

import {API} from "../utils/api";

function SearchPage() {
  const [data, setData] = useState(['empty']);
  const [keyword, setKeyword] = useState('');
  const [categoriesSearch, setCategoriesSearch] = useState('search');
  const [isLoading, setIsLoading] = useState(false);

  const storeData = (val) => {
      setData(val);
      setIsLoading(false);
  }
  const searchEventHandler = (e) => {
      setIsLoading(true);
      e.preventDefault();
        fetch(API.BASE_URL + "?" + categoriesSearch + "=" + keyword)
        .then((response) => response.json())
        .then((actualData) => 
          storeData(actualData)
        )
        .catch((err) => {
          console.log(err.message);
          setIsLoading(false);
        });
  }

  const searchCategoriesEvent = (el)=>{
    setCategoriesSearch(el.target.value);
  }

  return (
    <div className="app-container">
     <div className="container">
       <div className="row justify-content-center">
        <div className="col-md-6">
          <SearchBar searchEventHandler={searchEventHandler} setKeyword={setKeyword}  />
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
