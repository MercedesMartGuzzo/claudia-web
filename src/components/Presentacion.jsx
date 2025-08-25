import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Presentacion.css";

gsap.registerPlugin(ScrollTrigger);

export default function Presentacion() {
    const wrapperRef = useRef(null);

    useLayoutEffect(() => {
        if (!wrapperRef.current) return;

        const el = wrapperRef.current;

        gsap.fromTo(
            el,
            { x: 300, opacity: 0 },  
            {
                x: 0,                 
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 60%",     
                    end: "top 50%",      
                    scrub: 4,         
                },
            }
        );
    }, []);

    return (
        <div className="wrapp-presentacion container" ref={wrapperRef}>
            <p className="presentacion-p">
                Mi enfoque integral en la gestión cultural abarca desde la producción hasta la interpretación musical. Como manager, productora y violoncellista, lidero proyectos que conectan a los artistas con oportunidades claves para su desarrollo. Al seguir activa como violoncellista freelance y docente, me mantengo en constante contacto con el mundo artístico, lo que me permite aportar una visión fresca y auténtica a cada proyecto.
            </p>
        </div>
    );
}
