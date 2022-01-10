import axios from "axios";
import { hostAddress } from "../../address";

export const getAllDoctors = async () => {
  try {
    return await axios.get(`${hostAddress}/doctors`, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const createDoctor = async (data) => {
  try {
    return await axios.post(`${hostAddress}/doctors/create`, data, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};
