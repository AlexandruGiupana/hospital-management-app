import React from "react";
import SideBar from "../user-components/side-bar/side-bar";
import {
  Container,
  ContentContainer,
  PageTitle,
} from "../user-components/common-styled-components";
import RoomsManagementComponent from "../user-components/wards-rooms/rooms-management-component";
import { getUserData } from "../../services/local-storage-services";
import { CSVLink } from "react-csv";

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
