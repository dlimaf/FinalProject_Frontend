import React from "react";
import "../../styles/home.css";
import { Slider } from "../component/carrusel";
import { Ofertas } from "../component/opciones";


export const Home = () => {
	
	return (
		<div className="home">
			<Slider />
			<Ofertas/>
		</div>
	)
}
