import React from "react";
import './navbar.css';
import {NavLink} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"


export default class NavbarM extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(


            <Navbar collapseOnSelect expand="xxl" bg="dark" variant="dark">
                <Container>
                <NavLink exact to="/" activeClassName="active"> <Navbar.Brand >NarutoBorion</Navbar.Brand></NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink exact to="/characterDetail" activeClassName="active" >Descripion de Personajes</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink exact to="/about" activeClassName="active" ><div className="boton">About</div></NavLink>
                    </Nav>
                </Navbar.Collapse>
                </Container>

            </Navbar>


        )
    }
}