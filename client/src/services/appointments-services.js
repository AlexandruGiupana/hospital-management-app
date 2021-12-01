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

export const getAppointmentsOfPatient = async (idPatient) => {
  try {
    return await axios.get(
      `http://localhost:8080/appointments/patient/${idPatient}`
    );
  } catch (err) {
    throw err;
  }
};

export const createAppointment = async (data) => {
  try {
    return await axios.post(`http://localhost:8080/appointments/create`, data);
  } catch (err) {
    throw err;
  }
};

export const createAppointmentDoctor = async (data) => {
  try {
    return await axios.post(`http://localhost:8080/appointments/create/doctor`, data);
  } catch (err) {
    throw err;
  }
};

export const updateAppointment = async (data) => {
  try {
    return await axios.put(`http://localhost:8080/appointments/update`, data);
  } catch (err) {
    throw err;
  }
};

export const deleteAppointment = async (id) => {
  try {
    return await axios.delete(
      `http://localhost:8080/appointments/delete/${id}`
    );
  } catch (err) {
    throw err;
  }
};
