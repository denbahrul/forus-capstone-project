import { useState, useEffect } from "react";
import React from "react";

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
      html += `</ul>`;
      content.innerHTML = html;
      content.style.display = "block";
    }else{
      content.innerHTML = ``;
      content.style.display = "none";
    }

    
  }
  const appendData = (data) => {
    let newData = [];
    var i;
    for (i = 0; i < data.length; i++) { 
      for(let j = 0; j < data[i].post.length; j++){
        newData.push(data[i].post[j])
      }
    }
    return (newData)
  }
  useEffect(() => {
    fetch(`https://63660b33046eddf1baf77f68.mockapi.io/api/v1/user`)
     .then((response) => response.json())
     .then((actualData) => 
      setData(appendData(actualData))
     )
     .catch((err) => {
      console.log(err.message);
     });
   }, []);

   console.log(data)
  return (
    <div className="app-container">
     <div className="container">
       <div className="row justify-content-center">
        <div className="col-md-6">
          <div>
            <label>Search : </label>
            <input type="text"  onChange={(e) => searchEventHandler(e.target.value)} className="form-control" placeholder="Coba cari disini ..." />
          </div>
          <div className="search-content">
           
          </div>
        </div>
       </div>
     </div>
    </div>
  );
}

export default App;
