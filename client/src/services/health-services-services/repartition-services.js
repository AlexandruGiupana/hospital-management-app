import axios from "axios";
import { hostAddress } from "../../address";

export const assignServiceToDoctor = async (data) => {
  try {
    await axios.post(`${hostAddress}/repartition/assign`, data, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const getAllRepartitions = async () => {
  try {
    return await axios.get(`${hostAddress}/repartition`, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const deleteRepartition = async (id) => {
  try {
    return await axios.delete(`${hostAddress}/repartition/delete/${id}`, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const getIdOfRepartiton = async (serviceId, doctorId) => {
  try {
    return await axios.get(
      `${hostAddress}/repartition/id/${serviceId}/${doctorId}`,
      { withCredentials: true }
    );
  } catch (err) {
    throw err;
  }
};

export const getRepartitionOfDoctor = async (doctorId) => {
  try {
    return await axios.get(`${hostAddress}/repartition/${doctorId}`, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};
