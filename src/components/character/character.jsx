import './character.css';
import {NavLink} from "react-router-dom";
export default function  Character(props){
    
        return(
            <div className="character">
                <div> 
                    <NavLink to={`/characterDetail/${props.charateris.id}`}>
                        <b>{props.charateris.nombre}</b>

                    </NavLink>
                </div>
                <div>
                    <NavLink to={`/characterDetail/${props.charateris.id}`}>
                        <img src={props.charateris.imagen}></img>
                    </NavLink>
                    
                </div>
    
            </div>
        )
    
}