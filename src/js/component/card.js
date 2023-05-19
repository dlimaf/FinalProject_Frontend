import React, { useContext} from "react";
import "../../styles/card.css"
import { Context } from "../store/appContext";

export const Card = ({ title, image, content, price}) => {
    const {store,actions} = useContext(Context) 
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <div>
                    <div className="row">
                        <h5 className="card-title col-7">{title}</h5>
                        <p className="card-price col-5 text-end">{price}</p>        
                    </div>
                    <div className="row">
                        <p className="card-text col-7">{content}</p>                            
                        <button onClick={()=>actions.addItem(title,price)} className="agregar col-5 pt-1">Agregar</button>
                </div>
                </div>
            </div>
        </div>
    );
  };