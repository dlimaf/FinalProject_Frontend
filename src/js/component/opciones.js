import React, { useContext, useState } from "react";
import "../../styles/ofertas.css";
import { Card } from "../component/card.js";
import { Context } from "../store/appContext";

export const Ofertas = () => {

    const { store, actiones} = useContext(Context);    
    const [ opciones, setOpciones ] = useState("burgers")

   

    return (
        <div className="ms-5 mt-4">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                    onClick={()=>setOpciones("burgers")}
                    className={"opc burgers" + (opciones === "burgers" ? " activo" : " noactive")}
                    id="pills-burger-tab" data-bs-toggle="pill" data-bs-target="#pills-burger" type="button" role="tab" aria-controls="pills-home" aria-selected="true"
                    >BURGERS</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button 
                    onClick={()=>setOpciones("bebidas")}
                    className={"opc bebidas" + (opciones === "bebidas" ? " activo" : " noactive")}
                    id="pills-bebida-tab" data-bs-toggle="pill" data-bs-target="#pills-bebida" type="button" role="tab" aria-controls="pills-home" aria-selected="true"
                    >BEBIDAS</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                    onClick={()=>setOpciones("acompañamientos")}
                    className={"opc acompañamientos" + (opciones === "acompañamientos" ? " activo" : " noactive")}
                    id="pills-acompañamiento-tab" data-bs-toggle="pill" data-bs-target="#pills-acompañamiento" type="button" role="tab" aria-controls="pills-home" aria-selected="true"
                    >ACOMPAÑAMIENTOS</button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-burger" role="tabpanel" aria-labelledby="pills-burger-tab" tabIndex="0">
                    <div className="container mt-3">
                        <div className="row">
                            {store.hamburguesas.map((hamburguesas,index)=>{
                                return (
                                        <div className="col-md-4 mt-4" key={index}>
                                            <Card
                                            name={hamburguesas.name} 
                                            image={"https://img.freepik.com/foto-gratis/vista-frontal-hamburguesa-stand_141793-15542.jpg"}
                                            description={hamburguesas.description}
                                            price={hamburguesas.price}
                                            id={index} 
                                            />
                                        </div>  
                            )
                            })}
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-bebida" role="tabpanel" aria-labelledby="pills-bebida-tab" tabIndex="0">
                    <div className="container mt-3">
                            <div className="row">
                                {store.bebidas.map((bebidas,index)=>{
                                    return (
                                            <div className="col-md-4 mt-4" key={index}>
                                                <Card
                                                name={bebidas.name} 
                                                image={"https://www.eluniverso.com/resizer/XDCSRrWf-mQVhi9fw2igV2hzPg8=/1005x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/6O3SHHDC55GTHHHGY4HAWTVD5A.jpg"}
                                                description={bebidas.description}
                                                price={bebidas.price}
                                                id={index} 
                                                />
                                            </div>  
                                )
                                })}
                            </div>
                        </div>
                    </div>
                <div className="tab-pane fade" id="pills-acompañamiento" role="tabpanel" aria-labelledby="pills-acompañamiento-tab" tabIndex="0">
                    <div className="container mt-3">
                            <div className="row">
                                {store.acompañamientos.map((acompañamientos,index)=>{
                                    return (
                                            <div className="col-md-4 mt-4" key={index}>
                                                <Card
                                                name={acompañamientos.name} 
                                                image={"https://www.7diasdesabor.com/wp-content/uploads/2022/10/PAPAS-SUPREMAS-WEB.jpg"}
                                                description={acompañamientos.description}
                                                price={acompañamientos.price}
                                                id={index} 
                                                />
                                            </div>  
                                )
                                })}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}