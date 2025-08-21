/* import { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import "./Hero.css";

export default function Hero() {
    useEffect(() => {
        // Divide en palabras y caracteres
        const split = new SplitType("h1", { types: "words, chars" });

        // Animar palabra por palabra
        split.words.forEach((word, i) => {
            gsap.from(word.querySelectorAll(".char"), {
                opacity: 0,
                y: 50,
                stagger: 0.05,
                duration: 0.6,
                ease: "circ.in",
                delay: i * 0.8,
            });
        });
    }, []);

    return (
        <section className="hero" id="inicio">
            <div>
                <h1>Claudia Sereni</h1>
            </div>
        </section>
    );
}
 */

import { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import "./Hero.css";

export default function Hero() {
    useEffect(() => {
        // Animación h1
        const split = new SplitType("h1", { types: "words, chars" });
        split.words.forEach((word, i) => {
            gsap.from(word.querySelectorAll(".char"), {
                opacity: 0,
                y: -50,
                stagger: 0.05,
                duration: 0.6,
                ease: "power3.in",
                delay: i * 0.8,
            });
        });

        // Animar cada ola independiente con distintas velocidades
        const waves = document.querySelectorAll(".wave-svg");
        waves.forEach((wave, i) => {
            gsap.to(wave, {
                xPercent: -50,
                repeat: -1,
                duration: 8 + i * 2.5, // velocidad distinta por línea
                ease: "linear",
            });
        });
    }, []);

    return (
        <section className="hero" id="inicio">
            <div className="content">
                <h1>Claudia Sereni</h1>
            </div>

            <div className="waves-japan">
                {/* 7 líneas independientes */}
                {["#2ecc71", "#27ae60", "#229954", "#1e8449", "#196f3d", "#145a32", "#0f4d25"].map((color, index) => (
                    <svg
                        key={index}
                        className="wave-svg"
                        viewBox="0 0 1200 200"
                        preserveAspectRatio="none"
                        style={{ bottom: 0 + index * 5 + "%" }}
                    >
                        <path
                            d="M0 100 Q 50 50, 100 100 T 200 100 T 300 100 T 400 100 T 500 100 T 600 100 T 700 100 T 800 100 T 900 100 T 1000 100 T 1100 100 T 1200 100"
                            fill="none"
                            stroke={color}
                            strokeWidth="3"
                        />
                    </svg>
                ))}
            </div>
        </section>
    );
}
