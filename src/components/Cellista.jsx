/* import React, { useLayoutEffect, useRef } from "react"; */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Cellista.css";

gsap.registerPlugin(ScrollTrigger);

export default function Cellista() {
  /*  const containerRef = useRef(null); // ahora apuntamos al panel-container
   const panelsRef = useRef(null);
 
   useLayoutEffect(() => {
     const panelContainer = containerRef.current;
     const panels = panelsRef.current;
 
     if (window.innerWidth <= 768) return; */

  // Calcular distancia horizontal real
  /*   const totalScrollWidth = panels.scrollWidth;
    const viewportWidth = window.innerWidth;
    const distance = Math.max(0, totalScrollWidth - viewportWidth);

    // Animación horizontal
    const scrollTween = gsap.to(panels, {
      x: -distance,
      ease: "none",
      scrollTrigger: {
        trigger: panelContainer,     // 👈 el panel-container es el trigger
        pin: true,              // 👈 y también el que queda fijo
        start: "top top",
        end: () => `+=${distance}`,
        scrub: 1,
        // markers: true, // activá si querés ver la zona del pin
      },
    });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      scrollTween.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener("resize", onResize);
    };
  }, []); */

  return (
    <section className="awareness">
      {/*       <div className="container"> */}
      <div className="panel-container awareness"/*  ref={containerRef} */>
        <div className="panel-subcontainer">
          <div className="panel-flex photo-grid"/*  ref={panelsRef} */>
            <div className="panel" data-text=" Comuna 12 - Festival La Locura 2025">
              <img className="vertical" src="./comuna12-locura.jpg" alt="comuna 12"/>
            </div>
            <div className="one">
              <div className="panel one" data-text=" Comuna 12 - Festival La Locura 2025">
                <img src="./comuna12-b.jpg" alt="comuna 12 b" />
              </div>
              <div className="panel one" data-text=" Claudia Sereni Cuarteto - Festival La Locura 2025">
                <img src="./claudia-cuarteto.jpg" alt="claudia sereni cuarteto" />
              </div>
            </div>
            {/*   <div className="panel">
                <img src="./claudia-cuarteto.jpg" alt="claudia sereni cuarteto" />
              </div> */}
            <div className="two">
              <div className="panel two" data-text=" Quinteto Galván - Festival La Locura 2025">
                <img src="./claudia-galvan.jpg" alt="quinteto galvan" />
              </div>
              <div className="panel two" data-text=" Concierto con alumnos del Conservatorio Manuel  de Falla">
                <img src="./alumnos.jpg" alt="concierto con alumnos" />
              </div>
            </div>
            <div className="panel"data-text=" Premios Gardel 2024">
              <img className="vertical" src="./gardel.jpg" alt="Premios Grdel" />
            </div>
            {/*   <div className="panel">
                <img src="./alumnos.jpg" alt="concierto con alumnos" />
              </div> */}
            <div className="tree">
              <div className="panel tree"data-text="Trueno Sinfónico - Teatro Coliseo 2025">
                  <img src="./show-trueno1.jpg" alt="" />
                </div>
                <div className="panel tree" data-text="Trueno Sinfónico - Teatro Coliseo 2025">
                  <img src="./show-trueno2.jpg" alt="Show Trueno Sinfínico" />
                </div>
              </div>

              <div className="panel" data-text=" Grabación Ismael Serrano Sinfónico">
                <img className="verical" src="./grabacion-ismael.jpg" alt="Grabación Ismael Serrano" />
              </div>
              {/*  <div className="panel">
                <img src="./show-trueno2.jpg" alt="concierto con alumnos" />
              </div> */}
              <div className="tree">
                <div className="panel tree" data-text="Homenaje a Sandro - 2024">
                  <img src="./sandro.jpg" alt="Homenaje a Sandro" />
                </div>
                <div className="panel tree" data-text="Misa Criolla - Sagrada Familia 2024">
                  <img src="./sagradaflia.jpg" alt="Sagrada familia" />
                </div>
              </div>
              {/*  <div className="panel">
                <img src="./sagradaflia.jpg" alt="quinteto galvan" />
              </div> */}
              {/*  <div className="panel">
                <img src="./nafta.jpg" alt="concierto con alumnos" />
              </div> */}
              <div className="panel" data-text=" Gira Internacional Ramiro Gallo - Japón 2024">
                <img className="vertical" src="./japon.jpg" alt="" />
              </div>
              <div className="panel" data-text=" Gira Internacional Ismael Serrano - Uruguay 2024">
                <img className="vertical" src="./uruguay.jpg" alt="Ismael Serrano - Uruguay" />
              </div>
              <div className="panel" data-text=" Gira Ismael Serrano - Uruguay 2024">
                <img src="./gira-ismael.jpg" alt="Gira Ismael Serrano" />
              </div>
            </div>
          </div>
        </div>
        {/*  </div> */}
    </section>
  );
}
