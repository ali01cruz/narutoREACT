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
                    <li id="a">
                       <a href="">NarutoBorion</a>
                    </li>
                    <li id="b">
                       <a href="">Descripion de Personajes</a>
                    </li>
                    <li id="c">
                       <a href="">About</a>
                    </li> 
                </ul>
            </div>
        )
    }
}