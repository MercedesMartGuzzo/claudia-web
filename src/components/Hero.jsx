import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            heroRef.current,
            {
                clipPath: "circle(0% at 50% 50%)" // empieza como un punto en el centro
            },
            {
                clipPath: "circle(150% at 50% 50%)", // crece hasta cubrir todo
                ease: "power2.out",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "+=500", // distancia de scroll para que sea progresivo
                    scrub: 2
                }
            }
        );
    }, []);

    return (
        <section className="hero" ref={heroRef} id="inicio">
            <div className="hero-content">
              <p className="hero-p">Mi enfoque integral en la gestión cultural abarca desde la producción hasta la interpretación musical. Como manager, productora y violoncellista, lidero proyectos que conectan a los artistas con oportunidades claves para su desarrollo. Al seguir activa como violoncellista freelance y docente, me mantengo en constante contacto con el mundo artístico, lo que me permite aportar una visión fresca y auténtica a cada proyecto</p>
            </div>
        </section>
    );
}
