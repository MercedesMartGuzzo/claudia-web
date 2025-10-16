import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Produccion.css";

const itemsData = [
    {
        title: "Ismael Serrano Sinfónico",
        info: "Movistar Arena, Buenos Aires Argentina 2025.",
        color: "#43AA8B",
        image: "sinfonico-ismael.jpg"
    },
    {
        title: "Cuarteto de Cuerdas Nito Mestre",
        info: "Buenos Aires, Argentina 2012 y 2024",
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
        info: "Buenos Aires, Argentina 2023",
        color: "#43AA8B"
    },
    {
        title: "Ensamble Seda – Utopía Pedro Aznar / Ramiro Gallo",
        info: "Buenos Aires, Argentina 2019",
        color: "#43AA8B"
    },
    {
        title: "Raúl Barboza + Ramiro Gallo Ensamble",
        info: "Lorem ipsum dolor sit amet.",
        color: "#43AA8B",
        image: "barboza-ramiro.jpg"
    }
];

export default function Produccion() {
    const itemsRef = useRef([]);

    useEffect(() => {
        itemsRef.current.forEach((el, index) => {
            if (!el) return;

            const p = el.querySelector("p");
            const img = el.querySelector("img");
            const extra = el.querySelector(".produccion-extra");

            // Estado inicial
            gsap.set(p, { height: 0, opacity: 0, overflow: "hidden" });
            gsap.set(img, { scaleY: 0, opacity: 0, transformOrigin: "top center" });
            gsap.set(el, { height: 150 });
            gsap.set(extra, { borderLeft: "0px solid var(--clr-back)" });
            gsap.set(p, { borderTop: "0px solid var(--clr-back)" });

            let expanded = false;

            const toggle = () => {
                const isMobile = window.innerWidth < 768;

                if (!expanded) {

                    itemsRef.current.forEach((other, i) => {
                        if (other && i !== index && other.classList.contains("expanded")) {
                            const op = other.querySelector("p");
                            const oimg = other.querySelector("img");
                            const oextra = other.querySelector(".produccion-extra");

                            gsap.to(other, {
                                height: 150,
                                backgroundColor: other.dataset.color,
                                duration: 0.5,
                                ease: "power2.inOut",
                            });
                            gsap.to(op, { height: 0, opacity: 0, duration: 0.5, ease: "power2.inOut" });
                            gsap.to(oimg, { scaleY: 0, opacity: 0, duration: 0.5, ease: "power2.inOut" });
                            gsap.set(oextra, { borderLeft: "0px solid var(--clr-back)" });
                            gsap.set(op, { borderTop: "0px solid var(--clr-back)" });
                            other.classList.remove("expanded");
                            other.dataset.expanded = "false";
                        }
                    });

                    // 🟢 Expandir tarjeta actual
                    gsap.set(p, { height: "auto", opacity: 1 });
                    gsap.set(img, { scaleY: 1, opacity: 1 });
                    const targetHeight = el.scrollHeight;

                    gsap.to(el, {
                        height: targetHeight,
                        backgroundColor: "#77B0AA",
                        duration: 0.6,
                        ease: "power2.out",
                        onComplete: () => gsap.set(el, { height: "auto" }),
                    });

                    if (!isMobile) {
                        gsap.to(extra, { borderLeft: "1px solid var(--clr-back)", duration: 0.3 });
                    } else {
                        gsap.to(p, { borderTop: "1px solid var(--clr-back)", duration: 0.3 });
                    }

                    gsap.to(img, { scaleY: 1, opacity: 1, duration: 0.5, ease: "power2.out" });
                    el.classList.add("expanded");
                    expanded = true;
                } else {

                    gsap.to(el, {
                        height: 150,
                        backgroundColor: el.dataset.color,
                        duration: 0.5,
                        ease: "power2.inOut",
                    });
                    gsap.to(p, { height: 0, opacity: 0, duration: 0.5 });
                    gsap.to(img, { scaleY: 0, opacity: 0, duration: 0.5 });
                    gsap.set(extra, { borderLeft: "0px solid var(--clr-back)" });
                    gsap.set(p, { borderTop: "0px solid var(--clr-back)" });

                    el.classList.remove("expanded");
                    expanded = false;
                }
            };

            el.addEventListener("click", toggle);
            return () => el.removeEventListener("click", toggle);
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
                        /*   style={{ background: item.color }} */
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
