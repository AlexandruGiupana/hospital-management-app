import axios from "axios";

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
    return await axios.post("http://localhost:8080/rooms/create", data, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const updateRoom = async (data) => {
  try {
    return await axios.put("http://localhost:8080/rooms/update", data, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const deleteRoom = async (id) => {
  try {
    await axios.delete(`http://localhost:8080/rooms/delete/${id}`, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};
