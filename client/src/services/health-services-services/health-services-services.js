import axios from "axios";
import { hostAddress } from "../../address";

export const getMedicalServices = async () => {
  try {
    return await axios.get(`${hostAddress}/services`, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const getMedicalServicesOfDoctor = async (idDoctor) => {
  try {
    return await axios.get(`${hostAddress}/services/${idDoctor}`, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const createMedicalService = async (data) => {
  try {
    return await axios.post(`${hostAddress}/services/create`, data, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const updateMedicalService = async (data) => {
  try {
    await axios.put("http://localhost:8080/services/update", data, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const deleteMedicalService = async (id) => {
  try {
    await axios.delete(`http://localhost:8080/services/delete/${id}`, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};
