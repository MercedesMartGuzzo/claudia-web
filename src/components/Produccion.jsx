import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Produccion.css";

const itemsData = [
    {
        title: "Ismael Serrano Sinfónico",
        info: "Movistar Arena, Buenos Aires Argentina 2025.",
        color: "var(--clr-back2)", /* "#43AA8B", */
        image: "sinfonico-ismael.jpg"
    },
    {
        title: "Cuarteto de Cuerdas Nito Mestre",
        info: "Buenos Aires, Argentina 2012 y 2024",
        color: "var(--clr-back2)", /* "#43AA8B", */
        image: "cuarteto-nito.jpg"
    },
    {
        title: "Cuarteto de Cuerdas Ismael Serrano",
        info: "Buenos Aires, Argentina 2024",
        color: "var(--clr-back2)", /* "#43AA8B", */
    },
    {
        title: "Grabación Ismael Serrano Sinfónico",
        info: "Buenos Aires, Argentina 2023",
        color: "var(--clr-back2)", /* "#43AA8B", */
    },
    {
        title: "Ensamble Seda – Utopía Pedro Aznar / Ramiro Gallo",
        info: "Buenos Aires, Argentina 2019",
        color: "var(--clr-back2)", /* "#43AA8B", */
        image: "aznar-gallo.jpg"
    },
    {
        title: "Raúl Barboza + Ramiro Gallo Ensamble",
        info: "Lorem ipsum dolor sit amet.",
        color: "var(--clr-back2)", /* "#43AA8B", */
        image: "barboza-ramiro.jpg"
    }
];

export default function Produccion() {
    const itemsRef = useRef([]);

useEffect(() => {
  const items = itemsRef.current;
  if (!items) return;

  const overlay = document.createElement("div");
  overlay.classList.add("produccion-overlay");
  document.body.appendChild(overlay);

  let activeItem = null;
  let expanded = false;
  const positions = new WeakMap();

  // guardamos handlers para luego removerlos correctamente
  const listeners = [];

  const toggle = (el) => {
    const p = el.querySelector("p");
    const img = el.querySelector("img");
    const extra = el.querySelector(".produccion-extra");
    const isMobile = window.innerWidth < 768;

    if (!expanded || activeItem !== el) {
      if (activeItem && activeItem !== el) resetCard(activeItem);

      // guardar posición original ANTES de fijar
      const rect = el.getBoundingClientRect();
      positions.set(el, rect);

      gsap.set(el, {
        position: "fixed",
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        zIndex: 1000,
      });

      overlay.classList.add("active");
      el.classList.add("expanded");
      activeItem = el;
      expanded = true;

      const targetWidth = Math.min(window.innerWidth * 0.8, 700);
      const targetHeight = Math.min(window.innerHeight * 0.8, 500);

      gsap.to(el, {
        top: window.innerHeight / 2 - targetHeight / 2,
        left: window.innerWidth / 2 - targetWidth / 2,
        width: targetWidth,
        height: targetHeight,
        borderRadius: 12,
        backgroundColor: "#77B0AA",
        boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
        duration: 0.7,
        ease: "power3.inOut",
      });

      gsap.to(img, { scaleY: 1, opacity: 1, duration: 0.5, delay: 0.1 });
      gsap.to(p, { height: "auto", opacity: 1, duration: 0.5, delay: 0.1 });

      if (!isMobile)
        gsap.to(extra, { borderLeft: "1px solid var(--clr-title)", duration: 0.3 });
      else gsap.to(p, { borderTop: "1px solid var(--clr-title)", duration: 0.3 });
    } else {
      resetCard(el);
    }
  };

  const resetCard = (el) => {
    const rect = positions.get(el);
    if (!rect) return;

    const p = el.querySelector("p");
    const img = el.querySelector("img");
    const extra = el.querySelector(".produccion-extra");

    overlay.classList.remove("active");
    el.classList.remove("expanded");
    expanded = false;
    activeItem = null;

    gsap.to(el, {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      borderRadius: 0,
      backgroundColor: el.dataset.color,
      boxShadow: "none",
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => {
        // restauramos al flujo normal del documento
        gsap.set(el, {
          position: "relative",
          top: "auto",
          left: "auto",
          width: "100%",
          height: 150,
          zIndex: 1,
        });
      },
    });

    gsap.to(p, { height: 0, opacity: 0, duration: 0.4 });
    gsap.to(img, { scaleY: 0, opacity: 0, duration: 0.4 });
    gsap.set(extra, { borderLeft: "0px solid var(--clr-back)" });
    gsap.set(p, { borderTop: "0px solid var(--clr-back)" });
  };

  // registrar listeners y guardarlos
  items.forEach((el) => {
    gsap.set(el.querySelector("p"), { height: 0, opacity: 0, overflow: "hidden" });
    gsap.set(el.querySelector("img"), {
      scaleY: 0,
      opacity: 0,
      transformOrigin: "top center",
    });
    gsap.set(el, { height: 150 });

    const handler = () => toggle(el);
    el.addEventListener("click", handler);
    listeners.push({ el, handler });
  });

  // overlay click cierra
  const overlayHandler = () => {
    if (expanded && activeItem) resetCard(activeItem);
  };
  overlay.addEventListener("click", overlayHandler);
  listeners.push({ el: overlay, handler: overlayHandler });

  // cleanup correcto — usamos las referencias guardadas
  return () => {
    // quitar listeners
    listeners.forEach(({ el, handler }) => {
      try {
        el.removeEventListener("click", handler);
      } catch (e) {}
    });
    // remover overlay del DOM si sigue
    try {
      const existing = document.querySelector(".produccion-overlay");
      if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
    } catch (e) {}
  };
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
