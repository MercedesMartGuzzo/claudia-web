import './main.css'
import Hero from './components/Hero';
import Header from './components/Header';
import Presentacion from './components/Presentacion';
import Footer from './components/Footer';
import Mannager from './components/Mannager';
import Quinteto from './components/Quinteto';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <>
      <Hero />
      <section className='section presentacion'><Presentacion /></section>
      <section className='section mannager' id="management">
        <h2 className='section-title container'>Management</h2>
        <Mannager/>
      </section>
      <section className='section clases' id="produccion"><h2 className='section-title'> Producción</h2></section>
      <section className='section cellista' id="cellista"><h2 className='section-title'>Cellista</h2></section>
      <section className='section contacto' id="contacto"><h2 className='section-title'>Contacto</h2></section>
      <Footer/>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quinteto" element={<Quinteto />} />
      </Routes>
    </Router>
  );
}
