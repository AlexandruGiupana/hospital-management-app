import React from "react";
import SideBar from "../user-components/side-bar/side-bar";

import ProfilePageComponent from "../user-components/profile/profile-page-component";
import {
  Container,
  ContentContainer,
  PageTitle,
} from "../user-components/common-styled-components";
import { getUserData } from "../../services/local-storage-services";

const ProfilePage = () => {
  const connectedUser = getUserData();

  return (
    <Container>
      <SideBar accountType={connectedUser?.data?.user?.account_type} />
      <ContentContainer>
        <PageTitle>Profile</PageTitle>
        <hr />
        <ProfilePageComponent userId={connectedUser?.data?.user?.id} />
      </ContentContainer>
    </Container>
  );
};

export default ProfilePage;
