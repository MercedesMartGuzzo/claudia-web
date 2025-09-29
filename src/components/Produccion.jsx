import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Produccion.css";

const itemsData = [
    {
        title: "Ismael Serrano Sinfónico", info: " Movistar Arena, Buenos Aires Argentina 2025.", color: "#F9C74F" },
    { title: "Cuarteto de Cuerdas Nito Mestre", info: " Buenos Aires, Argentina 2012 y 2024", color: "#90BE6D" },
    { title: "Cuarteto de Cuerdas Ismael Serrano", info: "Buenos Aires, Argentina 2024", color: "#F94144" },
    { title: "Grabación Ismael Serrano Sinfónico", info: " Buenos Aires, Argentina 2023", color: "#577590" },
    { title: "Ensamble Seda – Utopía Pedro Aznar / Ramiro Gallo", info: " Buenos Aires, Argentina 2019", color: "#43AA8B" },
    { title: "Raúl Barboza + Ramiro Gallo Ensamble", info: "Lorem ipsum dolor sit amet.", color: "#F3722C" }
];

export default function Produccion() {
    const itemsRef = useRef([]);

    useEffect(() => {
        itemsRef.current.forEach((el, idx) => {
            if (!el) return;
            const p = el.querySelector("p");
            const fullHeight = p.scrollHeight;

            // estado inicial
            gsap.set(p, { height: 0, opacity: 0, overflow: "hidden" });

            // animación expandir
            const expand = () => {
                gsap.to(el, {
                    minHeight: 300,
                    backgroundColor: "#77B0AA",
                    duration: 0.5,
                    delay: idx * 0.2, // 🔥 delay según la posición de la tarjeta
                    ease: "power2.out"
                });
                gsap.to(p, {
                    height: fullHeight,
                    opacity: 1,
                    duration: 0.5,
                    delay: idx * 0.2, // 🔥 mismo delay
                    ease: "power2.out",
                    onComplete: () => gsap.set(p, { height: "auto" })
                });
            };

            // animación replegar
            const collapse = () => {
                gsap.to(el, {
                    minHeight: 150,
                    backgroundColor: el.dataset.color,
                    duration: 0.5,
                    delay: idx * 0.2, // 🔥 mismo delay
                    ease: "power2.inOut"
                });
                gsap.to(p, {
                    height: 0,
                    opacity: 0,
                    duration: 0.5,
                    delay: idx * 0.2, // 🔥 mismo delay
                    ease: "power2.inOut"
                });
            };

            // listeners mouse y touch
            el.addEventListener("mouseenter", expand);
            el.addEventListener("mouseleave", collapse);
            el.addEventListener("touchstart", expand);
            el.addEventListener("touchend", collapse);

            // limpieza
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
                            <p>{item.info}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
