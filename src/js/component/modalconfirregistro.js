import React, { useContext} from "react";
import iconRegistroExitoso from "../../img/registro_listo-14.png"
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import "../../styles/modallogout.css"

export const ModalConfirmarRegistro = () => {
    const { store , actions} = useContext(Context);
    const navigate = useNavigate();

    const handleRedirigirInicio = () => {
        actions.setModalConfRegistro(false)
        navigate("/")
        actions.setOpenModal(true)
    }


    return (
        <div className="modal">
            <div className="modal-content">
                <div className="d-flex justify-content-end pe-3 pt-3">
                    <button type="button" className="btn-close" onClick={() => actions.setModalConfRegistro(false)}></button>
                </div>
                <div className="modal-body">
                    <header className="d-flex justify-content-center">
                        <div>
                            <h1 className="text-center" id="header_title">LISTO!</h1>
                            <div className="d-flex justify-content-center mb-2">
                                <img src={iconRegistroExitoso} style={{width:"200px", height:"auto"}} />
                            </div>
                        </div>
                    </header>
                    <div className="d-flex justify-content-center mb-2 mt-4">
                        <div>
                            <p className="text-center" id="texto">Te hemos enviado un correo electrónico para<br></br>confirmar tu cuenta de burgerfly. Ya puedes<br></br>iniciar sesión y comprar online con nosotros</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-4 mb-5">
                        <button id="button_login" onClick={handleRedirigirInicio}>INICIAR SESIÓN</button>
                    </div>
                </div>
            </div>
        </div>


    )
}
