import React from "react";
import styled from "styled-components";
import {Navbar} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {NavDropdown} from "react-bootstrap";
import {Nav} from "react-bootstrap"
import {Button} from "react-bootstrap";

import './home_page_style.css'
const NavBar = ({ navBarItems }) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" >
        <Container>
          <Navbar.Brand href="#home">Mediplus</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" id = "navBarItem">Home</Nav.Link>
              <Nav.Link href="#pricing" id = "navBarItem">Services & Prices</Nav.Link>
              <Nav.Link href="#pricing" id = "navBarItem">News</Nav.Link>
              <Nav.Link href="#pricing" id = "navBarItem">About</Nav.Link>
              <Nav.Link href="#pricing" id = "navBarItem">Contact</Nav.Link>
              {/*
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              */}
            </Nav>
            <Nav>
              <Button variant="outline-light" id = "navBarButton">Sign up</Button>
              &nbsp;
              &nbsp;
              <Button variant="outline-light" id = "navBarButton">Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};


const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  background: pink;
`;



export default NavBar;
