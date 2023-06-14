import React, {useContext} from "react";
import "../../styles/cartitem.css";

export const CartItem = ({pedido}) => {
    return (
        <div className="d-flex justify-content-between texto-carrito">
            <p>{pedido.hamburger_name || pedido.beverages_name || pedido.acompañamientos_name}</p>
            <p>${pedido.hamburger_price || pedido.beverages_price || pedido.acompañamientos_price}</p>
            <p>{pedido.hamburger_quantity || pedido.beverages_quantity || pedido.acompañamientos_quantity}</p>
        </div>
    );
};