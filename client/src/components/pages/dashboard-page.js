import React from "react";
import Dashboard from "../user-components/dashboard/dashboard";
import SideBar from "../user-components/side-bar/side-bar";
import { Container, ContentContainer, PageTitle } from "../user-components/common-styled-components";

const DashboardPage = ({ user }) => {

  return (
    <Container>
      <SideBar accountType={user.account_type}/>
      <ContentContainer>
        <PageTitle>
          <div>Dashboard</div>
        </PageTitle>
        <hr />
        <Dashboard user={user}/>
      </ContentContainer>
    </Container>
  )
}

export default DashboardPage