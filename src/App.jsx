import './main.css'
import Hero from './components/Hero';
import Header from './components/Header';
import Presentacion from './components/Presentacion';
import Footer from './components/Footer';





function App() {
  return (
    <>
      <Header />
      <Hero />
      <section className='section presentacion'><Presentacion /></section>
      <section className='section mannager' id="management"><h2 className='section-title container'> Management</h2> </section>
      <section className='section clases' id="produccion"><h2 className='section-title'> Produccion</h2></section>
      <section className='section cellista' id="cellista"><h2 className='section-title'>Cellista</h2> </section>
    {/*   <section className='section bio' id="bio"><h2 className='section-title'> Bio</h2></section> */}
      <section className='section contacto' id="contacto"><h2 className='section-title'>Contacto</h2></section>
      <Footer/>
    </>
  );
}


export default App
