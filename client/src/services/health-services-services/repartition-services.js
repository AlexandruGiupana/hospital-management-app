import axios from "axios";

export const assignServiceToDoctor = async (data) => {
  try {
    await axios.post("http://localhost:8080/repartition/assign", data, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const getAllRepartitions = async () => {
  try {
    return await axios.get("http://localhost:8080/repartition", {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const deleteRepartition = async (id) => {
  try {
    return await axios.delete(
      `http://localhost:8080/repartition/delete/${id}`,
      {
        withCredentials: true,
      }
    );
  } catch (err) {
    throw err;
  }
};

export const getIdOfRepartiton = async (serviceId, doctorId) => {
  try {
    return await axios.get(
      `http://localhost:8080/repartition/id/${serviceId}/${doctorId}`,
      { withCredentials: true }
    );
  } catch (err) {
    throw err;
  }
};

export const getRepartitionOfDoctor = async (doctorId) => {
  try {
    return await axios.get(`http://localhost:8080/repartition/${doctorId}`, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};
