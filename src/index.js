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