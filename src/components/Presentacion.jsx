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

        // Asegurarse de que la sección tenga suficiente altura para el scroll
        section.style.minHeight = "100vh";
        // SplitText: separar palabras
        const split = new SplitText(p, { type: "words" });

        // Color inicial más claro
        gsap.set(split.words, { color: "var(--clr-back3)" });

        // Iluminación palabra por palabra
        gsap.to(split.words, {
            color: "#003C43",
            stagger: 0.05,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom bottom",
                scrub: 2,
                pin: true,
            }
        });

        // Animación del trazo estilo “hecho a mano” en palabras resaltadas
        const highlights = p.querySelectorAll(".highlight");
        highlights.forEach((el) => {
            gsap.to(el, {
                "--scaleX": 1,
                duration: 0.5,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 0",
                    end: "bottom bottom",
                    scrub: 2,

                }
            });
        });

        return () => split.revert(); // limpiar SplitText
    }, []);


    return (
        <div className="section presentacion" ref={sectionRef}>
            <div className="wrapp-presentacion container">
                <p ref={pRef} className="presentacion-p">
                    Mi enfoque integral en la gestión cultural abarca desde el{" "}
                    <span className="highlight">management</span>{" "}y la{" "}
                    <span className="highlight">producción</span>{" "}hasta la{" "}
                    <span className="highlight">interpretación cultural</span>. Propongo unir a los artistas con oportunidades claves para su desarrollo. Al seguir activa como violoncellista freelance y docente, me mantengo en constante contacto con el mundo artístico, lo que me permite aportar una visión fresca y auténtica a cada proyecto.
                </p>

            </div>
        </div>
    );
}
