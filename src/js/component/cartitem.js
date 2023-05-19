import React, { useContext} from "react";
import { Context } from "../store/appContext";


export const CartItem = ({pedido}) => {
    return (
        <div className="text-end">
            <p>{pedido.title + " ........... $" + pedido.price}</p>
            
        </div>
    )
}