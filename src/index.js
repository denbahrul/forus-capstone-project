<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import './styles/main.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <App />,
);
=======
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
import "./styles/login-register.css"
import "./styles/responsive.css"

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
>>>>>>> 0c6b958eb18968813849f74ca0e3bb2728174f0a
