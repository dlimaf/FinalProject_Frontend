import React from 'react';
import Imagen from '../../img/imagen.png'
import "../../styles/carrusel.css"

export const Slider = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ position: "relative" }}>
                        <img src={Imagen} className="d-block w-100" alt="..." style={{ objectFit: "cover", height: "350px", boxShadow: "2px 4px 10px 2px rgba(0, 0, 0, 0.2)"}}/>
                    </div>
                    <div className="carousel-item" style={{ position: "relative" }}>
                        <img src={Imagen} className="d-block w-100" alt="..." style={{ objectFit: "cover", height: "350px", boxShadow: "2px 4px 10px 2px rgba(0, 0, 0, 0.2)",}}/>
                    </div>
                    <div className="carousel-item" style={{ position: "relative" }}>
                        <img src={Imagen} className="d-block w-100" alt="..." style={{ objectFit: "cover", height: "350px", boxShadow: "2px 4px 10px 2px rgba(0, 0, 0, 0.2)",}}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='lineaslider'></div>
        </div>
    )
}