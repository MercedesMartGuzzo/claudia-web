import React, { useEffect } from "react";
import "./Mannager.css";
import { ArrowUpRightCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

export default function Mannager() {

    useEffect(() => {
        const buttons = gsap.utils.toArray(".booking-btn");

        buttons.forEach((btn) => {
            gsap.to(btn, {
                backgroundColor: "var(--clr-back2)",
                color: "var(-clr-title)",
                duration: 1.5,
                yoyo: true,
                repeat: -1,
                ease: "power1.inOut",
            });
        });
    }, []);

    return (
        <div className="container">
            <div className="management-subtitle">
                <h3>Colaboraciones como Mánager</h3>
            </div>

            <div className="card-grid">
                {/* CARD 1 */}
                <div className="galvan-card">
                    <div className="card-title">
                        <h4>Quinteto Galván</h4>
                        <div>
                            <p className="booking-p"> Gira Europea Abril - Junio 26</p>
                            <p className="booking-p2">Gira Europea Agosto - Sept 26</p>
                            <a href="mailto:claudiasereni@yahoo.com?subject=Booking%20Quinteto%20Galván&body=Hola%2C%20quiero%20consultar%20por%20la%20gira%20del%20Quinteto%20Galván.">
                                <button className="booking-btn">BOOKING NOW</button>
                            </a>
                        </div>
                    </div>
                    <div>
                        <p className="card-p">
                            El Quinteto Galván nace en el Taller Galván en Buenos Aires, su
                            formación es única y poderosa y su repertorio está compuesto por
                            Tango y Folklore.
                        </p>
                    </div>
                    <div className="card-photo">
                        <img src="./quinteto-galvan.jpg" alt="quinteto galvan" />
                    </div>
                    <div className="card-button">
                        <Link to="/quinteto" className="btn-link">
                            <ArrowUpRightCircleFill className="card-icon" />
                        </Link>

                    </div>
                </div>

                {/* CARD 2 */}
                <div className="salgan-card">
                    <div className="card-title">
                        <h4>Dúo Salgán - Falabella</h4>
                        <div>
                            <p className="booking-p"> Gira Europea Abril - Junio 26</p>
                            <p className="booking-p2">Gira Europea Agosto - Sept 26</p>
                            <a href="mailto:claudiasereni@yahoo.com?subject=Booking%20Quinteto%20Galván&body=Hola%2C%20quiero%20consultar%20por%20la%20gira%20del%20Quinteto%20Galván.">
                                <button className="booking-btn">BOOKING NOW</button>
                            </a>
                        </div>
                    </div>
                    <div>
                        <p className="card-p">
                            El Dúo Salgán - Falabella le da continuidad a la obra y legado
                            estilístico al histórico Dúo Salgán - De Lío.
                        </p>
                    </div>
                    <div className="card-photo">
                        <img src="./salgan-falabella.jpg" alt="salgan-falabella" />
                    </div>

                    <div className="card-button">
                        <Link to="/duo">
                            <ArrowUpRightCircleFill className="card-icon" />
                        </Link>
                    </div>
                </div>

                {/* CARD 3 */}
                <div className="salgan-card1">
                    <div className="card-title">
                        <h4>Salgán Orquestal</h4>
                        <div>
                            <p className="booking-p"> Gira Europea Abril - Junio 26</p>
                            <p className="booking-p2">Gira Europea Agosto - Sept 26</p>
                            <a href="mailto:claudiasereni@yahoo.com?subject=Booking%20Quinteto%20Galván&body=Hola%2C%20quiero%20consultar%20por%20la%20gira%20del%20Quinteto%20Galván.">
                                <button className="booking-btn">BOOKING NOW</button>
                            </a>
                        </div>
                    </div>
                    <div>
                        <p className="card-p">
                            Salgán Orquestal es un concierto que recorre los arreglos y
                            composiciones de Horacio Salgán, ampliados a la sonoridad orquestal.
                        </p>
                    </div>
                    <div className="card-photo1">
                        <img src="./horacio-salgan.jpg" alt="horacio salgan" />
                    </div>
                    <div className="card-button">
                        <Link to="/salgan">
                            <ArrowUpRightCircleFill className="card-icon" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
