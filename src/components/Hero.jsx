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
                clipPath: "circle(0% at 50% 50%)" // empieza como punto
            },
            {
                clipPath: "circle(150% at 50% 50%)", // crece
                ease: "power2.out",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "+=500",
                    scrub: 4
                }
            }
        );
    }, []);

    return (
        <section className="hero" ref={heroRef} id="inicio">
            {/* La imagen será el fondo */}
        </section>
    );
}
