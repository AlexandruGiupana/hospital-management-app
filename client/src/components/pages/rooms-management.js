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
import RoomsManagementComponent from "../user-components/wards-rooms/rooms-management-component";
import { getUserData } from "../../services/local-storage-services";

const RoomsManagement = () => {
  const connectedUser = getUserData();

  return (
    <Container>
      <SideBar accountType={connectedUser.data.user.account_type} />
      <ContentContainer>
        <PageTitle>Sali spital</PageTitle>
        <hr />
        <RoomsManagementComponent />
      </ContentContainer>
    </Container>
  );
};

export default RoomsManagement;
