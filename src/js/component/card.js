import React, { useContext, useEffect, useState} from "react";
import "../../styles/card.css"
import { Context } from "../store/appContext";
import { ModalLogin } from "./modallogin";

export const Card = ({ title, image, content, price}) => {
    const {store,actions} = useContext(Context) 
    const [response, setResponse] = useState(null);

    const handleProcesarPago = () => {
        fetch('https://dlimaf-super-fortnight-9vw5rjg6rwjcxrr5-3000.preview.app.github.dev/procesar_pago', {
          method: 'POST'
        })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Error en la solicitud: ' + response.status);
          }
        })
        .then(data => {
          setResponse(data);
          console.log(data);
          // Aquí puedes manipular los datos recibidos y actualizar tu interfaz de usuario
        })
        .catch(error => {
          console.log(error);
        });
      };   
      
      
    useEffect(()=>{
        if (response.image_base_64) {
            setInterval(() => {
                var myHeaders = new Headers();
                myHeaders.append("Authorization", "Bearer");

                var requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                };

                fetch("https://biz-sandbox.soymach.com/payments/", requestOptions)
                    .then(response => response.json())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));
            }, 5000)
        }
    },[response])
    
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <div>
                    <div className="row">
                        <h5 className="card-title col-7">{title}</h5>
                        <p className="card-price col-5 text-end">{price}</p>        
                    </div>
                    <div className="row">
                        <p className="card-text col-7">{content}</p>
                        <button className="agregar col-5 pt-1" onClick={handleProcesarPago}>Agregar</button>
                    </div>
                </div>
            </div>
            <img src={response?.image_base_64}/>
        </div>
    );
  };