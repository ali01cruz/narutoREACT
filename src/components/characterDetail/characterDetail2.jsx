import React from "react";
import './characterdetail.css';
import { useParams } from "react-router";

export default function CharacterDetail2(props){
    const parametro = useParams();

    const elemeto =props.charateris.find((elemento)=>elemento.id===parseInt(parametro.id));

    //la otra opcion es modificar con id osea array[id]
    //busco si el link tiene un parametro
    return(
        <div>
            

            
            
            <div className="characterDetail">
                
                <div className="imagen">
                    <img src={elemeto.imagen} alt="" />
                </div>
                <div className="caracteristicas">
                    
                    <h2>caracteristicas:</h2>
                    <p><b>Nombre:</b> {elemeto.nombre}</p>
                    <p><b>rango:</b> {elemeto.rango}</p>
                    <p><b>atake:</b> {elemeto.atake}</p>
                    <p><b>aldea:</b> {elemeto.aldea}</p>

                </div>
                <div className="descripcion">
                <p><b>descripcion </b>:{elemeto.body} </p>

                </div>
                
            </div>
            
        </div>
    )
    
}