import React from 'react'
import "./Duo.css";
import { ArrowUpRightCircleFill } from "react-bootstrap-icons";
export default function Duo() {
    return (
        <div className='wrapp-duo section container'>
            <h2 className='duo-title'>Dúo Salgán - Falabella</h2>
            <div className='duo-hero'>
                <p className='duo-p'>El dúo Salgán - Falabella nace en el año 2007 compartiendo escenarios y aprendiendo de los Maestros Horacio Salgán y Ubaldo de lío, dando continuidad a la  obra y legado estilístico del histórico dúo Salgan - De Lío, sin duda uno de los lenguajes más influyentes de la historia del Tango.<br />
                    Desde de su primera presentación internacional en el Teatro du Chaillot de París el Dúo Salgán - Falabella ha recorrido la obra de Horacio Salgán en sus diferentes formaciones.  Junto al Quinteto Real se han presentado en el Teatro Colón de Buenos Aires invitados por el maestro Daniel Baremboin. Con la Orquesta Típica Horacio Salgán se han presentado en el Teatro Colón de Bs As junto a los Solistas históricos que formaron parte de esta formación en diferentes épocas, como Leopoldo Federico, Ernesto Baffa, Nestor Marconi, Julio Pane, Juan Jose Mosallini y Carlos Corrales. <br />
                    El Dúo ha participado del Festival Cervantino de Mexico, el Festival Grec de Barcelona, la Expo Shangai, El Festival de Tango de Roma y el Festival de Tango de la Ciudad de Buenos Aires entre otros.<br />
                    En 2024 realizaron un concierto junto a la Orquesta Nacional de Música Argentina Juan de Dios Filiberto dirigida por Annunziata Tomaro, interpretando los arreglos y composiciones de Horacio Salgán para Orquesta Sinfónica. En la actualidad el Dúo Salgán - Falabella está presentando “Legado”:
                    un concierto que recorre los arreglos y composiciones más emblemáticas de Horacio Salgán y el legado estilístico que creara junto a Ubaldo De Lío. Las composiciones de Horacio como A fuego lento, Grillito, A don Agustin Bardi y los arreglos de El Choclo, Mano Brava, Taquito militar, El Entrerriano, Vida Mía, Te vas Milonga, El pollo Ricardo, Orgullo Criollo, La loca de amor, son algunas de las obras que forman parte del repertorio del Dúo sumando composiciones de Cesar Salgán.
                </p>
                <p className='duo-members'> <span>Lo integran en piano:</span> César Salgán<br />
                    <span> En guitarra</span>: Esteban Falabella<br />
                </p>
            </div>
            <div className='card-button1'>
                <a
                    href="https://youtu.be/YMnb7hvAxqs?si=NeK1M_7jGNl6o6i5"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ArrowUpRightCircleFill className="card-icon1" />
                </a>
            </div>
        </div>
    )
}
