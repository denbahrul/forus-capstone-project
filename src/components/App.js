import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AddPage from "../pages/addPage";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import {BottomNavbar, Navbar} from "./Navbar";
import {LeftBar, RightBar} from "./SideBar";
import SearchPage from "../pages/SearchPage";
import {API} from "../utils/api";
import TrendingPage from "../pages/TrendingPage";
import NewsPage from "../pages/NewsPage";

function App() {
  const [authedUser] = useState(localStorage.getItem('id'));
  const navigate = useNavigate();
  const [data, setData] = useState(['empty']);
  const [keyword, setKeyword] = useState('');
  const [categoriesSearch, setCategoriesSearch] = useState('search');
  const [isLoading, setIsLoading] = useState(false);

  const storeData = (val) => {
      setData(val);
      setIsLoading(false);
  }
  const searchEventHandler = (e) => {
    navigate("/search");
      setIsLoading(true);
      e.preventDefault();
        fetch(API.BASE_URL + "?" + categoriesSearch + "=" + keyword)
        .then((response) => response.json())
        .then((actualData) => 
          storeData(actualData)
        )
        .catch((err) => {
          console.log(err.message);
          setIsLoading(true);
        });
  }

  const searchCategoriesEvent = (el)=>{
    setCategoriesSearch(el.target.value);
  }

  if (authedUser === null) {
    return (
      <div className="app-container">
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
      </div>
    );
  }
  return (
    <div className="app-container">
      <Navbar searchEventHandler={searchEventHandler} setKeyword={setKeyword}/>
      <div className="wrapper">
        <LeftBar />
        <main>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/addArgument" element={<AddPage />} />
          <Route path="/argument/:id" element={<DetailPage />} />
          <Route path="/search" element={<SearchPage searchCategoriesEvent={searchCategoriesEvent} isLoading={isLoading} data={data} />} />
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
        </main>
        <RightBar />
      </div>
      <BottomNavbar />
    </div>
  );
}

export default App;
