import axios from "axios";

export const getMedicalServices = async () => {
  try {
    return await axios.get("http://localhost:8080/services");
  } catch (err) {
    throw err;
  }
};

export const createMedicalService = async (data) => {
  try {
    return await axios.post("http://localhost:8080/services/create", data);
  } catch (err) {
    throw err;
  }
};

export const updateMedicalService = async (data) => {
  try {
    await axios.put("http://localhost:8080/services/update", data);
  } catch (err) {
    throw err;
  }
};

export const deleteMedicalService = async (data) => {
  try {
    const sentData = {
      id: data,
    };
    await axios.delete("http://localhost:8080/services/delete", {
      data: sentData,
    });
  } catch (err) {
    throw err;
  }
};
