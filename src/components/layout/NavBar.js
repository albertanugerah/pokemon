import React, {Component} from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar"


class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" fixed={"top"} sticky={"top"}>
                <Navbar.Brand href="#">Pokemon</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#list">List</Nav.Link>
                        <Nav.Link href="#link">My Pokemon List</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;