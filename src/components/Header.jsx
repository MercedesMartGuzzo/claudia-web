import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";


function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);
    const circleRef = useRef(null);

    const navigate = useNavigate();
    const location = useLocation();

    const sections = ["inicio", "management", "produccion", "cellista", "contacto"];

    const handleLinkClick = (id) => {
        if (location.pathname !== "/") {
            navigate("/"); // ir a Home
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
        }
        setMenuOpen(false);
    };

    // Ocultar navbar al hacer scroll
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

    // Animación hover logo
    useEffect(() => {
        if (!circleRef.current) return;
        const svg = circleRef.current;
        const circle = svg.querySelector(".circle-logo");
        const handleMouseEnter = () => gsap.to(circle, { fill: "#0f4d25", duration: 0.5 });
        const handleMouseLeave = () => gsap.to(circle, { fill: "none", duration: 0.5 });
        svg.addEventListener("mouseenter", handleMouseEnter);
        svg.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            svg.removeEventListener("mouseenter", handleMouseEnter);
            svg.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div className={`header ${hidden ? "hidden" : ""} ${scrolled ? "scrolled" : ""}`}>
            <nav className="navbar">
                <div className="logo">
                    <Link
                        smooth
                        to="/#inicio"
                        onClick={() => {
                            setMenuOpen(false);
                            if (location.pathname !== "/") {
                                navigate("/");
                                setTimeout(() => {
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }, 100);
                            } else {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                        }}
                    >
                        <svg ref={circleRef} width="40" height="40" viewBox="0 0 100 100">
                            <circle className="circle-logo" cx="50" cy="50" r="30" fill="none" stroke="#0f4d25" strokeWidth="4" />
                        </svg>
                    </Link>
                </div>

                <button
                    className={`menu-btn ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                    <ul>
                        {sections.map((item) => (
                            <li key={item}>
                                <Link
                                    smooth
                                    to={`/#${item}`}
                                    onClick={() => handleLinkClick(item)}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;
