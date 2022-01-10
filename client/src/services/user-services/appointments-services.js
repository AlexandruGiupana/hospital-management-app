import axios from "axios";
import { hostAddress } from "../../address";

export const getAllAppointments = async () => {
  try {
    return await axios.get(`${hostAddress}/appointments`, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const getAppointmentsOfDoctor = async (idDoctor) => {
  try {
    return await axios.get(`${hostAddress}/appointments/doctor/${idDoctor}`, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const getAppointmentsOfDoctorFromDate = async (idDoctor, date) => {
  try {
    return await axios.get(
      `${hostAddress}/appointments/doctor/${idDoctor}/date/${date}`,
      { withCredentials: true }
    );
  } catch (err) {
    throw err;
  }
};

export const getAppointmentsOfPatient = async (idPatient) => {
  try {
    return await axios.get(`${hostAddress}/appointments/patient/${idPatient}`, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const createAppointment = async (data) => {
  try {
    return await axios.post(`${hostAddress}/appointments/create`, data, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const createAppointmentDoctor = async (data) => {
  try {
    return await axios.post(`${hostAddress}/appointments/create/doctor`, data, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const updateAppointment = async (data) => {
  try {
    return await axios.put(`${hostAddress}/appointments/update`, data, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const deleteAppointment = async (id) => {
  try {
    return await axios.delete(
      `http://localhost:8080/appointments/delete/${id}`,
      { withCredentials: true }
    );
  } catch (err) {
    throw err;
  }
};
