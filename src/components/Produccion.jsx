import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Produccion.css";

const itemsData = [
    {
        title: "Ismael Serrano Sinfónico",
        info: " Movistar Arena, Buenos Aires Argentina 2025.",
        color: "#43AA8B",
        image: "sinfonico-ismael.jpg"
    },
    {
        title: "Cuarteto de Cuerdas Nito Mestre",
        info: " Buenos Aires, Argentina 2012 y 2024",
        color: "#43AA8B",
        image: "cuarteto-nito.jpg"
    },
    {
        title: "Cuarteto de Cuerdas Ismael Serrano",
        info: "Buenos Aires, Argentina 2024",
        color: "#43AA8B"
    },
    {
        title: "Grabación Ismael Serrano Sinfónico",
        info: " Buenos Aires, Argentina 2023",
        color: "#43AA8B"
    },
    {
        title: "Ensamble Seda – Utopía Pedro Aznar / Ramiro Gallo",
        info: " Buenos Aires, Argentina 2019",
        color: "#43AA8B"
    },
    {
        title: "Raúl Barboza + Ramiro Gallo Ensamble",
        info: "Lorem ipsum dolor sit amet.",
        color: "#43AA8B"
    }
];

export default function Produccion() {
    const itemsRef = useRef([]);

    useEffect(() => {
        itemsRef.current.forEach((el) => {
            if (!el) return;

            const p = el.querySelector("p");
            const img = el.querySelector("img");
            const extra = el.querySelector(".produccion-extra");

            // Estado inicial
            gsap.set(p, { height: 0, opacity: 0, overflow: "hidden" });
            gsap.set(img, { scaleY: 0, opacity: 0, transformOrigin: "top center" });
            gsap.set(el, { height: 150 }); // altura base
            gsap.set(extra, { borderLeft: "0px solid var(--clr-back)" }); // sin borde por defecto
            gsap.set(p, { borderTop: "0px solid var(--clr-back)" });

            const expand = () => {
                const isMobile = window.innerWidth < 768;

                // Mostrar contenido invisible solo para medir altura
                gsap.set(p, { height: "auto", opacity: 1 });
                gsap.set(img, { scaleY: 1, opacity: 1 });
                const targetHeight = el.scrollHeight; // altura final con todo el contenido

                // Animación de altura y color
                gsap.to(el, {
                    height: targetHeight,
                    backgroundColor: "#77B0AA",
                    duration: 0.6,
                    ease: "power2.out",
                    onComplete: () => gsap.set(el, { height: "auto" })
                });

                // Animación de contenido
                if (!isMobile) {
                    // Desktop: borde izquierdo
                    gsap.to(extra, { borderLeft: "1px solid var(--clr-back)", duration: 0.3, ease: "power2.out" });
                } else {
                    // Mobile: borde-top en p
                    gsap.to(p, { borderTop: "1px solid var(--clr-back)", duration: 0.3, ease: "power2.out" });
                }

                gsap.to(img, { scaleY: 1, opacity: 1, duration: 0.5, ease: "power2.out" });
            };

            const collapse = () => {
                const isMobile = window.innerWidth < 768;

                // Animación de altura y color
                gsap.to(el, {
                    height: 150,
                    backgroundColor: el.dataset.color,
                    duration: 0.5,
                    ease: "power2.inOut"
                });

                // Animación del contenido
                gsap.to(p, { height: 0, opacity: 0, duration: 0.5, ease: "power2.inOut" });
                gsap.to(img, { scaleY: 0, opacity: 0, duration: 0.5, ease: "power2.inOut" });

                // Remover bordes
                if (!isMobile) {
                    gsap.set(extra, { borderLeft: "0px solid var(--clr-back)" });
                } else {
                    gsap.set(p, { borderTop: "0px solid var(--clr-back)" });
                }
            };

            el.addEventListener("mouseenter", expand);
            el.addEventListener("mouseleave", collapse);
            el.addEventListener("touchstart", expand);
            el.addEventListener("touchend", collapse);

            return () => {
                el.removeEventListener("mouseenter", expand);
                el.removeEventListener("mouseleave", collapse);
                el.removeEventListener("touchstart", expand);
                el.removeEventListener("touchend", collapse);
            };
        });
    }, []);

    return (
        <div>
            <div className="produccion-subtitle">
                <h3>Organización Ensambles & Producción</h3>
            </div>

            <div className="produccion-grid">
                {itemsData.map((item, idx) => (
                    <div
                        key={idx}
                        className="produccion-item"
                        style={{ background: item.color }}
                        data-color={item.color}
                        ref={(el) => (itemsRef.current[idx] = el)}
                    >
                        <div className="produccion-content">
                            <h3>{item.title}</h3>
                            <div className="produccion-extra">
                                {item.image && <img src={item.image} alt={item.title} />}
                                <p>{item.info}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
