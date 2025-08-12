import React, { useState } from "react";
import { List, X } from "react-bootstrap-icons";
import "./Navbar.css";

const Navbar = () => {
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
        <nav className="navbar">
              <div className="logo">Claudia Sereni</div> 
       {/*      <div className="logo">
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polygon points="50,15 90,85 10,85" fill="black" />
                </svg>
             
            </div> */}


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
    );
};

export default Navbar;
