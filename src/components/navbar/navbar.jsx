import React from "react";
import './navbar.css';
export default class Navbar extends React.Component{
    constructor(){
        super()
        

    }
    render(){
        return(
            <div className="navbar">
                
                <ul id="lista">
                    <li>
                       <a href="">NarutoBorion</a>
                    </li>
                    <li>
                       <a href="">Descripion de Personajes</a>
                    </li>
                    <li>
                       <a href="">About</a>
                    </li> 
                </ul>
            </div>
        )
    }
}