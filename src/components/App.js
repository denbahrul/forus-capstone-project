import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AddPage from "../pages/AddPage";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";

function App() {
  return (
    <div className="app-container">
      <main>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/addArgument" element={<AddPage />} />
        <Route path="/argument/:id" element={<DetailPage />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
