import axios from "axios";

export const getUserInformation = async (id) => {
  try {
    return await axios.get(`http://localhost:8080/users/${id}`, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const updateUserInformation = async (id, data) => {
  try {
    return await axios.put(`http://localhost:8080/users/update/${id}`, data, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};
