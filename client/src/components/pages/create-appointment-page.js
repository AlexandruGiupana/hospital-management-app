import React from "react";
import SideBar from "../user-components/side-bar/side-bar";
import { Container, ContentContainer, PageTitle } from "../user-components/common-styled-components";
import CreateAppointmentComponent from "../user-components/appointments/create-appointment-component";

const CreateAppointmentPage = ({ user }) => {

  return (
    <Container>
      <SideBar accountType={user.account_type}/>
      <ContentContainer>
        <PageTitle>
          <div>Programeaza</div>
        </PageTitle>
        <hr />
        <CreateAppointmentComponent />
      </ContentContainer>
    </Container>
  )
}

export default CreateAppointmentPage