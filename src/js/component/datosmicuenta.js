import React from "react";


export const DatosCuenta = (props) => {


    return (
        <div className="w-100 position-absolute m-4 ps-5 pe-5">
            <tr className="d-flex justify-content-between mb-3">
                <td>Nombre</td>
                <td>{props.name}</td>
            </tr>
            <tr className="d-flex justify-content-between mb-3">
                <td>Apellido</td>
                <td>{props.apellido}</td>
            </tr>
            <tr className="d-flex justify-content-between mb-3">
                <td>Email</td>
                <td>{props.email}</td>
            </tr>
            <tr className="d-flex justify-content-between mb-3">
                <td>Celular</td>
                <td>{props.cell_phone}</td>
            </tr>
            <tr className="d-flex justify-content-between mb-3">
                <td>Fecha de nacimiento</td>
                <td>{props.date_of_birth}</td>
            </tr>

        </div>      
    )
}