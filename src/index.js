import React from "react";
import { createRoot } from "react-dom/client";
import App from "./component/App";

import "./styles/main.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
