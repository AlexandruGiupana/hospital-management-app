import React from "react";
import SideBar from "../user-components/side-bar/side-bar";
import {
  Container,
  ContentContainer,
  PageTitle,
} from "../user-components/common-styled-components";
import {
  DOCTOR_ACCOUNT,
  MANAGER_ACCOUNT,
  PATIENT_ACCOUNT,
} from "../../demo-data/account-types";
import DoctorScheduleAppointmentComponents from "../user-components/appointments/doctor/doctor-schedule-appointment-components";
import PatientScheduleAppointmentComponent from "../user-components/appointments/patient/patient-schedule-appointment-component";
import { getUserData } from "../../services/local-storage-services";

const CreateAppointmentPage = () => {
  const connectedUser = getUserData();

  return (
    <Container>
      <SideBar accountType={connectedUser.data.user.account_type} />
      <ContentContainer>
        <PageTitle>
          <div>Programeaza</div>
        </PageTitle>
        <hr />
        {(connectedUser.data.user.account_type === DOCTOR_ACCOUNT ||
          connectedUser.data.user.account_type === MANAGER_ACCOUNT) && (
          <DoctorScheduleAppointmentComponents />
        )}
        {connectedUser.data.user.account_type === PATIENT_ACCOUNT && (
          <PatientScheduleAppointmentComponent />
        )}
      </ContentContainer>
    </Container>
  );
};

export default CreateAppointmentPage;
