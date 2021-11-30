import React, { useEffect, useState } from "react";
import DoctorScheduleAppointment from "./doctor-schedule-appointment";
import { getMedicalServicesOfDoctor } from "../../../../services/health-services-services";
import DoctorChooseService from "./doctor-choose-service";
import { getRooms } from "../../../../services/rooms-services";

const DoctorScheduleAppointmentComponents = () => {
  const [medicalServices, setMedicalServices] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [chosenMedicalService, setChosenMedicalService] = useState(-1);
  const [loadingServices, setLoadingServices] = useState(true);
  const [loadingRooms, setLoadingRooms] = useState(true);

  useEffect(() => {
    const getServices = async () => {
      const services = await getMedicalServicesOfDoctor(10); //todo change id when login is implemented
      setMedicalServices(services.data);
      setChosenMedicalService(services.data[0].id);
      setLoadingServices(false);
    };
    const getRoomsData = async () => {
      const rooms = (await getRooms()).data;
      rooms.map((room) => {
        room.text = room.type + " " + room.room_number;
      });
      setRooms(rooms);
      setLoadingRooms(false);
    };
    getServices();
    getRoomsData();
  }, []);

  if (loadingServices || loadingRooms) {
    return <>Loading...</>;
  }

  return (
    <>
      <DoctorChooseService
        medicalServices={medicalServices}
        setChosenMedicalService={setChosenMedicalService}
      />
      <br />
      <DoctorScheduleAppointment
        chosenMedicalService={chosenMedicalService}
        rooms={rooms}
      />
    </>
  );
};

export default DoctorScheduleAppointmentComponents;
