import React from "react";
import Character from "../character/character.jsx";
import './home.css';
export default class Home extends React.Component{
    constructor(props){
        super(props)
       
    }
    render(){
        return(
            <div className="home">
                {this.props.charateris.map((e)=>{
                    
                    return <Character nombre={e.nombre} ></Character> }
                
                )}
                
            </div>
        )
    }
}