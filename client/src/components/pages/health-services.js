import React from "react";
import SideBar from "../user-components/side-bar/side-bar";
import {
  Container,
  ContentContainer,
  PageTitle,
} from "../user-components/common-styled-components";
import HealthServicesComponent from "../user-components/health-services/health-services-component";
import styled from "styled-components";
import HealthServicesRepartitions from "../user-components/health-services/health-services-repartitions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HealthServices = ({ user }) => {
  const notify = (notificationText) => {
    toast(notificationText);
  };

  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <SideBar accountType={user.accountType} />
      <ContentContainer>
        <PageTitle>
          <div>
            <h6 className="text-black display-6">Servicii medicale</h6>
          </div>
        </PageTitle>
        <hr />
        <HealthServicesRepartitions notify={notify} />
        &nbsp; &nbsp;
        <HealthServicesComponent notify={notify} />
      </ContentContainer>
    </Container>
  );
};

export default HealthServices;
