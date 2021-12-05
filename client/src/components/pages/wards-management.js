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
import WardsManagementComponent from "../user-components/wards-rooms/wards-management-component";
import { getUserData } from "../../services/local-storage-services";

const WardsManagement = () => {
  const connectedUser = getUserData();

  return (
    <Container>
      <SideBar accountType={connectedUser.data.user.account_type} />
      <ContentContainer>
        <PageTitle>
          <div>
            <h6 className="text-black display-6">Gestiune saloane</h6>
          </div>
        </PageTitle>
        <hr />
        <WardsManagementComponent />
      </ContentContainer>
    </Container>
  );
};

export default WardsManagement;
