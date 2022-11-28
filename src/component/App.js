import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPages from "../pages/LoginPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
