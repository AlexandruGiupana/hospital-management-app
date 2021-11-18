import React from "react";
import SideBar from "../user-components/side-bar/side-bar";
import { Container, ContentContainer, PageTitle } from "../user-components/common-styled-components";
import AppointmentComponent from "../user-components/appointments/appointment-component";
import PatientAppointmentComponent from "../user-components/appointments/patient-appointments-table";
import {DOCTOR_ACCOUNT, MANAGER_ACCOUNT, PATIENT_ACCOUNT} from "../../demo-data/account-types";
const AppointmentsTablePage = ({ user }) => {

  return (
    <Container>
      <SideBar accountType={user.accountType}/>
      <ContentContainer>
        <PageTitle>
          <div>Programari</div>
        </PageTitle>
        <hr />
        {(user.accountType === DOCTOR_ACCOUNT || user.accountType === MANAGER_ACCOUNT) && <AppointmentComponent/>}
        {user.accountType === PATIENT_ACCOUNT && <PatientAppointmentComponent/>}
      </ContentContainer>
    </Container>
  )
}

export default AppointmentsTablePage