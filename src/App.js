import { useState, useEffect } from "react";
import React from "react";
import SearchPages from "./pages/SearchPages";
import API from "./utils/api";
import appendData from "./utils/appendData";

function App() {
  const [data, setData] = useState([]);

  const searchEventHandler = (val) => {
    let content = document.querySelector('.search-content');
    let html = `<ul>`;
    if(val.length != 0){
      let newData = data.reduce(function (i, v) {
        if (v.title.search(val) + 1) {
          return i.concat(v);
        } else {
          return i
        }
      }, []);
      for(let i = 0; i < newData.length; i++){
        html += `
          <li><a href="${newData[i].id}">${newData[i].title}</a></li>
        `;
      }

      if(newData.length == 0){
        content.innerHTML = `<center><small>Data tidak ditemukan<small></center>`
      }else{
        content.innerHTML = html;
      }
      html += `</ul>`;
      content.style.display = "block";
    }else{
      content.innerHTML = ``;
      content.style.display = "none";
    }

  }
  
  useEffect(() => {
    fetch(API.BASE_URL)
     .then((response) => response.json())
     .then((actualData) => 
      setData(appendData(actualData))
     )
     .catch((err) => {
      console.log(err.message);
     });
   }, []);

  return (
    <div className="app-container">
     <div className="container">
       <div className="row justify-content-center">
        <div className="col-md-6">
          <SearchPages searchEventHandler={searchEventHandler} />
          <div className="search-content">
           
          </div>
        </div>
       </div>
     </div>
    </div>
  );
}

export default App;
