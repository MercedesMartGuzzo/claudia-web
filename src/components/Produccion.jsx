import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Produccion.css";

const itemsData = [
  {
    title: "Ismael Serrano Sinfónico",
    info: "Movistar Arena, Buenos Aires Argentina 2025.",
    color: "var(--clr-back2)",
    image: "sinfonico-ismael.jpg"
  },
  {
    title: "Cuarteto de Cuerdas Nito Mestre",
    info: "Buenos Aires, Argentina 2012 y 2024",
    color: "var(--clr-back2)",
    image: "cuarteto-nito.jpg"
  },
  {
    title: "Cuarteto de Cuerdas Ismael Serrano",
    info: "Buenos Aires, Argentina 2024",
    color: "var(--clr-back2)",
  },
  {
    title: "Grabación Ismael Serrano Sinfónico",
    info: "Buenos Aires, Argentina 2023",
    color: "var(--clr-back2)",
  },
  {
    title: "Ensamble Seda – Utopía Pedro Aznar / Ramiro Gallo",
    info: "Buenos Aires, Argentina 2019",
    color: "var(--clr-back2)",
    image: "aznar-gallo.jpg"
  },
  {
    title: "Raúl Barboza + Ramiro Gallo Ensamble",
    info: "Lorem ipsum dolor sit amet.",
    color: "var(--clr-back2)",
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
    const listeners = [];

    const toggle = (el) => {
      const p = el.querySelector("p");
      const img = el.querySelector("img");
      const extra = el.querySelector(".produccion-extra");

      if (!expanded || activeItem !== el) {
        if (activeItem && activeItem !== el) resetCard(activeItem);

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

        // 🔹 MISMA ESTRUCTURA QUE MOBILE, SOLO TAMAÑO ADAPTADO
        const targetWidth = Math.min(window.innerWidth * 0.85, 520);
        const targetHeight = Math.min(window.innerHeight * 0.85, 620);

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

        // 🔹 SIEMPRE COMO MOBILE
        gsap.to(p, { borderTop: "1px solid var(--clr-title)", duration: 0.3 });

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
  boxShadow: "none",
  duration: 0.6,
  ease: "power3.inOut",
  onComplete: () => {
    gsap.set(el, {
      position: "relative",
      top: "auto",
      left: "auto",
      width: "100%",
      height: 150,
      zIndex: 1,
      backgroundColor: "" 
    });
  },
});

      gsap.to(p, { height: 0, opacity: 0, duration: 0.4 });
      gsap.to(img, { scaleY: 0, opacity: 0, duration: 0.4 });
      gsap.set(p, { borderTop: "0px solid var(--clr-back)" });
      gsap.set(extra, { borderLeft: "0px solid var(--clr-back)" });
    };

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

    const overlayHandler = () => {
      if (expanded && activeItem) resetCard(activeItem);
    };
    overlay.addEventListener("click", overlayHandler);
    listeners.push({ el: overlay, handler: overlayHandler });

    return () => {
      listeners.forEach(({ el, handler }) => {
        try { el.removeEventListener("click", handler); } catch {}
      });
      try {
        const existing = document.querySelector(".produccion-overlay");
        if (existing) existing.remove();
      } catch {}
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
