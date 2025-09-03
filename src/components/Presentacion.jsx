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
        const isMobile = window.innerWidth < 768;

        // Fade in inicial (igual para desktop y mobile)
        gsap.fromTo(
            el,
            { opacity: 0, 
                y: -50 
            },
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

      /*   if (isMobile) {
            // Mobile: desaparecer instantáneamente al ser cubierto por Mannager
            ScrollTrigger.create({
                trigger: ".mannager",
                start: "top top",
                end: "+=1",
                onEnter: () => gsap.set(el,
                    {

                        opacity: 0,
                        y: 100
                    }),
                onLeaveBack: () => gsap.set(el,
                    {
                        opacity: 1,
                        y: 0,
                    }),
            });
        } else {
            // Desktop: fadeOut con scrub
            gsap.to(el, {
                y: 100,
                opacity: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".mannager",
                    start: "center center",
                    end: "bottom top",
                    scrub: 2,
                },
            });
        } */
    }, []);

    return (
        <div className="wrapp-presentacion container" ref={wrapperRef}>
            <p className="presentacion-p">
                Mi enfoque integral en la gestión cultural abarca desde el management y la producción hasta la interpretación musical. Propongo unir a los artistas con oportunidades claves para su desarrollo. Al seguir activa como violoncellista freelance y docente, me mantengo en constante contacto con el mundo artístico, lo que me permite aportar una visión fresca y auténtica a cada proyecto.
            </p>
        </div>
    );
}
