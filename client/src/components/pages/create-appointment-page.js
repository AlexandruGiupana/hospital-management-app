import React from "react";
import SideBar from "../user-components/side-bar/side-bar";
import {
  Container,
  ContentContainer,
  PageTitle,
} from "../user-components/common-styled-components";
import CreateAppointmentComponent from "../user-components/appointments/doctor-create-appointment-component";
import {
  DOCTOR_ACCOUNT,
  MANAGER_ACCOUNT,
  PATIENT_ACCOUNT,
} from "../../demo-data/account-types";
import PatientCreateAppointments from "../user-components/appointments/patient-create-appointment";

const CreateAppointmentPage = ({ user }) => {
  return (
    <Container>
      <SideBar accountType={user.accountType} />
      <ContentContainer>
        <PageTitle>
          <div>Programeaza</div>
        </PageTitle>
        <hr />
        {(user.accountType === DOCTOR_ACCOUNT ||
          user.accountType === MANAGER_ACCOUNT) && (
          <CreateAppointmentComponent />
        )}
        {user.accountType === PATIENT_ACCOUNT && <PatientCreateAppointments />}
      </ContentContainer>
    </Container>
  );
};

export default CreateAppointmentPage;
