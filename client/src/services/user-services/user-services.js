import axios from "axios";
import { hostAddress } from "../../address";

export const getUserInformation = async (id) => {
  try {
    return await axios.get(`${hostAddress}/users/${id}`, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const updateUserInformation = async (id, data) => {
  try {
    return await axios.put(`${hostAddress}/users/update/${id}`, data, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};
