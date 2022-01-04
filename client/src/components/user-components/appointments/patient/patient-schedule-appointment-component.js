import React, { useEffect, useState } from "react";
import PatientScheduleAppointment from "./patient-schedule-appointment";
import PatientChooseServiceAndDoctor from "./patient-choose-service-and-doctor";
import { getAppointmentsOfPatient } from "../../../../services/user-services/appointments-services";
import { getAllRepartitions } from "../../../../services/health-services-services/repartition-services";
import { getRooms } from "../../../../services/rooms-services/rooms-services";
import { toast, ToastContainer } from "react-toastify";
import { getUserData } from "../../../../services/local-storage-services";

const PatientScheduleAppointmentComponent = ({ id }) => {
  const [appointments, setAppointments] = useState([]);
  const [repartitions, setRepartitons] = useState([]);
  const [rooms, setRooms] = useState([]);

  const [appointmentsOfDoctor, setAppointmentsOfDoctor] = useState([]);

  const [loadingAppointments, setLoadingAppointments] = useState(true);
  const [loadingRepartitions, setLoadingRepartitions] = useState(true);
  const [loadingRooms, setLoadingRooms] = useState(true);

  useEffect(() => {
    const getAppointments = async () => {
      const appointmentsData = (
        await getAppointmentsOfPatient(getUserData().data.user.id)
      ).data;
      console.log(appointmentsData);
      let translatedAppointments = [];
      appointmentsData.forEach((appointment) => {
        let translatedAppointment = {
          id: appointment.appointment_id,
          title: `${appointment.service_name} - ${appointment.doctor_first_name} ${appointment.doctor_last_name}`,
          startDate: appointment.start_date,
          endDate: appointment.end_date,
          notes: appointment.additional_information,
          roomId: appointment.room_id,
        };
        translatedAppointments.push(translatedAppointment);
      });
      setAppointments(translatedAppointments);
      setLoadingAppointments(false);
    };
    const getRoomsData = async () => {
      const rooms = (await getRooms()).data;
      rooms.map((room) => {
        room.text = room.type + " " + room.room_number;
      });
      setRooms(rooms);
      setLoadingRooms(false);
    };
    const getRepartitions = async () => {
      const repartitionData = await getAllRepartitions();
      setRepartitons(repartitionData.data);
      setLoadingRepartitions(false);
    };
    getRoomsData();
    getAppointments();
    getRepartitions();
  }, []);

  const notify = (notificationText) => {
    toast(notificationText);
  };

  if (loadingRepartitions || loadingAppointments || loadingRooms) {
    return <>Loading...</>;
  }

  return (
    <>
      <ToastContainer />
      <PatientScheduleAppointment
        repartitions={repartitions}
        rooms={rooms}
        appointments={appointments}
        notify={notify}
      />
    </>
  );
};

export default PatientScheduleAppointmentComponent;
