import axios from "axios";

export const getAllDoctors = async () => {
  try {
    return await axios.get("http://localhost:8080/doctors", {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const createDoctor = async (data) => {
  try {
    return await axios.post("http://localhost:8080/doctors/create", data, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};
