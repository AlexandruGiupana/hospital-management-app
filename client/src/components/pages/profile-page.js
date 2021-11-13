import React from "react";
import SideBar from "../user-components/side-bar/side-bar";
import styled from "styled-components";
import ProfilePageComponent from "../user-components/profile-page-component";

const ProfilePage = ({ user }) => {

  return (
    <Container>
      <SideBar accountType={user.account_type}/>
      <ContentContainer>
        <PageTitle>
          <div>Profile</div>
        </PageTitle>
        <hr />
        <ProfilePageComponent user={user}/>
      </ContentContainer>
    </Container>
  )
}

const Container = styled.div`
  background: #f8f4ec;
  height: 900px;
  width: 100%;
`

const ContentContainer = styled.div`
  margin-left: 360px;
  margin-right: 80px;
  @media(max-width: 910px) {
    margin-left: 300px;
    margin-right: 50px;
  }
  @media(max-width: 655px) {
    margin-left: 50px;
    margin-right: 50px;
  }
  @media(max-width: 462px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`

const PageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  font-size: 20px;
  color: #777c85;
`

export default ProfilePage