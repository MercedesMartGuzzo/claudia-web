/* import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import "./Mannager.css";

gsap.registerPlugin(ScrollTrigger);

export default function Mannager() {
    const textRef = useRef(null);

    useLayoutEffect(() => {
        if (!textRef.current) return;

        // ahora solo se divide por palabras
        const split = new SplitType(textRef.current, { types: "words" });

        // Inicialmente todas las palabras visibles pero con color base
        gsap.set(split.words, { color: "var(--clr-title)" });

        // Timeline con ScrollTrigger que ilumina palabra por palabra
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 80%",
                end: "bottom 20%",
                scrub: 4,
            },
        });

        tl.to(split.words, {
            color: "var(--clr-back)",
            stagger: 0.1,  // un poco más largo para palabras
            duration: 0.6,
            ease: "power1.out",
        });

        return () => split.revert();
    }, []);

    return (
        <div className="wrapp-mannager">
            <p className="mannager-p" ref={textRef}>
                Mi enfoque integral en la gestión cultural abarca desde la producción hasta la interpretación musical. Como manager, productora y violoncellista, lidero proyectos que conectan a los artistas con oportunidades claves para su desarrollo. Al seguir activa como violoncellista freelance y docente, me mantengo en constante contacto con el mundo artístico, lo que me permite aportar una visión fresca y auténtica a cada proyecto.
            </p>
        </div>
    );
}
 */