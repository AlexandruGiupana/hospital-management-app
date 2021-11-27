import axios from "axios";

export const getAllAppointments = async () => {
  try {
    return await axios.get("http://localhost:8080/appointments");
  } catch (err) {
    throw err;
  }
};

export const getAppointmentsOfDoctor = async (idDoctor) => {
  try {
    return await axios.get(
      `http://localhost:8080/appointments/doctor/${idDoctor}`
    );
  } catch (err) {
    throw err;
  }
};
