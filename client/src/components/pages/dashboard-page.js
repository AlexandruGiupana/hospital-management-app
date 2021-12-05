import React from "react";
import Dashboard from "../user-components/dashboard/dashboard";
import SideBar from "../user-components/side-bar/side-bar";
import {
  Container,
  ContentContainer,
  PageTitle,
} from "../user-components/common-styled-components";
import { getUserData } from "../../services/local-storage-services";

const DashboardPage = () => {
  const connectedUser = getUserData();

  return (
    <Container>
      <SideBar accountType={connectedUser.data.user.account_type} />
      <ContentContainer>
        <PageTitle>
          <div>Dashboard</div>
        </PageTitle>
        <hr />
        <Dashboard accountType={connectedUser.data.user.account_type} />
      </ContentContainer>
    </Container>
  );
};

export default DashboardPage;
