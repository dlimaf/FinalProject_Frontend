import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.jpeg"
import ShoppingCarLogo from "../../img/icons8-carrito-de-compras-24.png"
import "../../styles/navbar.css"


export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-expand-sm bg-body-tertiary">
			<div className="container-fluid">
				<Link to="/">
					<span className="navbar-brand">
						<img className="img img-fluid" src={Logo} />
					</span>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul id="nav" className="navbar-nav ms-4 me-auto">
						<li className="nav-item">
							<div id="menu" className="nav-link active" aria-current="page">MENU</div>
						</li>
						<li className="nav-item">
							<div id="delivery" className="nav-link" aria-current="page">DELIVERY</div>
						</li>
						<li className="nav-item">
							<div id="pedidos" className="nav-link" aria-current="page">PEDIDOS</div>
						</li>
						<li className="nav-item">
							<div id="contacto" className="nav-link" aria-current="page">CONTACTO</div>
						</li>
						<li className="nav-item ms-4">
							<div id="inicio" className="nav-link" aria-current="page">INICIA SESIÓN</div>
						</li>
					</ul>
					<span id="compra" className="nav-item">
								<i className="far fa-user fa-2x me-3" style={{color:"#723209"}}></i>
								<img src={ShoppingCarLogo} style={{width:"40px"}}/>
					</span>
				</div>
			</div>
		</nav>
	);
};
