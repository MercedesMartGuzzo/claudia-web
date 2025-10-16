import Hero from './components/Hero';
import Presentacion from './components/Presentacion';
import Mannager from './components/Mannager';
import Producccion from './components/Produccion';
import "./main.css";
 import Cellista from './components/Cellista'; 

export default function App() {
  return (
    <>
      <Hero />
      <section className='section presentacion' id="inicio">
        <Presentacion />
      </section>
      <section className='section mannager' id="management">
        <h2 className='section-title container'>Management</h2>
        <Mannager />
      </section>
      <section className='section produccion' id="produccion">
        <h2 className='section-title'>Producción</h2>
        <Producccion/>
      </section>
      <section className='section cellista' id="cellista">
        <h2 className='section-title'>Cellista</h2>
       <Cellista/>
      </section>
      <section className='section contacto' id="contacto">
        <h2 className='section-title'>Contacto</h2>
      </section>
  
    </>
  );
}
