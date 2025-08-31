import "./Salgan.css";
import { ArrowUpRightCircleFill } from "react-bootstrap-icons";

export default function Salgan() {
    return (
        <div className='wrapp-salgan section container'>
            <h2 className='salgan-title'>Salgán Orquestal</h2>
            <div className='salgan-orquestal'>
                <p className='salgan-p'>Salgán Orquestal es un concierto que recorre los arreglos y composiciones de Horacio Salgán, ampliados a la sonoridad orquestal. El Dúo Salgán - Falabella sumando un Bandoneón y una orquesta de cuerdas son el marco sonoro para un concierto único.<br />
                    Recuerdo (O. Pugliesse), Gallo Ciego (A. Bardi), Canaro en París (Scarpino y Caldarella), Ojos Negros(V. Greco), El Choclo (A. Villoldo), La Puñalada (Pintín Castellanos), Tierra Querida (Julio Decaro) y  La Pulpera de Santa Lucía (E.Maciel) son algunos de los arreglos de Horacio Salgán de clásicos del género que forman parte de este concierto, así como también sus c A Fuego Lento, La llamo Silbando, Grillito y composiciones de Cesar Salgán como A Dos Mujeres y Milongas y milongueros. <br />
                    Salgan - Falabella se presentaron junto a la Orquesta Nacional de Música Argentina Juan de Dios Filiberto en el Centro Cultural Palacio Libertad de Buenos Aires.
                </p>
            </div>
            <div className='card-button1'>
                <a
                    href="https://youtu.be/XGrsjJT6Wxg?si=QfcQUp7Bt4VZ3Z5A"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ArrowUpRightCircleFill className="card-icon1" />
                </a>
            </div>
        </div>
    )
}
