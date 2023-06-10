import React, { useContext} from "react";
import cerrarsesion from "../../img/cerrarsesion.png"
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import "../../styles/modallogout.css"

export const ModalCerrarSession = () => {
    const { store , actions} = useContext(Context);
    const navigate = useNavigate();

    

    const handleClickLogout = () => {
        actions.logout();
        actions.setModalLogout();
        navigate("/")

    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="d-flex justify-content-end pe-3 pt-3">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => actions.setModalLogout(false)}></button>
                </div>
                <div className="modal-body">
                    <header className="d-flex justify-content-center">
                        <div>
                            <div className="d-flex justify-content-center mb-2">
                                <img src={cerrarsesion} style={{width:"140px", height:"auto"}} />
                            </div>
                            <h1 id="header_title">CERRAR SESIÓN</h1>
                        </div>
                    </header>
                    <div className="d-flex justify-content-center mb-2 mt-4">
                        <div>
                            <p className="text-center" id="texto">Estás cerrando sesión,<br></br> ¿Estás seguro de cerrar sesión?</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-4 mb-5">
                        <button id="boton_logout" onClick={handleClickLogout}>CERRAR SESIÓN</button>
                    </div>
                </div>
            </div>
        </div>


    )
}


