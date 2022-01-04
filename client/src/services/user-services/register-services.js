import axios from "axios";

export const registerNewUser = async (data) => {
  try {
    return await axios.post("http://localhost:8080/users/register", data, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};
