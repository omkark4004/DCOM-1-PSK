import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container, Navbar, Nav
} from 'react-bootstrap';
import './navbar.css';
import { NavLink } from "react-router-dom";

export class navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          navExpanded: false
        };
    }
    
    setNavExpanded = (expanded) => {
        this.setState({ navExpanded: expanded });
    }
    
    setNavClose = () => {
        this.setState({ navExpanded: false });
    } 
    render() {
        return (
            <>
            <Navbar id="bar" bg="mydark" expand="lg" onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>
                <Container id="row">
                    <Navbar.Brand href="#home"><img id="logo" src={require("../img/engg-logo.png")} height="50" alt="logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="mx-auto" onClick={this.setNavClose}>
                        <NavLink activeClassName="active" id="opt" to="/"><img src={require("../img/aim.png")} width="60" alt="logo"/>Aim</NavLink>
                        <NavLink activeClassName="active" id="opt" to="/theory"><img src={require("../img/theory.png")} width="60" alt="logo"/>Theory</NavLink>
                        <NavLink activeClassName="active" id="opt" to="/procedure"><img src={require("../img/Procedure.png")} width="58" alt="logo"/>Procedure</NavLink>
                        <NavLink activeClassName="active" id="opt" to="/pre_test"><img src={require("../img/pre-test.png")} width="60" alt="logo"/>Pre-test</NavLink>
                        <NavLink activeClassName="active" id="opt" to="/simulation"><img src={require("../img/simulation.png")}width="57" alt="logo"/>Simulation</NavLink>
                        <NavLink activeClassName="active" id="opt" to="/post_test"><img src={require("../img/post-test.png")}width="62" alt="logo"/>Post-test</NavLink>
                        <NavLink activeClassName="active" id="opt" to="/references"><img src={require("../img/references.png")} width="57" alt="logo"/>References</NavLink>
                        <NavLink activeClassName="active" id="opt" to="/Feedback"><img src={require("../img/feedback.png")}width="65" alt="logo"/>Feedback</NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
        )
    }
}

export default navbar