import React from "react";
import HomePage from "./pages/HomePage";
import TrendingPage from "./pages/TrendingPage";
import { Routes, Route} from 'react-router-dom';
import Navigation from "./components/Navigation";
import DetailPage from "./pages/DetailPage";
// import Post from "./pages/post";

function App() {
  return (
    <div className="app-container">
      <h1>Hallo, Welcome in ForUs</h1>
      <Navigation />
      <main>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/trending" element={<TrendingPage />} />
      <Route path="/post/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
