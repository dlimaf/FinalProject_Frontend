import React, { useContext, useState } from "react";
import "../../styles/ofertas.css";
import { Card, CardAcompañamientos, CardBeverages, CardHamburgers } from "../component/card.js";
import { Context } from "../store/appContext";

export const Ofertas = () => {

    const { store, actiones} = useContext(Context);    
    const [ opciones, setOpciones ] = useState("burgers")

    const imageCardBeverages = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNmSONv8hn-mV8d71AqVcLpIvL24r_0QxN7PVwUHtfL24ZaVe4osVKPlj8aU2yL9wLd8&usqp=CAU",
"https://jumboargentina.vtexassets.com/arquivos/ids/770635-800-600?v=638128498298730000&width=800&height=600&aspect=true",    "https://images-ext-2.discordapp.net/external/04c1r93sL2g17JjkIgOEL9D5Vp7vo2bke8OQkJR1wm8/https/www.novasalud.cl/media/catalog/product/cache/e24405f34b9e7681ae870ab933417430/4/0/4003458_2.jpg?width=1173&height=1173","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKyOMzUEi168N4KMFJhIQotVzcX_BWR1tKtA&usqp=CAU","https://images-ext-1.discordapp.net/external/cbpWn3OyyW_nuLVXZGBsUeOuX8gvYuB5KAed6DbZO0M/%3Fsw%3D1000%26sh%3D1000/https/beta.cruzverde.cl/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Chile/default/dw55976fe3/images/large/292230-benedictino-agua-natural-sin-gas-500-ml.jpg?width=1173&height=1173"]
    const imageCardAcompañamientos = ["https://images-ext-2.discordapp.net/external/gHpz8NQ5TxyagB9OcXhsmAUSsHlJhMftxaheOBsYDo0/%3Fq%3Dtbn%3AANd9GcSmn6vF0CnjGSoRyi6Y0k5qNWGCa7A7acbC7A%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images?width=900&height=504",
    "https://images-ext-2.discordapp.net/external/DQQM7dQVo1lYj5nSIKyAnzcrfF2gr4qxDFRtAdVtGes/https/www.schaer.com/sites/default/files/styles/landscape_xxl/public/1965_Onion%2520Rings%2520with%2520Dip%2520Sauce.jpg?width=1563&height=1173",
    "https://images-ext-2.discordapp.net/external/f86_7jEIr0PsW_2mWjJxE-iG6eeID8pHXLygJDuM-kY/%3Fq%3Dtbn%3AANd9GcQrTK6pGx3f1NqBTzcTTN_fmFDtjvet81gCJg%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images?width=690&height=657", 
    "https://images-ext-2.discordapp.net/external/rrSRD-4ZU_baWjIXhtKpcZ1Yzb4VFocXaE3i704ds-o/https/img.freepik.com/fotos-premium/waffle-fritas-papas-fritas-color-amarillo-dorado-ahumado-fondo-negro_504796-224.jpg?width=1761&height=1173",
     ]

    return (
        <div className="ms-5 mt-4">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                    onClick={()=>setOpciones("burgers")}
                    className={"opc burgers" + (opciones === "burgers" ? " activo" : " noactive")}
                    id="pills-burger-tab" data-bs-toggle="pill" data-bs-target="#pills-burger" type="button" role="tab" aria-controls="pills-home" aria-selected="true"
                    >BURGERS</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button 
                    onClick={()=>setOpciones("bebidas")}
                    className={"opc bebidas" + (opciones === "bebidas" ? " activo" : " noactive")}
                    id="pills-bebida-tab" data-bs-toggle="pill" data-bs-target="#pills-bebida" type="button" role="tab" aria-controls="pills-home" aria-selected="true"
                    >BEBIDAS</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                    onClick={()=>setOpciones("acompañamientos")}
                    className={"opc acompañamientos" + (opciones === "acompañamientos" ? " activo" : " noactive")}
                    id="pills-acompañamiento-tab" data-bs-toggle="pill" data-bs-target="#pills-acompañamiento" type="button" role="tab" aria-controls="pills-home" aria-selected="true"
                    >ACOMPAÑAMIENTOS</button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-burger" role="tabpanel" aria-labelledby="pills-burger-tab" tabIndex="0">
                    <div className="container mt-3">
                        <div className="row">
                            {store.hamburguesas.map((hamburguesas)=>{
                                return (
                                        <div className="col-md-4 mt-4" key={hamburguesas.id}>
                                            <CardHamburgers
                                            name={hamburguesas.name} 
                                            image={"https://img.freepik.com/foto-gratis/vista-frontal-hamburguesa-stand_141793-15542.jpg"}
                                            description={hamburguesas.description}
                                            price={hamburguesas.price}
                                            id={hamburguesas.id}
                                            hamburguesas={hamburguesas}
                                            />
                                        </div>  
                            )
                            })}
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-bebida" role="tabpanel" aria-labelledby="pills-bebida-tab" tabIndex="0">
                    <div className="container mt-3">
                            <div className="row">
                                {store.bebidas.map((bebidas,index)=>{
                                    return (
                                            <div className="col-md-4 mt-4" key={bebidas.id}>
                                                <CardBeverages
                                                name={bebidas.name} 
                                                image={imageCardBeverages[index]}
                                                description={bebidas.description}
                                                price={bebidas.price}
                                                id={bebidas.id} 
                                                bebidas={bebidas}
                                                />
                                            </div>  
                                )
                                })}
                            </div>
                        </div>
                    </div>
                <div className="tab-pane fade" id="pills-acompañamiento" role="tabpanel" aria-labelledby="pills-acompañamiento-tab" tabIndex="0">
                    <div className="container mt-3">
                            <div className="row">
                                {store.acompañamientos.map((acompañamientos,index)=>{
                                    return (
                                            <div className="col-md-4 mt-4" key={acompañamientos.id}>
                                                <CardAcompañamientos
                                                name={acompañamientos.name} 
                                                image={imageCardAcompañamientos[index]}
                                                description={acompañamientos.description}
                                                price={acompañamientos.price}
                                                id={acompañamientos.id}
                                                acompañamientos={acompañamientos} 
                                                />
                                            </div>  
                                )
                                })}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}