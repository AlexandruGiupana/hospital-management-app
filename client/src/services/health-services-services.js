import axios from "axios";

export const getMedicalServices = async () => {
  try {
    return await axios.get("http://localhost:8080/services", {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const getMedicalServicesOfDoctor = async (idDoctor) => {
  try {
    return await axios.get(`http://localhost:8080/services/${idDoctor}`, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const createMedicalService = async (data) => {
  try {
    return await axios.post("http://localhost:8080/services/create", data, {
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
