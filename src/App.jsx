import './main.css'
import Hero from './components/Hero';
import Header from './components/Header';
import Presentacion from './components/Presentacion';





function App() {
  return (
    <>
      <Header />
      <Hero />
        <section className='section presentacion container'><Presentacion/></section>
      <section className='section mannager' id="mannager"><h2 className='section-title container'> Mannager</h2> </section>
      <section className='section cellista' id="cellista"><h2 className='section-title'>Cellista</h2> </section>
      <section className='section clases' id="clases"><h2 className='section-title'> Clases</h2></section>
      <section className='section bio' id="bio"><h2 className='section-title'> Bio</h2></section>
      <section className='section contacto' id="contacto"><h2 className='section-title'>Contacto</h2></section>

    </>
  );
}


export default App
