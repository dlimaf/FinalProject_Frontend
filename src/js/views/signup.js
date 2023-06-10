import React, {useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/signup.css";
import { Context } from "../store/appContext";
import logousuario from "../../img/logo_navbar-02.png"
import { Back } from "../component/atras";
import { ModalConfirmarRegistro } from "../component/modalconfirregistro";


export const Signup = () => {
    
    const { store, actions} = useContext(Context);
    const [ cell_phone , setCell_phone ] = useState('')
    const [name, setName] = useState('');
    const [apellido, setApellido] = useState('');
    const [date_of_birth , setDate_of_birth] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [cellPhoneError, setCellPhoneError] = useState('');
    const [dateOfBirthError, setDateOfBirthError] = useState('');
    const navigate = useNavigate()

    const today = new Date();

    
    const validatePassword = () => {
        if (password.length > 0) {
          if (
            password.length < 8 ||
            !/[A-Z]/.test(password) ||
            !/[a-z]/.test(password) ||
            !/[0-9]/.test(password) ||
            !/[!@#$%^&*]/.test(password)
          ) {
            setPasswordError("Contraseña inválida");
            return false;
          } else {
            setPasswordError("");
            return true;
          }
        } else {
          setPasswordError("");
          return false;
        }
      };


    const validateEmail = () => {
        if (email.length > 0) {
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!emailRegex.test(email)) {
            setEmailError("Correo electrónico inválido");
          } else {
            setEmailError("");
          }
        } else {
          setEmailError("");
        }
      };

    const validateCellPhone = () => {
        if (cell_phone.length > 0) {
            const cell_phoneRegex = /^[0-9]{8}$/;
            if (!cell_phoneRegex.test(cell_phone)) {
                setCellPhoneError("Número de celular inválido");
            } else {
                setCellPhoneError("");
            }
        } else {
            setCellPhoneError("");
        }
    };
    const validateDateOfBirth = () => {
        if (date_of_birth.length > 0) {
            const today = new Date();
            const selectedDate = new Date(date_of_birth);

            if (selectedDate > today) {
                setDateOfBirthError("La fecha de nacimiento no puede ser mayor que la fecha actual");
            } else {
                setDateOfBirthError("");
            }
        } else {
            setDateOfBirthError("");
        }
    };
   
    useEffect(() => {
        validatePassword();
    }, [password]);

    useEffect(() => {
        validateEmail()
    }, [email]);

    useEffect(() => {
        validateCellPhone();
    }, [cell_phone]);

    useEffect(() => {
        validateDateOfBirth();
    }, [date_of_birth]);

    const handleSubmit = (e) => {
        e.preventDefault()
        actions.signup(cell_phone, name, apellido, date_of_birth, email, password);        
        actions.setModalConfRegistro(true)
        setCell_phone('');
        setApellido('')
        setName('')
        setDate_of_birth('')
        setPassword('')
        setEmail('')
    }

    return (
        <>
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
                                <input type="text" className="form-control rounded-start number_input" placeholder="Últimos 8 dígitos" aria-label="number" aria-describedby="basic-addon1" 
                                value={cell_phone} onChange={(e) => {setCell_phone(e.target.value);validateCellPhone()}}/>
                                
                            </div>
                            {cellPhoneError && <div className="error">{cellPhoneError}</div>}
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
                            <input type="date" className="form-control number_input" id="start" name="trip-start" aria-label="number" aria-describedby="basic-addon1" 
                            value={date_of_birth} onChange={(e )=> {setDate_of_birth(e.target.value);validateDateOfBirth()}} min="1920-01-01" max={new Date().toISOString().split("T")[0]} />
                            {dateOfBirthError && <div className="error">{dateOfBirthError}</div>}                            
                        </div>
                        <div className="mb-3">
                            <label className="number_label ms-2 mb-2">Correo Electrónico*</label>
                            <input type="email" className="form-control number_input" placeholder="Ingresa tu correo electrónico" aria-label="number" aria-describedby="basic-addon1" 
                            value={email} onChange={(e) => {setEmail(e.target.value); validateEmail()}}/>
                            {emailError && <div className="error">{emailError}</div>}
                        </div>
                        <div className="mb-3">
                            <label className="number_label ms-2 mb-2">Contraseña*</label>
                            <input type="password" className="form-control number_input" placeholder="Ingresa tu contraseña" aria-label="number" aria-describedby="basic-addon1" 
                            value={password} onChange={(e) => { setPassword(e.target.value); validatePassword()}}
                            />
                            {passwordError && <div className="error">{passwordError}</div>}
                        </div>
                        <div className="d-flex justify-content-center flex-column mt-4">
                            <button id="buttonsignup" type="submit" className="btn btn-primary rounded-pill mb-2">CREAR CUENTA</button>
                        </div>
                    </form>
                </div>
                <Back/>
            </div> 
        </div>
        {store.modalConfRegistro && 
            <ModalConfirmarRegistro/>
        }
        </>
    )
}