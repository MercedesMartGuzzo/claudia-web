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

        // ✅ Chequeamos el ancho de pantalla
        const isMobile = window.innerWidth < 768;

        // Fade in inicial
        gsap.fromTo(
            el,
            { opacity: 0, y: -50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: isMobile ? "top 95%" : "top 80%", 
                    end: isMobile ? "bottom 0%" : "top 0%",  
                    toggleActions: "play reverse play reverse",
                },
            }
        );

        // Fade out + movimiento hacia abajo
        const fadeOutTrigger = gsap.to(el, {
            y: 100,
            opacity: 0,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".mannager",
                start: isMobile ? "top top" : "center center",
                end: "bottom top",
                scrub: true,
            },
        });

        // cleanup
        return () => {
            fadeOutTrigger.scrollTrigger.kill();
        };
    }, []);

    return (
        <div className="wrapp-presentacion container" ref={wrapperRef}>
            <p className="presentacion-p">
                Mi enfoque integral en la gestión cultural abarca desde la producción
                hasta la interpretación musical. Como manager, productora y
                violoncellista, lidero proyectos que conectan a los artistas con
                oportunidades claves para su desarrollo. Al seguir activa como
                violoncellista freelance y docente, me mantengo en constante contacto con
                el mundo artístico, lo que me permite aportar una visión fresca y
                auténtica a cada proyecto.
            </p>
        </div>
    );
}
