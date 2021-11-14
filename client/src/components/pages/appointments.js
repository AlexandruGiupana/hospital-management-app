import React from "react";
import SideBar from "../user-components/side-bar/side-bar";
import { Container, ContentContainer, PageTitle } from "../user-components/common-styled-components";
import AppointmentComponent from "../user-components/appointments/appointment-component";
const Appointments = ({ user }) => {

  return (
    <Container>
      <SideBar accountType={user.account_type}/>
      <ContentContainer>
        <PageTitle>
          <div>Programari</div>
        </PageTitle>
        <hr />
        <AppointmentComponent />
      </ContentContainer>
    </Container>
  )
}

export default Appointments