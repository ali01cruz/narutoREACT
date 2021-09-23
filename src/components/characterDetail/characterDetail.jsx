import React from "react";
import './characterdetail.css';
export default class CharacterDetail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nombre: "kakashi hatake",
            rango:"Ambu",
            atake:"Amatensu",
            aldea:"Aldea de la hoja",
            imagen:"http://2.bp.blogspot.com/-ArAY7RzbwH8/VnKmuaxx1pI/AAAAAAAAC-c/TzySCHW5hk8/s1600/Kakashi_Render.png",
            body: "es el instructor del equipo 7 es el un jounin y ex ambu  con cuantiosas habilidades y alta experiensia en misiones de alto rango y muchas hailidades entre las cauels resalta su sharingan eredado de su dufinto amigo obito uchiha el cual le a permitido copiar miles de tecnicas por el cual ha ganado el nombre de ninja que copia"
        }
    }
    modificarChar =(e)=>{
        console.log(e);
        
        this.props.charateris.find((elemeto)=>{
            if (elemeto.id==e){
                this.setState({
                    nombre:elemeto.nombre,
                    rango:elemeto.rango,
                    atake:elemeto.atake,
                    aldea:elemeto.aldea,
                    imagen:elemeto.imagen,
                    body:elemeto.body
                })
            }
        })
        
         
    }
    render(){
        return(
            <div className="characterDetail">
                
                            <div className="imagen">
                                <img src={this.state.imagen} alt="" />
                            </div>
                            <div className="caracteristicas">
                                caracteristicas:
                                <h3>Nombre: {this.state.nombre}</h3>
                                <h3>rango: {this.state.rango}</h3>
                                <h3>atake: {this.state.atake}</h3>
                                <h3>aldea: {this.state.aldea}</h3>

                            </div>
                            <div className="descripcion">
                            <h3>descripcion :{this.state.body} </h3>

                            </div>
                            <select onChange={(event) => this.modificarChar(event.target.value)}>
                                {this.props.charateris.map((e)=>{
                                    return <option value={e.id}>{e.nombre}</option>
                                })}
                            </select>
  

                        
             
            </div>
        )
    }
}