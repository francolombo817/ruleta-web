import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Ruleta from './componentes/Ruleta';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ruleta" element={<Ruleta />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
