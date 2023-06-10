import React, { useContext, useEffect, useState} from "react";
import "../../styles/card.css"
import { Context } from "../store/appContext";
import { ModalLogin } from "./modallogin";
import swal from "sweetalert";

export const Card = ({ name, image, description, price,id}) => {
    const {store,actions} = useContext(Context) 

    
    return (

        <div className="card" style={{width: "18rem"}}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <div>
                    <div className="row">
                        <h5 className="card-title col-8">{name}</h5>
                        <p className="card-price col-4 text-end">{price}</p>        
                    </div>
                    <div className="row">
                        <p className="card-text col-8">{description}</p>
                        <button className="agregar col-4 pt-1" onClick={()=>actions.addItem(name,price,id)}>Agregar</button>
                    </div>
                </div>
            </div>
        </div>

    );
  };