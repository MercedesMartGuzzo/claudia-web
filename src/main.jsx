
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
/* import { StrictMode } from 'react' */
/* import { createRoot } from 'react-dom/client' */
import Header from './components/Header';
import App from './App';
import Quinteto from './components/Quinteto';
import Duo from './components/Duo';
import Footer from './components/Footer';
import Salgan from './components/Salgan';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quinteto" element={<Quinteto />} />
        <Route path="/duo" element={<Duo />} />
        <Route path="*" element={<Salgan />} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);
