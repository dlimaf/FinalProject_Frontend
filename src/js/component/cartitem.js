import React, {useContext} from "react";
import "../../styles/cartitem.css";

export const CartItem = ({ pedido }) => {
return (
<div className="texto-carrito">
<p>{pedido.name}</p>
<p>${pedido.price}</p>
<p>{pedido.quantity}</p>
</div>
);
};