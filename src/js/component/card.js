import React, { useContext, useEffect, useState} from "react";
import "../../styles/card.css"
import { Context } from "../store/appContext";
import { ModalLogin } from "./modallogin";
import swal from "sweetalert";

export const CardHamburgers = ({ name, image, description, price,id, hamburguesas}) => {
    const {store,actions} = useContext(Context) 

    const buyProducts= (hamburguesas) =>{
      console.log(hamburguesas)
      const totalPedidos = [...store.pedidos,{
            "hamburger_name":hamburguesas.name,
            "hamburger_id":hamburguesas.id,
            "hamburger_price":hamburguesas.price,
            "hamburger_quantity":1
        }
    
    ]
      console.log(totalPedidos)
      actions.setPedidos(totalPedidos)
    }

    
    return (

        <div className="card" style={{width: "18rem"}} key={id}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <div>
                    <div className="row">
                        <h5 className="card-title col-8">{name}</h5>
                        <p className="card-price col-4 text-end">{price}</p>        
                    </div>
                    <div className="row">
                        <p className="card-text col-8">{description}</p>
                        <button className="agregar col-4 pt-1" onClick={()=>buyProducts(hamburguesas)}>Agregar</button>
                    </div>
                </div>
            </div>
        </div>

    );
  };


  export const CardBeverages = ({ name, image, description, price,id, bebidas}) => {
    const {store,actions} = useContext(Context) 

    const buyProducts= (bebidas) =>{
      console.log(bebidas)
      const totalPedidos = [
        ...store.pedidos,{    
          "beverages_name":bebidas.name,     
          "beverages_id":bebidas.id,
          "beverages_price":bebidas.price,
          "beverages_quantity":1
      }
    ]
      console.log(totalPedidos)
      actions.setPedidos(totalPedidos)
    }

    
    return (

        <div className="card" style={{width: "18rem"}} key={id}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <div>
                    <div className="row">
                        <h5 className="card-title col-8">{name}</h5>
                        <p className="card-price col-4 text-end">{price}</p>        
                    </div>
                    <div className="row">
                        <p className="card-text col-8">{description}</p>
                        <button className="agregar col-4 pt-1" onClick={()=>buyProducts(bebidas)}>Agregar</button>
                    </div>
                </div>
            </div>
        </div>

    );
  };


  export const CardAcompañamientos = ({ name, image, description, price,id, acompañamientos}) => {
    const {store,actions} = useContext(Context) 

    const buyProducts= (acompañamientos) =>{
      console.log(acompañamientos)
      const totalPedidos = [
        ...store.pedidos,{         
          "acompañamientos_name":acompañamientos.name,
          "acompañamientos_id":acompañamientos.id,
          "acompañamientos_price":acompañamientos.price,
          "acompañamientos_quantity":1
      }
    ]
      console.log(totalPedidos)
      actions.setPedidos(totalPedidos)
    }

    
    return (

        <div className="card" style={{width: "18rem"}} key={id}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <div>
                    <div className="row">
                        <h5 className="card-title col-8">{name}</h5>
                        <p className="card-price col-4 text-end">{price}</p>        
                    </div>
                    <div className="row">
                        <p className="card-text col-8">{description}</p>
                        <button className="agregar col-4 pt-1" onClick={()=>buyProducts(acompañamientos)}>Agregar</button>
                    </div>
                </div>
            </div>
        </div>

    );
  };