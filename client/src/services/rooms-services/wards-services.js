import axios from "axios";
import { hostAddress } from "../../address";

export const getAccommodations = async () => {
  try {
    return await axios.get(`${hostAddress}/wards`, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const insertAccommodations = async (data) => {
  try {
    return await axios.post(`${hostAddress}/wards/add-accommodation`, data, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const deleteAccommodation = async (data) => {
  try {
    return await axios.delete(`${hostAddress}/wards/delete-accommodation`, {
      withCredentials: true,
      data: data,
    });
  } catch (err) {
    throw err;
  }
};
