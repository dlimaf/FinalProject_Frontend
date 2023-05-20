import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../../styles/cuenta.css";
import { Context } from "../store/appContext";
import ShoppingCarLogo from "../../img/icons8-carrito-de-compras-24.png"
import { useNavigate } from "react-router-dom";


export const Cuenta = () => {

    const { store , actions } = useContext(Context);
    const [ pagesCuenta , setPagesCuenta ] = useState('cuenta')
    const navigate = useNavigate();

    const currentUser = store.user;
    console.log("este es el usuario",currentUser)
    

    const handleClickLogout = () => {
        actions.logout()
        navigate("/")
    }

    return (
        <div className="fondocuenta">
            <div className="row cuadrocuenta">
                <div className="col-4 p-5">
                    <div 
                    onClick={() => setPagesCuenta("cuenta")}
                    className={"funcion cuenta ps-4 pb-3" + (pagesCuenta === "cuenta" ? " activado" : " noactivado")}><i className="fas fa-user me-2" style={{color:"#BE8123"}}></i>MI CUENTA</div>
                    <div 
                    onClick={() => setPagesCuenta("pedido")}
                    className={"funcion pedido ps-4 pb-3" + (pagesCuenta === "pedido" ? " activado" : " noactivado")}><i className="fas fa-shopping-cart me-2" style={{color:"#BE8123"}}></i>MIS PEDIDOS</div>
                    <div 
                    onClick={() => setPagesCuenta("pago")}
                    className={"funcion pago ps-4" + (pagesCuenta === "pago" ? " activado" : " noactivado")}><i className="fas fa-credit-card me-2" style={{color:"#BE8123"}}></i>MÉTODOS DE PAGO</div>
                </div>
                <div className="col-8 pt-5">
                    <div >
                            {(pagesCuenta === "cuenta") ? (
                                <div>
                                    <div className="d-flex justify-content-start">
                                        <div className="funcion cuenta ps-4 noactivado"><i className="fas fa-user me-2" style={{color:"#BE8123"}}></i>MI CUENTA</div>
                                    </div>
                                    <div id="infocuenta" className="d-flex justify-content-center position-relative">
                                                     <div className="w-100 position-absolute m-4 ps-5 pe-5">
                                                        <tr className="d-flex justify-content-between mb-3">
                                                            <td>Nombre</td>
                                                            <td>{currentUser?.name}</td>
                                                        </tr>
                                                        <tr className="d-flex justify-content-between mb-3">
                                                            <td>Apellido</td>
                                                            <td>{currentUser?.apellido}</td>
                                                        </tr>
                                                        <tr className="d-flex justify-content-between mb-3">
                                                            <td>Email</td>
                                                            <td>{currentUser?.email}</td>
                                                        </tr>
                                                        <tr className="d-flex justify-content-between mb-3">
                                                            <td>Celular</td>
                                                            <td>{currentUser?.cell_phone}</td>
                                                        </tr>
                                                        <tr className="d-flex justify-content-between mb-3">
                                                            <td>Fecha de nacimiento</td>
                                                            <td>{currentUser?.date_of_birth}</td>
                                                        </tr>

                                                    </div>                           
                                                                                                                                                                    
                                    </div>
                                </div>
                            ) : (pagesCuenta === "pedido") ?
                            (
                                <div className="funcion pedido ps-4 pb-3 noactivado"><i className="fas fa-shopping-cart me-2" style={{color:"#BE8123"}}></i>MIS PEDIDOS</div>
                            ) :
                            (
                                <div className="funcion pago ps-4 noactivado"><i className="fas fa-credit-card me-2" style={{color:"#BE8123"}}></i>MÉTODOS DE PAGO</div>

                            )}
                    </div>

                </div>
            </div>
        </div>
    )
}