import axios from "axios";

export const getAccommodations = async () => {
  try {
    return await axios.get("http://localhost:8080/wards", {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const insertAccommodations = async (data) => {
  try {
    return await axios.post(
      "http://localhost:8080/wards/add-accommodation",
      data,
      {
        withCredentials: true,
      }
    );
  } catch (err) {
    throw err;
  }
};

export const deleteAccommodation = async (data) => {
  try {
    return await axios.delete(
      "http://localhost:8080/wards/delete-accommodation",
      {
        withCredentials: true,
        data: data,
      }
    );
  } catch (err) {
    throw err;
  }
};
