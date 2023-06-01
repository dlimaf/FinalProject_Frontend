import React, { useContext, useEffect, useState} from "react";
import "../../styles/card.css"
import { Context } from "../store/appContext";
import { ModalLogin } from "./modallogin";
import swal from "sweetalert";

export const Card = ({ title, image, content, price}) => {
    const {store,actions} = useContext(Context) 
    const [response1, setResponse1] = useState(null);
    const [response2, setResponse2] = useState(null);
    const [modal_key, setModal_key] = useState(false)
  

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
            myHeaders.append("Authorization", "Bearer ");

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
                        <h5 className="card-title col-7">{title}</h5>
                        <p className="card-price col-5 text-end">{price}</p>        
                    </div>
                    <div className="row">
                        <p className="card-text col-7">{content}</p>
                        <button className="agregar col-5 pt-1" onClick={handleProcesarPago}>Agregar</button>
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