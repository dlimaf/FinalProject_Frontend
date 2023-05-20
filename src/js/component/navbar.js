import React, { useState, useContext} from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.jpeg"
import ShoppingCarLogo from "../../img/icons8-carrito-de-compras-24.png"
import "../../styles/navbar.css"
import { ModalLogin } from "../component/modallogin";
import { Context } from "../store/appContext";
import { CartItem } from "./cartitem";
import { useNavigate } from "react-router-dom";


export const Navbar = () => {
	const { store, actions} = useContext(Context);
	const navigate = useNavigate();
	const [ modalOpen, setModalOpen ] = useState(true);
	const [successfull, setSuccessfull] = useState(false);

	

	const handleClickLogout = () => {
        actions.logout()
		alert("Ha cerrado sesión satisfactoriamente")
        navigate("/")
	
    }
	return (
		<>
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<Link to="/">
					<span className="navbar-brand">
						<img className="img" src={Logo} />
					</span>
				</Link>
				<button id="buttontoggler" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul id="ul" className="navbar-nav ms-4">
						<li className="nav-item ms-4">
							<div id="menu" className="nav-link active" aria-current="page">MENU</div>
						</li>
						<li className="nav-item ms-2">
							<div id="delivery" className="nav-link" aria-current="page">DELIVERY</div>
						</li>
						<li className="nav-item ms-2">
							<div id="pedidos" className="nav-link" aria-current="page">PEDIDOS</div>
						</li>
						<li className="nav-item ms-2">
							<div id="contacto" className="nav-link" aria-current="page">CONTACTO</div>
						</li>
						<li className="nav-item ms-5">
							{store.token ? (
								<button type="button" id="logout" onClick={handleClickLogout}>CERRAR SESIÓN</button>
							):(
								<button type="button" id="inicio" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" onClick={() => setModalOpen(!modalOpen)}>INICIA SESIÓN</button>
							)}
						</li>
						<li className="ms-4 d-flex align-items-center">
							<i id="modoclaro" className="far fa-sun fa-md me-2"></i>
							<label className="switch">
								<input type="checkbox" className="checkbox"/>
								<div className="slider"></div>
							</label>
							<i id="modonocturno" className="far fa-moon fa-md ms-2"></i>
						</li>
					</ul>
				</div>
				<div className="d-flex justify-content-end">
					<span id="compra">
						{store.token ?
						(
							<Link to="/logeado">
								<i className="far fa-user fa-2x me-3" style={{color:"#723209"}}></i>
							</Link>
						)
						:
						(
							<i type="button" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" onClick={() => setModalOpen(!modalOpen)} className="far fa-user fa-2x me-3" style={{color:"#723209"}}></i>
						)
					}
						
						<div className="nav-item dropdown">
							<img className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" src={ShoppingCarLogo} style={{width:"40px"}}/>
							<ul className="dropdown-menu dropdown-menu-end mt-4">
								{store.pedidos.length == 0 ? (
									<li className="dropdown-item">Empty</li> 
								):(store.pedidos.map((pedido,i) => {
									return (
										<li className="dropdown-item d-flex justify-content-between">
											<CartItem pedido={pedido} />
										</li>
										
									)
								})

								)}
							</ul>
						</div>
						
					</span>
				</div>
				
			</div>
		</nav>
		
		<ModalLogin
		modalOpen={modalOpen}
		setModalOpen={setModalOpen}
		successfull={successfull}
		setSuccessfull={setSuccessfull}
		/>
		</>
	);
};
