import React, { useState } from "react";
import { List, X } from "react-bootstrap-icons";
/* import "./Navbar.css"; */
import "./Header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false); // Cierra el menú después de hacer clic
        }
    };

    return (
        <div className="header">
            <nav className="navbar">
                <div className="logo">
                    <img src="vintage.png" alt="logo"/>
                </div>

                {/* Menú Desktop */}
                <ul className="nav-links">
                    {["Inicio", "Mannager", "Cellista", "Clases", "Bio", "Contacto"].map(
                        (item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    onClick={(e) => handleScroll(e, item.toLowerCase())}
                                >
                                    {item}
                                </a>
                            </li>
                        )
                    )}
                </ul>

                {/* Botón menú hamburguesa / cerrar */}
                <button
                    className="menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {menuOpen ? <X size={32} /> : <List size={32} />}
                </button>

                {/* Menú Mobile */}
                <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                    <ul>
                        {["Inicio", "Mannager", "Cellista", "Clases", "Bio", "Contacto"].map(
                            (item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        onClick={(e) => handleScroll(e, item.toLowerCase())}
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
