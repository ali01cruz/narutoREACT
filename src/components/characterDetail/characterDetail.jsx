import React ,{useState}from "react";
import './characterdetail.css';
import { useParams } from "react-router";

export default function CharacterDetail(props){

    
    //trabajando
    const [state, SetState]  = useState({
        nombre: "kakashi hatake",
        rango:"Ambu",
        atake:"Amatensu",
        aldea:"Aldea de la hoja",
        imagen:"http://2.bp.blogspot.com/-ArAY7RzbwH8/VnKmuaxx1pI/AAAAAAAAC-c/TzySCHW5hk8/s1600/Kakashi_Render.png",
        body: "es el instructor del equipo 7 es el un jounin y ex ambu  con cuantiosas habilidades y alta experiensia en misiones de alto rango y muchas hailidades entre las cauels resalta su sharingan eredado de su dufinto amigo obito uchiha el cual le a permitido copiar miles de tecnicas por el cual ha ganado el nombre de ninja que copia"
    })
    const parametro = useParams();
    //parte importante  buscar un elemento 
    //no hacer retuurn con find
    
    function buscar(e){
        return props.charateris.find((elemento)=>elemento.id==e);
    }
    function modificarChar(e){
        const elemeto =buscar(e);
       
        SetState({
                    
                    nombre:elemeto.nombre,
                    rango:elemeto.rango,
                    atake:elemeto.atake,
                    aldea:elemeto.aldea,
                    imagen:elemeto.imagen,
                    body:elemeto.body
        }) 
         
    }
    //la otra opcion es modificar con id osea array[id]
    //busco si el link tiene un parametro
    if(parametro.id){
        modificarChar(parametro.id);
        
    }
    

        const s =(<select id="select" onChange={(event) => modificarChar(event.target.value)}>
                        {props.charateris.map((e,pos)=>{
                            return <option key={pos} value={e.id}>{e.nombre}</option>

                        })}
                   </select>)
   
        return(
            <div>
            
            {!parametro.id && s}
            
            
            <div className="characterDetail">
                
                <div className="imagen">
                    <img src={state.imagen} alt="" />
                </div>
                <div className="caracteristicas">
                    
                    <h2>caracteristicas:</h2>
                    <p><b>Nombre:</b> {state.nombre}</p>
                    <p><b>rango:</b> {state.rango}</p>
                    <p><b>atake:</b> {state.atake}</p>
                    <p><b>aldea:</b> {state.aldea}</p>

                </div>
                <div className="descripcion">
                <p><b>descripcion </b>:{state.body} </p>

                </div>
                
            </div>
            
            </div>
        )
    
}