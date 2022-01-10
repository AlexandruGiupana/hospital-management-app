import axios from "axios";
import { hostAddress } from "../../address";

export const getRooms = async () => {
  try {
    return await axios.get("http://localhost:8080/rooms", {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const createRoom = async (data) => {
  try {
    return await axios.post(`${hostAddress}/rooms/create`, data, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const updateRoom = async (data) => {
  try {
    return await axios.put(`${hostAddress}/rooms/update`, data, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const deleteRoom = async (id) => {
  try {
    await axios.delete(`${hostAddress}/rooms/delete/${id}`, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};
