


import './main.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Header from './components/Header';




function App() {
  return (
    <>
      <Header />
      <Hero />
      <section className='section' id="mannager" style={{ height: "100vh", background: "#fcd5ce" }}><h2 className='section-title'> Mannager</h2> </section>
      <section className='section' id="cellista" style={{ height: "100vh", background: "#fae1dd" }}><h2 className='section-title'>Cellista</h2> </section>
      <section className='section' id="clases" style={{ height: "100vh", background: "#f8edeb" }}><h2 className='section-title'> Clases</h2></section>
      <section className='section' id="bio" style={{ height: "100vh", background: "#d8e2dc" }}><h2 className='section-title'> Bio</h2></section>
      <section className='section' id="contacto" style={{ height: "100vh", background: "#e8e8e4" }}><h2 className='section-title'>Contacto</h2> </section>

    </>
  );
}


export default App
