import React, {  useState } from "react";
import NavBar from "./components/common-components/nav-bar";
import Footer from "./components/common-components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./components/pages/dashboard-page";
import HomePage from "./components/pages/home-page";
import { Doctor } from "./mokedUsers/doctor";
import { Manager } from "./mokedUsers/manager";
import ProfilePage from "./components/pages/profile-page";
import Modal from 'react-modal';
import LoginForm from "./components/forms/login";
import CreateAppointmentPage from "./components/pages/create-appointment-page";
import AppointmentsTablePage from "./components/pages/appointments-table-page";
import RegisterForm from "./components/forms/register";
import HealthServices from "./components/pages/health-services";
import {Patient} from "./mokedUsers/patient";

const App = () => {
  console.log(localStorage.getItem('user'))

  const [modalLogInOpen, setLoginModalOpen] = useState(false);
  const [modalRegisterOpen, setRegisterModalOpen] = useState(false);

  const toggleModalLogIn = () => {
    setLoginModalOpen(!modalLogInOpen);
  }

  const toggleModalRegister = () => {
    setRegisterModalOpen(!modalRegisterOpen);
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
  const customStyles2 = {
    content: {
      top: '50%',
      width: '70%',
      height: '80%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const mockUser = Doctor;

  return (
    <>
      <Modal
        isOpen={modalLogInOpen}
        onRequestClose={toggleModalLogIn}
        ariaHideApp={false}
        style={customStyles}
      >
        <button onClick={toggleModalLogIn}>close</button>
        <LoginForm />
      </Modal>
      <Modal
        isOpen={modalRegisterOpen}
        onRequestClose={toggleModalRegister}
        ariaHideApp={false}
        style={customStyles2}
      >
        <button onClick={toggleModalRegister}>close</button>
        <RegisterForm />
      </Modal>
      <NavBar toggleModalLogIn={toggleModalLogIn} toggleModalRegister={toggleModalRegister}/>
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
            element={<DashboardPage user={mockUser}/>}
          />
          <Route
            path="/profile"
            exact
            element={<ProfilePage user={mockUser}/>}
          />
          <Route
            path="/create-appointment"
            exact
            element={<CreateAppointmentPage user={mockUser}/>}
          />
          <Route
            path="/appointments"
            exact
            element={<AppointmentsTablePage user={mockUser}/>}
          />
          <Route
            path="/health-services"
            exact
            element={<HealthServices user={Manager}/>}
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
