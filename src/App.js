import { useState, useEffect } from "react";
import React from "react";
import SearchPages from "./pages/SearchPages";
import SearchCategories from "./pages/SearchCategories";
import API from "./utils/api";
import appendData from "./utils/appendData";

function App() {
  const [data, setData] = useState([]);
  const [categoriesSearch, setCategoriesSearch] = useState('search');

  const storeData = (val) => {
    setData(val)
    if(val.length == 0){
      document.querySelector('.search-content').style.display = 'none';
    }else{
      document.querySelector('.search-content').style.display = 'block';
    }
  }
  const searchEventHandler = (val) => {
    const isEmpty = str => !str.trim().length;
    if(isEmpty(val)){
      document.querySelector('.search-content').style.display = 'none';
    }else{
        fetch(API.BASE_URL + "?" + categoriesSearch + "=" + val)
        .then((response) => response.json())
        .then((actualData) => 
          storeData(actualData)
        )
        .catch((err) => {
          console.log(err.message);
        });
    }
  }

  const searchCategoriesEvent = (el)=>{
    setCategoriesSearch(el.target.value);
  }

  return (
    <div className="app-container">
     <div className="container">
       <div className="row justify-content-center">
        <div className="col-md-6">
          <SearchPages searchEventHandler={searchEventHandler} />
          <SearchCategories searchCategoriesEvent={searchCategoriesEvent} />
          <div className="search-content">
            <ul>
            {
              data.map((item) => (
                <li key={item.id}><a href={item.id}>{item.title}</a></li>
              ))
            }
            </ul>
          </div>
        </div>
       </div>
     </div>
    </div>
  );
}

export default App;
