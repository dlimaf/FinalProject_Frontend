import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/cuenta.css";
import { Context } from "../store/appContext";
import ShoppingCarLogo from "../../img/icons8-carrito-de-compras-24.png"


export const Cuenta = () => {
    return (
        <div className="fondocuenta">
            <div className="row cuadrocuenta">
                <div className="col-4 p-5">
                    <p className="cuenta pt-5 ps-4"><i className="fas fa-user me-2" style={{color:"#BE8123"}}></i>MI CUENTA</p>
                    <p className="pedido ps-4"><i className="fas fa-shopping-cart me-2" style={{color:"#BE8123"}}></i>MIS PEDIDOS</p>
                    <p className="pago ps-4"><i class="fas fa-credit-card me-2" style={{color:"#BE8123"}}></i>MÉTODOS DE PAGO</p>
                </div>
                <div className="col-8">
                    <p>bueno</p>
                </div>
            </div>
        </div>
    )
}