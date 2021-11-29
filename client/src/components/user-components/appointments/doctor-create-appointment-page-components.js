import React, { useEffect, useState } from "react";
import DoctorCreateAppointmentTable from "./doctor-create-appointment-table";
import { getMedicalServicesOfDoctor } from "../../../services/health-services-services";
import ChooseServiceDoctor from "./choose-service-doctor";
import { getRooms } from "../../../services/rooms-services";

const DoctorCreateAppointmentPageComponents = () => {

  const [medicalServices, setMedicalServices] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [chosenMedicalService, setChosenMedicalService] = useState(-1);
  const [loadingServices, setLoadingServices] = useState(true);
  const [loadingRooms, setLoadingRooms] = useState(true);

  useEffect(() => {
    const getServices = async () => {
      const services = await  getMedicalServicesOfDoctor(10); //todo change id when login is implemented
      setMedicalServices(services.data);
      setChosenMedicalService(services.data[0].id)
      setLoadingServices(false);
    }
    const getRoomsData = async () => {
      const rooms = (await getRooms()).data;
      rooms.map((room) => {
        room.text = room.type + " " + room.room_number;
      })
      setRooms(rooms);
      setLoadingRooms(false);
    }
    getServices();
    getRoomsData();
  }, []);

  if (loadingServices || loadingRooms) {
    return (
      <>
        Loading...
      </>
    )
  }

  return (
    <>
      <ChooseServiceDoctor medicalServices={medicalServices} setChosenMedicalService={setChosenMedicalService}/>
      <br />
      <DoctorCreateAppointmentTable chosenMedicalService={chosenMedicalService} rooms={rooms}/>
    </>
  )
}

export default DoctorCreateAppointmentPageComponents;
