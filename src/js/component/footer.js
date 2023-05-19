import React, { Component } from "react";
import Fondofooter from "../../img/grafica_footerv3.png";
import Logofooter from "../../img/burgerfly_logo_footer.png"
import "../../styles/footer.css"

export const Footer = () => (
	<footer className="footer" style={{backgroundImage: `url(${Fondofooter})`, height:"400px", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
		<div className="d-flex align-items-center justify-content-around" style={{ height: "100%", paddingLeft:"5%"}} >
			<img src={Logofooter} style={{width:"280px",height:"auto"}}></img>
			<div className="d-flex justify-content-center flex-column text-center" style={{paddingRight:"15%"}}>
				<span className="contacto">¿TIENES ALGUNA DUDA?</span>
				<button className="buttonemail"><i className="far fa-paper-plane"></i> ESCRIBENOS UN MAIL</button>
				<span className="contacto">O ESCRIBENOS UN WHATSAPP</span>
				<button className="buttonwhatsapp"><i className="fab fa-whatsapp"></i> +56 9 710 3282</button>
			</div>
		</div>


	</footer>
);
