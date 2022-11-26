import React from 'react';
import { createRoot } from 'react-dom/client';
import AddPage from './pages/addPage';

import './styles/main.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <AddPage />,
);