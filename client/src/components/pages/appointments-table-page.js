import React from "react";
import SideBar from "../user-components/side-bar/side-bar";
import {
  Container,
  ContentContainer,
  PageTitle,
} from "../user-components/common-styled-components";
import DoctorAppointmentsTable from "../user-components/appointments/doctor/doctor-appointments-table";
import PatientAppointmentComponent from "../user-components/appointments/patient/patient-appointments-table";
import {
  DOCTOR_ACCOUNT,
  MANAGER_ACCOUNT,
  PATIENT_ACCOUNT,
} from "../../demo-data/account-types";
import { getUserData } from "../../services/local-storage-services";

const AppointmentsTablePage = () => {
  const connectedUser = getUserData();

  return (
    <Container>
      <SideBar accountType={connectedUser.data.user.account_type} />
      <ContentContainer>
        <PageTitle>
          <div>Programari</div>
        </PageTitle>
        <hr />
        {(connectedUser.data.user.account_type === DOCTOR_ACCOUNT ||
          connectedUser.data.user.account_type === MANAGER_ACCOUNT) && (
          <>
            <></>
            <DoctorAppointmentsTable />
          </>
        )}
        {connectedUser.data.user.account_type === PATIENT_ACCOUNT && (
          <PatientAppointmentComponent />
        )}
      </ContentContainer>
    </Container>
  );
};

export default AppointmentsTablePage;
