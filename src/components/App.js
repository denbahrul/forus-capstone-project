import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AddPage from "../pages/addPage";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import Navbar from "./Navbar";
import {LeftBar, RightBar} from "./SideBar";


function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="wrapper">
        <LeftBar />
        <main>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/addArgument" element={<AddPage />} />
          <Route path="/argument/:id" element={<DetailPage />} />
        </Routes>
        </main>
        <RightBar />
      </div>
    </div>
  );
}

export default App;
