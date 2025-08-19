/* import React, { useState } from "react";
import { List, X } from "react-bootstrap-icons";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
        }
    };

    return (
        <nav className="navbar">
            <div className="logo">Claudia Sereni</div>
          


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
    );
};

export default Navbar;
 */