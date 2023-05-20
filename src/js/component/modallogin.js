import React, {useState, useContext, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/login.css"
import logousuario from "../../img/logo_navbar-02.png"

export const ModalLogin = () => {
    const { store, actions} = useContext(Context);
    const [email,setEmail] = useState(''); 
    const [password,setPassword] = useState('');
    


    const handleSubmit = (e) => {
        e.preventDefault()
        actions.login(email, password);
    }


 
    return (
            <div  className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="d-flex justify-content-end pe-3 pt-3">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onClick={handleSubmit} className="form d-flex justify-content-center">
                                <div>
                                    <header className="d-flex justify-content-center mb-3">
                                        <div>
                                            <div className="d-flex justify-content-center mb-2">
                                                <img src={logousuario} style={{width:"100px", height:"auto"}}></img>
                                            </div>
                                            <h1 id="header_title">INICIA SESIÓN</h1>
                                        </div>
                                    </header>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                        <label id="email" htmlFor="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e )=> setPassword(e.target.value)}/>
                                        <label id="password" htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <div className="d-flex justify-content-center mt-3">
                                        <button id="buttonlogin" type="submit" data-bs-dismiss="modal" aria-label="Close">CONTINUAR</button>
                                    </div>
                                </div> 
                            </form>
                            <footer className="d-flex justify-content-center mt-4 pb-4 pt-3">
                                        <div>
                                            <h6 className="questionlogin text-center">¿NO ESTÁS REGISTRADO?</h6>
                                            <div className="d-flex justify-content-center">
                                                <Link to="/signup">
                                                    <button type="button" className="rendersignup">CREAR CUENTA</button>
                                                </Link>
                                            </div>
                                        </div>
                            </footer>
                            </div>
                            
                        </div>
                    </div>
                </div>
    )

}