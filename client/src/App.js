import React, { useEffect, useState } from "react";
import NavBar from "./components/common-components/nav-bar";
import Footer from "./components/common-components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./components/pages/dashboard-page";
import HomePage from "./components/pages/home-page";
import { Doctor } from "./mokedUsers/doctor";
import { Manager } from "./mokedUsers/manager";
import ProfilePage from "./components/pages/profile-page";
import Modal from "react-modal";
import LoginForm from "./components/forms/login";
import CreateAppointmentPage from "./components/pages/create-appointment-page";
import AppointmentsTablePage from "./components/pages/appointments-table-page";
import RegisterForm from "./components/forms/register";
import HealthServices from "./components/pages/health-services";
import { Patient } from "./mokedUsers/patient";
import WardsManagement from "./components/pages/wards-management";
import DepartmentsComponent from "./components/user-components/departments/DepartmentsComponent";
import Departments from "./components/pages/departments";
import RoomsManagement from "./components/pages/rooms-management";
import {
  getAllAppointments,
  getAppointmentsOfDoctor,
} from "./services/appointments-services";
import PricesPage from "./components/pages/services-page";
import AboutPage from "./components/common-components/about-page";
import axios from "axios";
import {
  getUserData,
  isUserData,
  saveUserData,
} from "./services/local-storage-services";

const App = () => {
  const [modalLogInOpen, setLoginModalOpen] = useState(false);
  const [modalRegisterOpen, setRegisterModalOpen] = useState(false);

  const toggleModalLogIn = () => {
    setLoginModalOpen(!modalLogInOpen);
  };

  const toggleModalRegister = () => {
    setRegisterModalOpen(!modalRegisterOpen);
  };

  const customStyles = {
    content: {
      width: "450px",
      overflow: "hidden",
      height: "50%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const customStyles2 = {
    content: {
      width: "480px",
      overflow: "hidden",
      height: "70%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
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

  return (
    <>
      <Router>
        <NavBar
          toggleModalLogIn={toggleModalLogIn}
          toggleModalRegister={toggleModalRegister}
          connectedUser={connectedUser}
        />
        <Modal
          isOpen={modalLogInOpen}
          onRequestClose={toggleModalLogIn}
          ariaHideApp={false}
          style={customStyles}
        >
          <LoginForm setData={setData} toggleModalLogIn={toggleModalLogIn} />
        </Modal>
        <Modal
          isOpen={modalRegisterOpen}
          onRequestClose={toggleModalRegister}
          ariaHideApp={false}
          style={customStyles2}
        >
          <RegisterForm toggleModalRegister={toggleModalRegister} />
        </Modal>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/dashboard" exact element={<DashboardPage />} />
          <Route
            path="/profile"
            exact
            element={<ProfilePage user={Patient} />}
          />
          <Route
            path="/create-appointment"
            exact
            element={<CreateAppointmentPage />}
          />
          <Route
            path="/appointments"
            exact
            element={<AppointmentsTablePage />}
          />
          <Route path="/health-services" exact element={<HealthServices />} />
          <Route path="/services_page" exact element={<PricesPage />} />
          <Route path="/about-page" exact element={<AboutPage />} />
          <Route path="/wards-management" exact element={<WardsManagement />} />
          <Route path="/departments" exact element={<Departments />} />
          <Route path="/rooms-management" exact element={<RoomsManagement />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
