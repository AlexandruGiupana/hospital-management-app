import React, {  useState } from "react";
import NavBar from "./components/common-components/nav-bar";
import Footer from "./components/common-components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./components/pages/dashboard-page";
import HomePage from "./components/pages/home-page";
import { Doctor } from "./mokedUsers/doctor";
import ProfilePage from "./components/pages/profile-page";
import Modal from 'react-modal';
import LoginForm from "./components/forms/login";

const App = () => {
  console.log(localStorage.getItem('user'))

  const [modalIsOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    console.log("hello")
    setIsOpen(!modalIsOpen);
  }
  const customStyles = {
    content: {
      top: '50%',
      width: '70%',
      height: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        ariaHideApp={false}
        style={customStyles}
      >
        <button onClick={toggleModal}>close</button>
        <LoginForm />
      </Modal>
      <NavBar toggleModal={toggleModal}/>
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={<HomePage />}
          />
          <Route
            path="/dashboard"
            exact
            element={<DashboardPage user={Doctor}/>}
          />
          <Route
            path="/profile"
            exact
            element={<ProfilePage user={Doctor}/>}
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
