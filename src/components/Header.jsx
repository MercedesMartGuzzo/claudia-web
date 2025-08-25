import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);
    const circleRef = useRef(null);

    // Manejar scroll: ocultar navbar y cerrar menú
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScroll && currentScroll > 50) {
                setHidden(true); 
                setMenuOpen(false); 
            } else {
                setHidden(false); 
            }
            setScrolled(currentScroll > 50); 
            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    // Animación de hover del logo (relleno)
    useEffect(() => {
        if (!circleRef.current) return;

        const svg = circleRef.current;
        const circle = svg.querySelector(".circle-logo");

        const handleMouseEnter = () => {
            gsap.to(circle, {
                fill: "#0f4d25",
                duration: 0.5,
                ease: "power1.inOut",
            });
        };

        const handleMouseLeave = () => {
            gsap.to(circle, {
                fill: "none",
                duration: 0.5,
                ease: "power1.inOut",
            });
        };

        svg.addEventListener("mouseenter", handleMouseEnter);
        svg.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            svg.removeEventListener("mouseenter", handleMouseEnter);
            svg.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    const handleScrollTo = (e, targetId) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
        }
    };

    return (
        <div className={`header ${hidden ? "hidden" : ""} ${scrolled ? "scrolled" : ""}`}>
            <nav className="navbar">
                {/* Logo animado */}
                <div className="logo">
                    <svg
                        ref={circleRef}
                        width="40"
                        height="40"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            className="circle-logo"
                            cx="50"
                            cy="50"
                            r="30"
                            fill="none"
                            stroke="#0f4d25"
                            strokeWidth="4"
                        />
                    </svg>
                </div>

                {/* Botón hamburguesa */}
                {<button
                    className={`menu-btn ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {<span></span>}
                    {<span></span>}
                    {<span></span>}
                </button>}

                {/* Menú móvil */}
                <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                    <ul>
                        {["Inicio", "Mannager", "Cellista", "Clases", "Bio", "Contacto"].map(
                            (item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        onClick={(e) => handleScrollTo(e, item.toLowerCase())}
                                    >
                                        {item}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;
