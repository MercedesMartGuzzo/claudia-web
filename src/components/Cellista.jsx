import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Cellista.css";

gsap.registerPlugin(ScrollTrigger);

export default function Cellista() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    // Detectar si estamos en desktop
    const isDesktop = window.innerWidth >= 1024;

    if (isDesktop) {
      // ancho total del contenido horizontal
      const scrollWidth = container.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = scrollWidth - viewportWidth;

      gsap.to(container, {
        x: -scrollDistance, // desplaza horizontalmente todo el contenedor
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "0 0",
          end: `+=${scrollWidth}`, // duración del scroll
          scrub: true,
          pin: true, // fija la sección mientras se desplaza horizontalmente
          anticipatePin: 1,
          repeat: -1
        },
      });
    }

    // cleanup al desmontar
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <section className="cellista" ref={sectionRef}>
      <div className="photo-grid" ref={containerRef}>
        <div><img src="./comuna12-locura.jpg" alt="comuna 12" /></div>
        <div><img src="./comuna12-b.jpg" alt="comuna 12" /></div>
        <div><img src="./claudia-cuarteto.jpg" alt="clauida sereni cuarteto" /></div>
        <div><img src="./claudia-galvan.jpg" alt="quinteto galvan" /></div>
        <div><img src="./alumnos.jpg" alt="concierto con alumnos" /></div>
      </div>
    </section>
  );
}
