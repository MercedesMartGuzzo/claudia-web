import React, { useState, useEffect } from "react";
import { List, X } from "react-bootstrap-icons";
import "./Header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);

    // Manejar scroll: ocultar navbar y cerrar menú
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScroll && currentScroll > 50) {
                setHidden(true); // bajando → ocultar
                setMenuOpen(false); // cerrar menú al scrollear
            } else {
                setHidden(false); // subiendo → mostrar
            }

            setScrolled(currentScroll > 50); // cambia fondo después de 50px
            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

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
                <div className="logo">
                    <img src="icon2_.png" alt="logo" />
                </div>


                <button
                    className="menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {menuOpen ? <X size={32} /> : <List size={32} />}
                </button>


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
