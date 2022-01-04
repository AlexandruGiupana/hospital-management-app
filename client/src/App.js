import React from "react";
import NavBar from "./components/common-components/nav-bar";
import Footer from "./components/common-components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./components/pages/dashboard-page";
import HomePage from "./components/pages/home-page";
import ProfilePage from "./components/pages/profile-page";
import CreateAppointmentPage from "./components/pages/create-appointment-page";
import AppointmentsTablePage from "./components/pages/appointments-table-page";
import HealthServices from "./components/pages/health-services";
import WardsManagement from "./components/pages/wards-management";
import Departments from "./components/pages/departments";
import RoomsManagement from "./components/pages/rooms-management";
import PricesPage from "./components/pages/services-page";
import AboutPage from "./components/common-components/about-page";
import NewsPage from "./components/common-components/news-page";
import DoctorManagement from "./components/pages/doctor-management";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/dashboard" exact element={<DashboardPage />} />
          <Route path="/profile" exact element={<ProfilePage />} />
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
          <Route path="/news-page" exact element={<NewsPage />} />
          <Route path="/wards-management" exact element={<WardsManagement />} />
          <Route path="/departments" exact element={<Departments />} />
          <Route path="/rooms-management" exact element={<RoomsManagement />} />
          <Route
            path="/employee-management"
            exact
            element={<DoctorManagement />}
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
