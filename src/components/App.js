import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AddPage from "../pages/AddPage";

function App() {
  return (
    <div className="app-container">
      <main>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/addArgument" element={<AddPage />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
