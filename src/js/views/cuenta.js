import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../../styles/cuenta.css";
import { Context } from "../store/appContext";
import ShoppingCarLogo from "../../img/icons8-carrito-de-compras-24.png"
import { useNavigate } from "react-router-dom";
import { DatosCuenta } from "../component/datosmicuenta";


export const Cuenta = () => {

    const { store , actions } = useContext(Context);
    const [ pagesCuenta , setPagesCuenta ] = useState('cuenta')
    const navigate = useNavigate();
    const [edit , setEdit ] = useState(false);
    
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
                </div>
                <div className="col-8 pt-5">
                    <div >
                            {(pagesCuenta === "cuenta") ? (
                                <div>
                                    <div className="d-flex justify-content-start mb-4">
                                        <div className="funcion cuenta ps-4 noactivado"><i className="fas fa-user me-2" style={{color:"#BE8123"}}></i>MI CUENTA</div>
                                    </div>
                                    <div id="infocuenta" className="d-flex justify-content-center position-relative">
                                        
                                    
                                                    <DatosCuenta                                              
                                                    />                     

                                                                                                                                                                 
                                    </div>
                                    <div className="d-flex justify-content-center mb-5">
                                        <button className="modificar" onClick={() => actions.setEdit(true)}>MODIFICAR DATOS</button>
                                    </div>
                                </div>
                            ) : 
                            (
                                <div className="funcion pedido ps-4 pb-3 noactivado"><i className="fas fa-shopping-cart me-2" style={{color:"#BE8123"}}></i>MIS PEDIDOS</div>
                            )}
                    </div>

                </div>
            </div>
        </div>
    )
}