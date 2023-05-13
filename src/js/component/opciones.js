import React, { useState } from "react";
import "../../styles/ofertas.css";
import { Card } from "../component/card.js";
import hambur from "../../img/cheeseburger_card.png"

export const Ofertas = () => {

    const hamburguesas =[
		{title:"CHEESE BURGER",image:"cheeseburger_card.png", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
		{title:"CHEESE BURGER",image:"cheeseburger_card.png", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
		{title:"CHEESE BURGER",image:"cheeseburger_card.png", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
		{title:"CHEESE BURGER",image:"cheeseburger_card.png", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
		{title:"CHEESE BURGER",image:"cheeseburger_card.png", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
		{title:"CHEESE BURGER",image:"cheeseburger_card.png", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},

	]
    const bebidas =[
		{title:"SPRITE",image:"https://marcelohidalgo.cl/wp-content/uploads/Sprite-congelada.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
		{title:"SPRITE",image:"https://marcelohidalgo.cl/wp-content/uploads/Sprite-congelada.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
		{title:"SPRITE",image:"https://marcelohidalgo.cl/wp-content/uploads/Sprite-congelada.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
		{title:"SPRITE",image:"https://marcelohidalgo.cl/wp-content/uploads/Sprite-congelada.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
		{title:"SPRITE",image:"https://marcelohidalgo.cl/wp-content/uploads/Sprite-congelada.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
		{title:"SPRITE",image:"https://marcelohidalgo.cl/wp-content/uploads/Sprite-congelada.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},

	]
    const acompañamientos =[
		{title:"PALITOS DE AJO",image:"https://mundosjumbo.cl/wp-content/uploads/sites/3/2021/06/GettyImages-1196410984-1.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
		{title:"PALITOS DE AJO",image:"https://mundosjumbo.cl/wp-content/uploads/sites/3/2021/06/GettyImages-1196410984-1.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
		{title:"PALITOS DE AJO",image:"https://mundosjumbo.cl/wp-content/uploads/sites/3/2021/06/GettyImages-1196410984-1.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
		{title:"PALITOS DE AJO",image:"https://mundosjumbo.cl/wp-content/uploads/sites/3/2021/06/GettyImages-1196410984-1.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
		{title:"PALITOS DE AJO",image:"https://mundosjumbo.cl/wp-content/uploads/sites/3/2021/06/GettyImages-1196410984-1.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
		{title:"PALITOS DE AJO",image:"https://mundosjumbo.cl/wp-content/uploads/sites/3/2021/06/GettyImages-1196410984-1.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},

	]
    const arma =[
		{title:"CHEESE BURGER",image:"https://www.pizzapizza.cl/wp-content/uploads/2021/01/armatupizza-3.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
		{title:"CHEESE BURGER",image:"https://www.pizzapizza.cl/wp-content/uploads/2021/01/armatupizza-3.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
		{title:"CHEESE BURGER",image:"https://www.pizzapizza.cl/wp-content/uploads/2021/01/armatupizza-3.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
		{title:"CHEESE BURGER",image:"https://www.pizzapizza.cl/wp-content/uploads/2021/01/armatupizza-3.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
		{title:"CHEESE BURGER",image:"https://www.pizzapizza.cl/wp-content/uploads/2021/01/armatupizza-3.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},
		{title:"CHEESE BURGER",image:"https://www.pizzapizza.cl/wp-content/uploads/2021/01/armatupizza-3.jpg", content:"Queso Cheddar, Hamburgesa de Vacuno, doble pepinillo.",price:"$8,990"},

	]
    
    
    const [ opciones, setOpciones ] = useState("burgers")
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
                <li className="nav-item" role="presentation">
                    <button
                    onClick={()=>setOpciones("arma")}
                    className={"opc arma" + (opciones === "arma" ? " activo" : " noactive")}
                    id="pills-arma-tab" data-bs-toggle="pill" data-bs-target="#pills-arma" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                        ARMA TU BURGER
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-burger" role="tabpanel" aria-labelledby="pills-burger-tab" tabIndex="0">
                    <div className="container mt-3">
                        <div className="row">
                            {hamburguesas.map((hamburguesas,index)=>{
                                return (
                                        <div className="col-md-4 mt-4" key={index}>
                                            <Card
                                            title={hamburguesas.title} 
                                            image={hamburguesas.image}
                                            content={hamburguesas.content}
                                            price={hamburguesas.price}
                                            id={index} 
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
                                {bebidas.map((bebidas,index)=>{
                                    return (
                                            <div className="col-md-4 mt-4" key={index}>
                                                <Card
                                                title={bebidas.title} 
                                                image={bebidas.image}
                                                content={bebidas.content}
                                                price={bebidas.price}
                                                id={index} 
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
                                {acompañamientos.map((acompañamientos,index)=>{
                                    return (
                                            <div className="col-md-4 mt-4" key={index}>
                                                <Card
                                                title={acompañamientos.title} 
                                                image={acompañamientos.image}
                                                content={acompañamientos.content}
                                                price={acompañamientos.price}
                                                id={index} 
                                                />
                                            </div>  
                                )
                                })}
                            </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-arma" role="tabpanel" aria-labelledby="pills-arma-tab" tabIndex="0">
                    <div className="container mt-3">
                            <div className="row">
                                {arma.map((arma,index)=>{
                                    return (
                                            <div className="col-md-4 mt-4" key={index}>
                                                <Card
                                                title={arma.title} 
                                                image={arma.image}
                                                content={arma.content}
                                                price={arma.price}
                                                id={index} 
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