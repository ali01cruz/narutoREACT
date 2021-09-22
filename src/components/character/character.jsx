import React from "react";
import './character.css';
export default class Character extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="character">
                <div>
                    <b>{this.props.charateris.nombre}</b>
                </div>
                <div>
                    <img src={this.props.charateris.imagen}></img>
                </div>
    
            </div>
        )
    }
}