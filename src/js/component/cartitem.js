import React, { useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/cartitem.css";


export const CartItem = ({pedido}) => {
    console.log("Pedido",pedido)
    return (
        <div className="texto-carrito">
            <p>{pedido.title + " ........... $" + pedido.price}</p>
            
        </div>
    )
}