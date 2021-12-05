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
