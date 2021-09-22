import React from "react";
import './character.css';

export default class Character extends React.Component{
    constructor(props){
        super(props)
       
    }
    render(){
        return(
            <div className="character">
                {this.props.nombre}
            </div>
        )
    }
}