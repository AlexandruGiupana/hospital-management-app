import React, { useEffect, useState } from "react";
import SideBar from "../user-components/side-bar/side-bar";
import {
  Container,
  ContentContainer,
  PageTitle,
} from "../user-components/common-styled-components";
import CreateAppointmentComponent from "../user-components/appointments/doctor/doctor-schedule-appointment";
import {
  DOCTOR_ACCOUNT,
  MANAGER_ACCOUNT,
  PATIENT_ACCOUNT,
} from "../../demo-data/account-types";
import PatientCreateAppointments from "../user-components/appointments/patient/patient-schedule-appointment";
import { getAppointmentsOfDoctor } from "../../services/appointments-services";
import { getMedicalServicesOfDoctor } from "../../services/health-services-services";
import DoctorScheduleAppointmentComponents from "../user-components/appointments/doctor/doctor-schedule-appointment-components";
import PatientScheduleAppointmentComponent from "../user-components/appointments/patient/patient-schedule-appointment-component";

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
          <DoctorScheduleAppointmentComponents />
        )}
        {user.accountType === PATIENT_ACCOUNT && (
          <PatientScheduleAppointmentComponent />
        )}
      </ContentContainer>
    </Container>
  );
};

export default CreateAppointmentPage;
