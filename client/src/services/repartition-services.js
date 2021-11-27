import axios from "axios";

export const assignServiceToDoctor = async (data) => {
  try {
    await axios.post("http://localhost:8080/repartition/assign", data);
  } catch (err) {
    throw err;
  }
}

export const getAllRepartitions = async () => {
  try {
    return await axios.get("http://localhost:8080/repartition");
  } catch (err) {
    throw err;
  }
}

export const deleteRepartition = async (data) => {
  try {
    return await axios.delete("http://localhost:8080/repartition/delete", {
      data: data,
    });
  } catch (err) {
    throw err;
  }
}