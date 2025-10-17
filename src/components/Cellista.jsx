import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Cellista.css";

gsap.registerPlugin(ScrollTrigger);

export default function Cellista() {
  const containerRef = useRef(null); // ahora apuntamos al panel-container
  const panelsRef = useRef(null);

  useLayoutEffect(() => {
    const panelContainer = containerRef.current;
    const panels = panelsRef.current;

    if (window.innerWidth <= 768) return;

    // Calcular distancia horizontal real
    const totalScrollWidth = panels.scrollWidth;
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
  }, []);

  return (
    <section className="awareness">
{/*       <div className="container"> */}
        <div className="panel-container awareness" ref={containerRef}>
          <div className="panel-subcontainer">
            <div className="panel-flex photo-grid" ref={panelsRef}>
              <div className="panel">
                <img className="photo-a" src="./comuna12-locura.jpg" alt="comuna 12" />
              </div>
              <div className="panel">
                <img src="./comuna12-b.jpg" alt="comuna 12 b" />
              </div>
              <div className="panel">
                <img src="./claudia-cuarteto.jpg" alt="claudia sereni cuarteto" />
              </div>
              <div className="panel">
                <img src="./claudia-galvan.jpg" alt="quinteto galvan" />
              </div>
              <div className="panel">
                <img src="./alumnos.jpg" alt="concierto con alumnos" />
              </div>
               <div className="panel">
                <img src="./show-trueno1.jpg" alt="" />
              </div>
              <div className="panel">
                <img src="./uruguay.jpg" alt="quinteto galvan" />
              </div>
              <div className="panel">
                <img src="./show-trueno2.jpg" alt="concierto con alumnos" />
              </div>
                 <div className="panel">
                <img src="./sandro.jpg" alt="" />
              </div>
              <div className="panel">
                <img src="./sagradaflia.jpg" alt="quinteto galvan" />
              </div>
             {/*  <div className="panel">
                <img src="./nafta.jpg" alt="concierto con alumnos" />
              </div> */}
                  <div className="panel">
                <img src="./japon.jpg" alt="" />
              </div>
              <div className="panel">
                <img src="./gira-ismael.jpg" alt="quinteto galvan" />
              </div>
              <div className="panel">
                <img src="./gardel.jpg" alt="concierto con alumnos" />
              </div>
                   <div className="panel">
                <img src="./grabacion-ismael.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
     {/*  </div> */}
    </section>
  );
}
