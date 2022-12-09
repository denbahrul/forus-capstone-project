import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

import "./styles/main.css";
import "./styles/add.css";
import "./styles/detail.css";
import "./styles/loader.css";
import "./styles/post.css";
import "./styles/navigation.css";


const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
