import React from "react";
import SideBar from "../user-components/side-bar/side-bar";

import ProfilePageComponent from "../user-components/profile/profile-page-component";
import { Container, ContentContainer, PageTitle } from "../user-components/common-styled-components";

const ProfilePage = ({ user }) => {

  return (
    <Container>
      <SideBar accountType={user.accountType}/>
      <ContentContainer>
        <PageTitle>
          Profile
        </PageTitle>
        <hr />
        <ProfilePageComponent user={user}/>
      </ContentContainer>
    </Container>
  )
}


export default ProfilePage