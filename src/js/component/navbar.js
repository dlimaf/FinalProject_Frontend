import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../img/logo.png";
import ShoppingCarLogo from "../../img/icons8-carrito-de-compras-24.png";
import "../../styles/navbar.css";
import { ModalLogin } from "../component/modallogin";
import { Context } from "../store/appContext";
import { CartItem } from "./cartitem";
import "../../styles/notification.css";
import swal from "sweetalert";
import { ModalCerrarSession } from "./modalcerrarsesion";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()


	const [response2, setResponse2] = useState(null);

	const url = process.env.BACKEND_URL
	const token_api = process.env.API_KEY

	const calculateTotal = (pedidos) => {
		let total = 0;
		pedidos.forEach((pedido) => {
			total += pedido.hamburger_price || pedido.beverages_price || pedido.acompañamientos_price;
		});
		return total;
	};

	const handleProcesarPago = async () => {
		const { user } = store.userData
		console.log(store.userData)
		const pedidos = {
			"user_id": user.id,
			"hamburgers": [],
			"acompañamientos": [],
			"beverages": []
		}
		
		store.pedidos.forEach((item) => {
			if (item.hamburguesas) {
				const index = pedidos.hamburgers.find(
					(hamb) => hamb.hamburger_id === item.hamburger_id
				);
				if (index || index === 0) {
					pedidos.hamburgers[index].quantity = +1
				} else {
					pedidos.hamburgers.push({
						hamburger_id: item.hamburger_id,
						quantity: 1
					})
				}
			}
			if (item.beverages) {
				const index = pedidos.beverages.find(
					(hamb) => hamb.beverage_id === item.beverage_id
				);
				if (index || index === 0) {
					pedidos.beverages[index].quantity = +1
				} else {
					pedidos.beverages.push({
						beverage_id: item.beverags_id,
						quantity: 1
					})
				}
			}
			if (item.acompañamientos) {
				const index = pedidos.acompañamientos.find(
					(hamb) => hamb.acompañamiento_id === item.acompañamiento_id
				);
				if (index || index === 0) {
					pedidos.acompañamientos[index].quantity = +1
				} else {
					pedidos.acompañamientos.push({
						acompañamiento_id: item.acompañamiento_id,
						quantity: 1
					})
				}
			}
		});
		const total = calculateTotal(store.pedidos)
		console.log("preciototal", total)
		let tok = "a"
		await fetch(`${url}procesar_pago/${total}`, {
			method: 'POST',
		})
			.then(response => {
				if (response.ok) {
					return response.json();

				} else {
					throw new Error('Error en la solicitud: ' + response.status);
				}
			})
			.then(async data => {
				actions.setResponse1(data);
				tok = data.token_key
				console.log("data qr", data)
				console.log("token_key", tok);
				let myHeaders = new Headers();
				myHeaders.append(
					"Authorization",
					`Bearer ${token_api}`
				);
				var requestOptions = {
					method: "GET",
					headers: myHeaders
				};
				await fetch(`${url}revisar_pago/${tok}`, requestOptions)
					.then((response) => response.json())
					.then(async data => {
						console.log("esto viene del backend", data)
						swal("Pedido realizado")
						navigate("/")
						let myHeaders = new Headers();
						myHeaders.append("Content-Type", "application/json");

						

						var raw = JSON.stringify(pedidos);

						var requestOptions = {
							method: 'POST',
							headers: myHeaders,
							body: raw,
							redirect: 'follow'
						};

						await fetch(`${url}create/order`, requestOptions)
							.then(response => response.json())
							.then(data => console.log("esta es la orden", data))
							.catch(error => console.log('error', error));

					})
					.catch((error) => console.log("error", error))
					.finally(() => {
						clearTimeout(timeoutId); // Cancela el setTimeout si se confirma el pago
						actions.setPedidos([])
					});
			})
			.catch(error => {
				console.log(error);
			});

		const timeoutId = setTimeout(() => {
			navigate("/");
			swal("Su tiempo de pago ha expirado");
		}, 35000);


	};


	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<Link to="/">
						<span className="navbar-brand">
							<img className="img" src={Logo} />
						</span>
					</Link>
					<button
						id="buttontoggler"
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						<ul id="ul" className="navbar-nav ms-4">
							<li className="nav-item ms-4">
								<div id="menu" className="nav-link active" aria-current="page">
									MENU
								</div>
							</li>
							<li className="nav-item ms-2">
								<div id="pedidos" className="nav-link" aria-current="page">
									PEDIDOS
								</div>
							</li>
							<li className="nav-item ms-2">
								<div id="contacto" className="nav-link" aria-current="page">
									CONTACTO
								</div>
							</li>
							<li className="nav-item ms-5">
								{store.token ? (
									<button type="button" id="logout" onClick={() => actions.setModalLogout(true)}>CERRAR SESIÓN</button>
								) : (
									<button type="button" id="inicio" onClick={() => actions.setOpenModal(true)}>INICIA SESIÓN</button>
								)}
							</li>
						</ul>
					</div>
					<div className="d-flex justify-content-end">
						<span id="compra">
							{store.token ? (
								<Link to="/logeado">
									<i
										className="far fa-user fa-2x me-3"
										style={{ color: "#723209" }}
									></i>
								</Link>
							) : (
								<i
									type="button"
									onClick={() => actions.setModalOpen(!modalOpen)}
									className="far fa-user fa-2x me-3"
									style={{ color: "#723209" }}
								></i>
							)}
							<div className="nav-item dropdown">
								<div className="position-relative">
									<img
										className="cart-toggle"
										data-bs-toggle="dropdown"
										aria-expanded="false"
										src={ShoppingCarLogo}
										style={{ width: "40px" }}
									/>
									{store.pedidos.length > 0 && (
										<div className="notification">
											<span>{store.pedidos.length}</span>
										</div>
									)}
									<ul className="dropdown-menu dropdown-menu-end mt-4">
										{store.pedidos.length === 0 ? (
											<li className="dropdown-item">Vacio</li>
										) : (
											<>
												{store.pedidos.map((pedido) => (
													<li className="" key={pedido.id}>
														<CartItem pedido={pedido} />
													</li>
												))}
												<li className="dropdown-item d-flex justify-content-between">
													<span>Total:</span>
													<span className="total-amount">${calculateTotal(store.pedidos)}</span>
												</li>
												<li className="dropdown-item">
													{store.token ? (
														<Link to="/pagar">
															<button className="boton-pago" onClick={handleProcesarPago}>Pagar</button>
														</Link>
													) : (
														<button className="boton-pago" onClick={() => actions.setOpenModal(true)}>Pagar</button>
													)
													}
												</li>

											</>
										)}
									</ul>
								</div>
							</div>
						</span>
					</div>
				</div>
			</nav>
			{store.openModal &&
				<ModalLogin />
			}

			{store.modalLogout &&
				<ModalCerrarSession />
			}
		</>
	);
};


/*
<div className="position-relative">
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
						<div id="pedidos" className="nav-link" aria-current="page">PEDIDOS</div>
					</li>
					<li className="nav-item ms-2">
						<div id="contacto" className="nav-link" aria-current="page">CONTACTO</div>
					</li>
					<li className="nav-item ms-5">
						{store.token ? (
							<button type="button" id="logout" onClick={handleClickLogout}>CERRAR SESIÓN</button>
						) : (
							<button type="button" id="inicio" onClick={() => actions.setOpenModal(true)}>INICIA SESIÓN</button>
						)}
					</li>

				</ul>
			</div>
			<div className="d-flex justify-content-end">
				<span id="compra">
					{store.token ?
						(
							<Link to="/logeado">
								<i className="far fa-user fa-2x me-3" style={{ color: "#723209" }}></i>
							</Link>
						)
						:
						(
							<i type="button" onClick={() => actions.setOpenModal(true)} data-bs-target="#exampleModalToggle" data-bs-toggle="modal" className="far fa-user fa-2x me-3" style={{ color: "#723209" }}></i>
						)
					}

					<div className="nav-item dropdown">
						<img className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" src={ShoppingCarLogo} style={{ width: "40px" }} />
						<ul className="dropdown-menu dropdown-menu-end mt-4">
							{store.pedidos.length == 0 ? (
								<li className="dropdown-item">Empty</li>
							) : (store.pedidos.map((pedido, i) => {
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
	{store.openModal &&
		<ModalLogin />
	}
</div>
);
};
*/
