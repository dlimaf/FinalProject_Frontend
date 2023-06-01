import React, { useContext, useEffect, useState} from "react";
import "../../styles/card.css"
import { Context } from "../store/appContext";
import { ModalLogin } from "./modallogin";
import swal from "sweetalert";

export const Card = ({ name, image, description, price}) => {
    const {store,actions} = useContext(Context) 
    const [response1, setResponse1] = useState(null);
    const [response2, setResponse2] = useState(null);
    const [modal_key, setModal_key] = useState(false)
  

    const handleProcesarPago = () => {
        fetch('https://3000-benbungle-ecommerceback-gjc60gx0upg.ws-us98.gitpod.io/procesar_pago', {
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
          setResponse1(data);
          setResponse2(data.token_key)
          console.log("token_key",response2);
          // Aquí puedes manipular los datos recibidos y actualizar tu interfaz de usuario
        })
        .catch(error => {
          console.log(error);
        });
        setTimeout(()=>{
          setModal_key(true)
          setTimeout(()=>{
            setModal_key(false)
            swal("Su tiempo de pago ha expirado")
          },35000)

        },1500)
        
      };   
      

    useEffect(()=>{
        if (response1?.token_key) {
          const tokenKey = response1.token_key
          console.log("tokenKey",tokenKey)
          setInterval(() => {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJidXNpbmVzc01hY2hJZCI6IjI1NDU4MDM5LWYwM2UtNDE1OS04Y2IxLTAzYzA5MzMwMmEzYyIsImJ1c2luZXNzU2VjcmV0SWQiOiJmM2MxMmFhOS04NWI5LTRmYzMtYjA2NS1hYzQwZTYwYmMwMzEiLCJzY29wZXMiOlsicGF5bWVudHMuY3JlYXRlIiwicGF5bWVudHMuZ2V0Il0sImlhdCI6MTY4NTU5MzYwNn0.I3jyKytAIb0m0E_2MeakWtf8bVbkNNOHbs3G6Nh6nf8");

            var requestOptions = {
              method: 'GET',
              headers: myHeaders,
              redirect: 'follow'
            };

            fetch(`https://biz-sandbox.soymach.com/payments/${tokenKey}`, requestOptions)
              .then(response => response.json())
              .then(data => console.log(data))
              .catch(error => console.log('error', error));


          }, 5000)
        }
    },[response1])
    
    return (
      <>
        <div className="card" style={{width: "18rem"}} onClick={()=>setModal_key(false)}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <div>
                    <div className="row">
                        <h5 className="card-title col-8">{name}</h5>
                        <p className="card-price col-4 text-end">{price}</p>        
                    </div>
                    <div className="row">
                        <p className="card-text col-8">{description}</p>
                        <button className="agregar col-4 pt-1" onClick={handleProcesarPago}>Agregar</button>
                    </div>
                </div>
            </div>
        </div>
        {modal_key &&
        <div>
          <img id="modal_key" src={response1?.mach_data.image_base_64}/>
        </div>
        }
        </>
    );
  };