import React from "react";
import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { logout } from "../../services/auth-services";
import { useNavigate } from "react-router-dom";

import "../home-page-components/styles/home_page_style.css";
import { clearUser, isUserData } from "../../services/local-storage-services";
const NavBar = ({ toggleModalLogIn, toggleModalRegister }) => {
  let navigate = useNavigate();
  const handleLogOut = () => {
    logout().then((res) => {
      clearUser();
      navigate("/");
    });
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navBarContainer border-bottom border-dark"
      >
        <Container>
          <Navbar.Brand href="/">Mediplus</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" id="navBarItem">
                Home
              </Nav.Link>
              <Nav.Link href="/services_page" id="navBarItem">
                Services & Prices
              </Nav.Link>
              <Nav.Link href="/news" id="navBarItem">
                News
              </Nav.Link>
              <Nav.Link href="/about-page" id="navBarItem">
                About
              </Nav.Link>
              <Nav.Link href="/contact" id="navBarItem">
                Contact
              </Nav.Link>
              {isUserData() && (
                <Nav.Link href="/profile" id="navBarItem">
                  Profile
                </Nav.Link>
              )}
            </Nav>

            {!isUserData() ? (
              <Nav>
                <Button
                  variant="outline-dark"
                  id="navBarButton"
                  onClick={toggleModalRegister}
                >
                  Sign up
                </Button>
                &nbsp; &nbsp;
                <Button
                  variant="outline-dark"
                  id="navBarButton"
                  onClick={toggleModalLogIn}
                >
                  Login
                </Button>
              </Nav>
            ) : (
              <Nav>
                <Button
                  variant="outline-dark"
                  id="navBarButton"
                  onClick={handleLogOut}
                >
                  Log Out
                </Button>
              </Nav>
            )}
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
