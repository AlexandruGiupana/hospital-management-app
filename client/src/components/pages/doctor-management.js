import React from "react";
import SideBar from "../user-components/side-bar/side-bar";
import {
  Container,
  ContentContainer,
  PageTitle,
} from "../user-components/common-styled-components";
import { getUserData } from "../../services/local-storage-services";
import EmployeeManagementComponent from "../user-components/employee-management/EmployeeManagementComponent";

const DoctorManagement = () => {
  const connectedUser = getUserData();

  return (
    <Container>
      <SideBar accountType={connectedUser.data.user.account_type} />
      <ContentContainer>
        <PageTitle>Gestiune doctori</PageTitle>
        <hr />
        <EmployeeManagementComponent />
      </ContentContainer>
    </Container>
  );
};

export default DoctorManagement;
