import React, { useEffect, useState } from "react";
import PatientCreateAppointment from "./patient-create-appointment";
import PatientChooseServiceAndDoctor from "./patient-choose-service-and-doctor";
import { getAppointmentsOfPatient } from "../../../../services/appointments-services";
import { getAllDoctors } from "../../../../services/doctors-services";
import { getMedicalServices } from "../../../../services/health-services-services";
import {
  getAllRepartitions,
  getIdOfRepartiotion,
  getIdOfRepartiton,
} from "../../../../services/repartition-services";
import { getRooms } from "../../../../services/rooms-services";
import { forEach } from "react-bootstrap/ElementChildren";
const PatientScheduleAppointmentComponent = () => {
  const [appointments, setAppointments] = useState([]);
  const [repartitions, setRepartitons] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [repartitonId, setRepartitonId] = useState();

  const [chosenServiceAndDoctor, setChosenServiceAndDoctor] = useState(-1);

  const [loadingAppointments, setLoadingAppointments] = useState(true);
  const [loadingRepartitions, setLoadingRepartitions] = useState(true);
  const [loadingRooms, setLoadingRooms] = useState(true);

  useEffect(() => {
    const getAppointments = async () => {
      const appointmentsData = (await getAppointmentsOfPatient(15)).data; //todo replace when login is implemented
      console.log(appointmentsData);
      let translatedAppointments = [];
      appointmentsData.forEach((appointment) => {
        let translatedAppointment = {
          title: appointment.service_name,
          startDate: appointment.start_date,
          endDate: appointment.end_date,
          notes: `Nume: ${appointment.patient_first_name}\nPrenume: ${appointment.patient_last_name}`,
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
      setRepartitonId(repartitionData.data[0].id);
      setLoadingRepartitions(false);
    };
    getRoomsData();
    getAppointments();
    getRepartitions();
  }, []);

  if (loadingRepartitions || loadingAppointments || loadingRooms) {
    return <>Loading...</>;
  }

  return (
    <>
      <PatientChooseServiceAndDoctor
        repartitions={repartitions}
        setChosenServiceAndDoctor={setChosenServiceAndDoctor}
      />
      <br />
      <PatientCreateAppointment
        repartitonId={repartitonId}
        rooms={rooms}
        appointments={appointments}
      />
    </>
  );
};

export default PatientScheduleAppointmentComponent;
