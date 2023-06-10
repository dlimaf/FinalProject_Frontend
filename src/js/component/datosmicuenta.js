import React, { useContext, useEffect, useState } from "react";
import "../../styles/cuenta.css";
import { Context } from "../store/appContext";


export const DatosCuenta = () => {

    const { store, actions } = useContext(Context)

    const [ userData , setUserData ] = useState(null)

    const [ guardar, setGuardar] = useState(false)

    const url = process.env.BACKEND_URL


    console.log("userData",userData)

    const informacionUsuario = () => {
        let myHeaders = new Headers();
        myHeaders.append(
            "Authorization",
            `Bearer ${JSON.parse(localStorage.getItem("user"))}`
        );
        var requestOptions = {
            method: "GET",
            headers: myHeaders
        };
        fetch(`${url}privada`,requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setUserData(data)
                console.log("esta bien la respuesta",data)
                return JSON.stringify(data)
            }
                )
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
            informacionUsuario()
        
    },[guardar])

   


    const actualizarDatos = (editarObj,id) => {
        const {name,apellido,cell_phone,date_of_birth} = editarObj
        console.log("newname",name)
        const updateUserData = {
            name:name,
            apellido:apellido,
            cell_phone:cell_phone,
            date_of_birth:date_of_birth
        }
        return updateUserData
    }




    function ModoEdicionActivado() {

        const { user } = userData || {};

        const [new_Name, setNew_Name] = useState(user?.name || "")
        const [new_Apellido, setNew_Apellido] = useState(user?.apellido || "")
        const [new_Cell_phone, setNew_Cell_phone] = useState(user?.cell_phone || "")
        const [new_Date_of_birth, setNew_Date_of_birth] = useState(user?.date_of_birth || "")

        


        function handleClick() {
            const updatedUserData = actualizarDatos({
                name: new_Name,
                apellido: new_Apellido,
                cell_phone: new_Cell_phone,
                date_of_birth: new_Date_of_birth,
            });
          
            actualizarInformacionUsuario(updatedUserData);
            actions.setEdit(false);
            setGuardar(!guardar)
            
          }

        const actualizarInformacionUsuario = () => {

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", `Bearer ${JSON.parse(localStorage.getItem("user"))}`)
            
            var raw = JSON.stringify({
                name: new_Name,
                apellido: new_Apellido,
                 cell_phone: new_Cell_phone,
                 date_of_birth: new_Date_of_birth,
            });
            
            var requestOptions = {
              method: 'PUT',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            };
            
            fetch(`${url}privada`, requestOptions)
              .then(response => response.text())
              .then(data => {
                setGuardar(false)
                console.log(data)})
              .catch(error => console.log('error', error));
          };
    
        

        return (

            <>

                <div className="w-100 position-absolute m-4 ps-5 pe-5">

                    <tr className="d-flex justify-content-between mb-3">
                        <td>Nombre</td>
                        <td>
                            <input
                                className="inputeditar"
                                type="text"
                                onChange={(e) => setNew_Name(e.target.value)}
                                value={new_Name}
                            />
                        </td>
                    </tr>
                    <tr className="d-flex justify-content-between mb-3">
                        <td>Apellido</td>
                        <td>
                            <input
                                className="inputeditar"
                                type="text"
                                onChange={(e) => setNew_Apellido(e.target.value)}
                                value={new_Apellido}
                            />
                        </td>
                    </tr>
                    <tr className="d-flex justify-content-between mb-3">
                        <td>Email</td>
                        <td>{user?.email}</td>
                    </tr>
                    <tr className="d-flex justify-content-between mb-3">
                        <td>Celular</td>
                        <td>
                            <input
                                className="inputeditar"
                                type="text"
                                onChange={(e) => setNew_Cell_phone(e.target.value)}
                                value={new_Cell_phone}
                            />
                        </td>
                    </tr>
                    <tr className="d-flex justify-content-between mb-3">
                        <td>Fecha de nacimiento</td>
                        <td>
                            <input
                                className="inputeditar"
                                type="text"
                                onChange={(e) => setNew_Date_of_birth(e.target.value)}
                                value={new_Date_of_birth}
                            />


                        </td>
                    </tr>
                    <div className="position-absolute d-flex justify-content-end top-100 end-0">
                        <button onClick={handleClick}>
                            <i className="fas fa-save"></i>GUARDAR
                        </button>
                    </div>
                </div>


            </>

        )
    };

    function ModoEdicionDesactivado() {

        const { user } = userData || {};

        return (
            <>
                <div className="w-100 position-absolute m-4 ps-5 pe-5">
                    <tr className="d-flex justify-content-between mb-3">
                        <td>Nombre</td>
                        <td>{user?.name}</td>
                    </tr>
                    <tr className="d-flex justify-content-between mb-3">
                        <td>Apellido</td>
                        <td>{user?.apellido}</td>
                    </tr>
                    <tr className="d-flex justify-content-between mb-3">
                        <td>Email</td>
                        <td>{user?.email}</td>
                    </tr>
                    <tr className="d-flex justify-content-between mb-3">
                        <td>Celular</td>
                        <td>{user?.cell_phone}</td>
                    </tr>
                    <tr className="d-flex justify-content-between mb-3">
                        <td>Fecha de nacimiento</td>
                        <td>{user?.date_of_birth}</td>
                    </tr>

                </div>

            </>
        )
    }



    return (
        <>
            {
                store.edit
                    ? <ModoEdicionActivado />
                    : <ModoEdicionDesactivado />
            }
        </>
    )
}