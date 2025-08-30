import React from 'react';
import "./Mannager.css";
import { ArrowUpRightCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Mannager() {
    return (
        <div className='container'>
            <div className='management-subtitle'>
                <h3>Colaboraciones como Mánager</h3>
            </div>
            <div className='card-grid'>
                <div className='galvan-card'>
                    <div className='card-title'>
                        <h4>Quinteto Galván</h4>
                    </div>
                    <div>
                        <p className='card-p'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, at sint! Adipisci, ratione? Magni, possimus unde deserunt aperiam amet enim
                        </p>
                    </div>
                    <div className='card-photo'>
                        <img src="./quinteto-galvan.jpg" alt="quinteto galvan" />
                    </div>
                    <div className='card-button'>
                        <Link to="/quinteto">
                            <ArrowUpRightCircleFill className="card-icon" />
                        </Link>
                    </div>
                </div>

                <div className='salgan-card'>
                    <div className='card-title'>
                        <h4>Dúo Salgán - Falabella</h4>
                    </div>
                    <div>
                        <p className='card-p'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, at sint! Adipisci, ratione? Magni, possimus unde deserunt aperiam amet enim
                        </p>
                    </div>
                    <div className='card-photo'>
                        <img src="./salgan-falabella.jpg" alt="salgan-falabella" />
                    </div>
                    <div className='card-button'>
                        <ArrowUpRightCircleFill className="card-icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}
