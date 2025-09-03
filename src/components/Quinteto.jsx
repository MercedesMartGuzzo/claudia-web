import React from 'react'
import "./Quinteto.css";
import { ArrowUpRightCircleFill } from "react-bootstrap-icons";


export default function Quinteto() {
    return (

        <div className='wrapp-quinteto section container'>
            <h2 className='quinteto-title'>Quinteto Galván</h2>
            <div className='quinteto-hero'>
                <p className='quinteto-p'>El Quinteto Galván nace en el Taller Galván en Buenos Aires, donde se fabrican y restauran bandoneones hace más de 10 años.  Integrado por 3 bandoneones, violín y guitarra, expone este gran instrumento en todas sus facetas y amplio repertorio. Su formación es única y poderosa, de una sonoridad envolvente y profundamente emotiva.<br />
                    Con arreglos y dirección de Joaquín Benítez Kitegrosky, su repertorio incluye  música argentina como valses, milongas y tangos clásicos así como folklore.<br />
                    El Quinteto se estrena en 2022 y realiza su tercer gira europea en abril, mayo y junio 2025. También se presenta en variados escenarios porteños.
                </p>
                <p className='quinteto-members'> <span>Lo integran en bandoneones:</span> Pedro Galván,  Joaquín Benítez Kitegrosky, Nicolás Cardozo<br />
                    <span> En Violín</span>: Ariel Romano<br />
                    <span> En Guitarra:</span> Claudio Jurado <br />
                </p>
            </div>
            <div className='card-button1'>
                <a
                    href="https://youtu.be/-sopvrTW_po?si=GfhOm_uV3DTNW1fp"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ArrowUpRightCircleFill className="card-icon1" /> <span className="card-text1">Ver video</span>
                </a>
            </div>
        </div>

    )
}
