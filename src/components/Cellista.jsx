import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Cellista.css";

gsap.registerPlugin(ScrollTrigger);

export default function Cellista() {
  const containerRef = useRef(null);
  const panelsRef = useRef(null);

  useLayoutEffect(() => {
    const panelContainer = containerRef.current;
    const panels = panelsRef.current;

    // 📱 MOBILE: animación diagonal con leve rotación
    if (window.innerWidth <= 768) {
      const images = panels.querySelectorAll(".panel img");

      // Estado inicial (desplazadas y rotadas)
      images.forEach((img, i) => {
        gsap.set(img, {
          opacity: 0,
          x: 50,
          y: 50,
          rotate: i % 2 === 0 ? 5 : -5,
        });
      });

      // Animación al hacer scroll
      images.forEach((img) => {
        gsap.to(img, {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
          },
        });
      });

      return; // evita el scroll horizontal en mobile
    }

    // 💻 ESCRITORIO: scroll horizontal con pin
    const totalScrollWidth = panels.scrollWidth;
    const viewportWidth = window.innerWidth;
    const distance = Math.max(0, totalScrollWidth - viewportWidth);

    const scrollTween = gsap.to(panels, {
      x: -distance,
      ease: "none",
      scrollTrigger: {
        trigger: panelContainer,
        pin: true,
        start: "top top",
        end: () => `+=${distance}`,
        scrub: 1,
        // markers: true,
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
    </section>
  );
}
