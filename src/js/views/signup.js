import React, {useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/signup.css";
import { Context } from "../store/appContext";
import logousuario from "../../img/logo_navbar-02.png"
import { Back } from "../component/atras";


export const Signup = () => {
    const { store, actions} = useContext(Context);
    const [name, setName] = useState('');
    const [apellido, setApellido] = useState('');
    const [born , setBorn] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const today = Date.now()

    const handleSubmit = (e) => {
        e.preventDefault()
        actions.signup(name, email, password);  
    }

    return (
        <div className="signup pb-5">
            <div className="container pt-5">
                <div className="d-flex justify-content-center">
                    <form onSubmit={handleSubmit} className="form">
                        <header className="d-flex justify-content-center mb-3">
                            <div>
                                <div className="d-flex justify-content-center mb-2">
                                    <img src={logousuario} style={{width:"100px", height:"auto"}}></img>
                                </div>
                                <h1 id="header_title">CREAR CUENTA</h1>
                            </div>
                        </header>
                        <div className="mb-3">
                            <label className="number_label ms-2 mb-2">Ingresa tu número de celular</label>
                            <div className="input-group">
                                <span className="input-group-text codigo_input" id="basic-addon1">+569</span>
                                <input type="text" className="form-control rounded-start number_input" placeholder="Últimos 8 dígitos" aria-label="number" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="number_label ms-2 mb-2">Nombre*</label>
                            <input type="text" className="form-control number_input" placeholder="Ingresa tu nombre" aria-label="number" aria-describedby="basic-addon1" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="number_label ms-2 mb-2">Apellido*</label>
                            <input type="text" className="form-control number_input" placeholder="Ingresa tu apellido" aria-label="number" aria-describedby="basic-addon1" value={apellido} onChange={(e )=> setApellido(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="number_label ms-2 mb-2">Fecha de nacimiento*</label>
                            <input type="date" className="form-control number_input" id="start" name="trip-start" aria-label="number" aria-describedby="basic-addon1" value={born} onChange={(e )=> setBorn(e.target.value)} min="1920-01-01" max={today} />
                        </div>
                        <div className="mb-3">
                            <label className="number_label ms-2 mb-2">Correo Electrónico*</label>
                            <input type="email" className="form-control number_input" placeholder="Ingresa tu correo electrónico" aria-label="number" aria-describedby="basic-addon1" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="number_label ms-2 mb-2">Contraseña*</label>
                            <input type="password" className="form-control number_input" placeholder="Ingresa tu contraseña" aria-label="number" aria-describedby="basic-addon1" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="d-flex justify-content-center flex-column mt-4">
                            <button id="buttonsignup" type="submit" className="btn btn-primary rounded-pill mb-2">CREAR CUENTA</button>
                        </div>
                    </form>
                </div>
                <Back/>
            </div> 
        </div>
    )
}