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
                                <NavLink exact to="/" activeClassName="active">NarutoBorion</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/characterDetail" activeClassName="active" >Descripion de Personajes</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/about" activeClassName="active" >About</NavLink>
                            </li> 
                        </ul>
                    </nav>

            </div>

        )
    }
}