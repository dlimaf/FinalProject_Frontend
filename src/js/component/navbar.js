import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.jpeg"
import "../../styles/navbar.css"


export const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container-fluid">
				<Link to="/">
					<span className="navbar-brand">
						<img className="img" src={Logo} />
					</span>
				</Link>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavDropdown">
					<ul class="navbar-nav ms-4">
						<li class="nav-item">
							<div id="menu" class="nav-link active" aria-current="page">MENU</div>
						</li>
						<li class="nav-item">
							<div id="delivery" class="nav-link" aria-current="page">DELIVERY</div>
						</li>
						<li class="nav-item">
							<div id="pedidos" class="nav-link" aria-current="page">PEDIDOS</div>
						</li>
						<li class="nav-item">
							<div id="contacto" class="nav-link" aria-current="page">CONTACTO</div>
						</li>
						<li class="nav-item ms-4">
							<div id="inicio" class="nav-link" aria-current="page">INICIA SESIÓN</div>
						</li>
						<span id="compra" class="nav-item">
							<i id="user" class="far fa-user fa-lg"></i>
						</span>
					</ul>
				</div>
			</div>
		</nav>
	);
};
