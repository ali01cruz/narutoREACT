import React from "react";
import './navbar.css';
import {NavLink} from "react-router-dom";
export default class Navbar extends React.Component{
    constructor(){
        super()
        

    }
    render(){
        return(
            <div className="navbar">

                    <nav>
                        <ul id="lista">
                            <li>
                                <NavLink exact to="/">NarutoBorion</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/characterDetail">Descripion de Personajes</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/about">About</NavLink>
                            </li> 
                        </ul>
                    </nav>

            </div>

        )
    }
}