import axios from "axios";

export const getAllAppointments = async () => {
  try {
    return await axios.get("http://localhost:8080/appointments", {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const getAppointmentsOfDoctor = async (idDoctor) => {
  try {
    return await axios.get(
      `http://localhost:8080/appointments/doctor/${idDoctor}`,
      { withCredentials: true }
    );
  } catch (err) {
    throw err;
  }
};

export const getAppointmentsOfDoctorFromDate = async (idDoctor, date) => {
  try {
    return await axios.get(
      `http://localhost:8080/appointments/doctor/${idDoctor}/date/${date}`,
      { withCredentials: true }
    );
  } catch (err) {
    throw err;
  }
};

export const getAppointmentsOfPatient = async (idPatient) => {
  try {
    return await axios.get(
      `http://localhost:8080/appointments/patient/${idPatient}`,
      { withCredentials: true }
    );
  } catch (err) {
    throw err;
  }
};

export const createAppointment = async (data) => {
  try {
    return await axios.post(`http://localhost:8080/appointments/create`, data, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const createAppointmentDoctor = async (data) => {
  try {
    return await axios.post(
      `http://localhost:8080/appointments/create/doctor`,
      data,
      { withCredentials: true }
    );
  } catch (err) {
    throw err;
  }
};

export const updateAppointment = async (data) => {
  try {
    return await axios.put(`http://localhost:8080/appointments/update`, data, {
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
