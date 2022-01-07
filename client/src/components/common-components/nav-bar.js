import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { logout } from "../../services/user-services/auth-services";
import { useNavigate } from "react-router-dom";

import "../home-page-components/styles/home_page_style.css";
import {
  clearUser,
  getUserData,
  isUserData,
  saveUserData,
} from "../../services/local-storage-services";
import Modal from "react-modal";
import { loginModal, registerModal } from "./styles/modalStyles";
import LoginForm from "../forms/login";
import RegisterForm from "../forms/register";
const NavBar = () => {
  const [modalLogInOpen, setLoginModalOpen] = useState(false);
  const [modalRegisterOpen, setRegisterModalOpen] = useState(false);

  const toggleModalLogIn = () => {
    setLoginModalOpen(!modalLogInOpen);
  };

  const toggleModalRegister = () => {
    setRegisterModalOpen(!modalRegisterOpen);
  };

  const [connectedUser, setConnectedUser] = useState(null);

  const setData = (data) => {
    setConnectedUser(data.data.user);
    saveUserData(data);
  };

  useEffect(() => {
    if (isUserData()) {
      const userData = getUserData();
      setConnectedUser(userData);
    }
  }, []);

  let navigate = useNavigate();
  const handleLogOut = () => {
    logout().then((res) => {
      clearUser();
      navigate("/");
    });
  };
  return (
    <div>
      <Modal
        isOpen={modalLogInOpen}
        onRequestClose={toggleModalLogIn}
        ariaHideApp={false}
        style={loginModal}
      >
        <LoginForm setData={setData} toggleModalLogIn={toggleModalLogIn} />
      </Modal>
      <Modal
        isOpen={modalRegisterOpen}
        onRequestClose={toggleModalRegister}
        ariaHideApp={false}
        style={registerModal}
      >
        <RegisterForm toggleModalRegister={toggleModalRegister} />
      </Modal>
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
              <Nav.Link href="/news-page" id="navBarItem">
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
                  Log in
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

export default NavBar;
