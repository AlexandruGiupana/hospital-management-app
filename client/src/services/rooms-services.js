import axios from "axios";

export const getRooms = async () => {
  try {
    return await axios.get("http://localhost:8080/rooms");
  } catch (err) {
    throw err;
  }
};

export const createRoom = async (data) => {
  try {
    return await axios.post("http://localhost:8080/rooms/create", data);
  } catch (err) {
    throw err;
  }
};

export const updateRoom = async (data) => {
  try {
    await axios.put("http://localhost:8080/rooms/update", data);
  } catch (err) {
    throw err;
  }
};

export const deleteRoom = async (data) => {
  try {
    const sentData = {
      id: data,
    };
    await axios.delete("http://localhost:8080/rooms/delete", {
      data: sentData,
    });
  } catch (err) {
    throw err;
  }
};
