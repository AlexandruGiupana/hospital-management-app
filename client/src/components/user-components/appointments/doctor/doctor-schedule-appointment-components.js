import React, { useEffect, useState } from "react";
import DoctorScheduleAppointment from "./doctor-schedule-appointment";
import { getMedicalServicesOfDoctor } from "../../../../services/health-services-services/health-services-services";
import DoctorChooseService from "./doctor-choose-service";
import { getRooms } from "../../../../services/rooms-services/rooms-services";
import { getAppointmentsOfDoctor } from "../../../../services/user-services/appointments-services";
import { toast, ToastContainer } from "react-toastify";
import {
  getAllRepartitions,
  getRepartitionOfDoctor,
} from "../../../../services/health-services-services/repartition-services";
import { getUserData } from "../../../../services/local-storage-services";
import { CSVLink } from "react-csv";

const DoctorScheduleAppointmentComponents = () => {
  const [repartitions, setRepartitons] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const [loadingAppointments, setLoadingAppointments] = useState(true);
  const [loadingRepartitions, setLoadingRepartitions] = useState(true);
  const [loadingRooms, setLoadingRooms] = useState(true);

  useEffect(() => {
    const getRepartitions = async () => {
      const repartitionData = await getRepartitionOfDoctor(
        getUserData().data.user.id
      );
      setRepartitons(repartitionData.data);
      setLoadingRepartitions(false);
    };
    const getRoomsData = async () => {
      const rooms = (await getRooms()).data;
      rooms.map((room) => {
        room.text = room.type + " " + room.room_number;
      });
      setRooms(rooms);
      setLoadingRooms(false);
    };
    const getAppointments = async () => {
      const appointments = (
        await getAppointmentsOfDoctor(getUserData().data.user.id)
      ).data;
      let translatedAppointments = [];
      appointments.forEach((appointment) => {
        let translatedAppointment = {};
        if (appointment.patient_first_name !== null) {
          translatedAppointment = {
            id: appointment.appointment_id,
            title: `${appointment.service_name}`,
            startDate: appointment.start_date,
            endDate: appointment.end_date,
            notes: `Nume: ${appointment.patient_first_name} ${appointment.patient_last_name}\nInformatii:\n${appointment.additional_information}`,
            roomId: appointment.room_id,
          };
        } else {
          translatedAppointment = {
            id: appointment.appointment_id,
            title: `${appointment.service_name}`,
            startDate: appointment.start_date,
            endDate: appointment.end_date,
            notes: `Informatii:${appointment.additional_information}`,
            roomId: appointment.room_id,
          };
        }
        translatedAppointments.push(translatedAppointment);
      });

      setAppointments(translatedAppointments);
      setLoadingAppointments(false);
    };
    getRepartitions();
    getAppointments();
    getRoomsData();
  }, []);

  if (loadingRepartitions || loadingRooms || loadingAppointments) {
    return <>Loading...</>;
  }

  const notify = (notificationText) => {
    toast(notificationText);
  };

  console.log(appointments);

  return (
    <>
      <ToastContainer />
      <DoctorScheduleAppointment
        notify={notify}
        repartitions={repartitions}
        rooms={rooms}
        appointments={appointments}
      />
    </>
  );
};

export default DoctorScheduleAppointmentComponents;
