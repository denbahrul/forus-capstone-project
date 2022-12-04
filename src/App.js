import { useState, useEffect } from "react";
import React from "react";
import SearchPages from "./pages/SearchPages";
import SearchCategories from "./pages/SearchCategories";
import SearchOutput from "./pages/SearchOutput";

import API from "./utils/api";

function App() {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [categoriesSearch, setCategoriesSearch] = useState('search');

  const storeData = (val) => {
      setData(val);
  }
  const searchEventHandler = (e) => {
      e.preventDefault();
        fetch(API.BASE_URL + "?" + categoriesSearch + "=" + keyword)
        .then((response) => response.json())
        .then((actualData) => 
          storeData(actualData)
        )
        .catch((err) => {
          console.log(err.message);
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
          <SearchPages searchEventHandler={searchEventHandler} setKeyword={setKeyword}  />
          <SearchCategories searchCategoriesEvent={searchCategoriesEvent} />
          <SearchOutput output={data} />
          </div>
        </div>
       </div>
     </div>
  );
}

export default App;
