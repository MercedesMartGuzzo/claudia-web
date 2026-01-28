import "./Presentacion.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Presentacion() {
  const sectionRef = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    const p = pRef.current;
    const section = sectionRef.current;

    section.style.minHeight = "100vh";
    const split = new SplitText(p, { type: "words" });

    // Guardar las palabras que están dentro de los highlight
    const highlightWords = p.querySelectorAll(".highlight *");

    // Color inicial para todo el texto (excepto los highlight)
    split.words.forEach((word) => {
      if (![...highlightWords].includes(word)) {
        gsap.set(word, { color: "var(--clr-back3)" });
      }
    });

    // Animación del background con efecto radial
 /*    gsap.to(".presentacion", {
      "--radius": "150%",
      scrollTrigger: {
        trigger: ".presentacion",
        start: "top center",
        end: "bottom center",
        scrub: 1.5,
        markers: false,
      },
    }); */

    // Animación general (solo para palabras normales)
    gsap.to(split.words, {
      color: "#003C43",
      stagger: 1.4,
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 60%",
        end: "bottom bottom",
        scrub: 3,
      },
      onUpdate: () => {
        // Mantener el color fijo en los highlight
        highlightWords.forEach((el) => {
          gsap.set(el, 
            { color: "#77B0AA" }
          );
        });
      },
    });

    return () => split.revert();
  }, []);




  return (
    <div className="section presentacion" ref={sectionRef}>
      <div className="wrapp-presentacion container">
        <p ref={pRef} className="presentacion-p">
          Mi enfoque integral en la gestión cultural abarca desde el{" "}
          <span className="highlight">management</span>{" "}y la{" "}
          <span className="highlight dos">producción</span>{" "}hasta la{" "}
          <span className="highlight tres">interpretación cultural</span>. Propongo unir a los artistas con oportunidades claves para su desarrollo. Al seguir activa como violoncellista freelance y docente, me mantengo en constante contacto con el mundo artístico, lo que me permite aportar una visión fresca y auténtica a cada proyecto.
        </p>

      </div>
    </div>
  );
}
