import axios from "axios";
import { hostAddress } from "../../address";

export const registerNewUser = async (data) => {
  try {
    return await axios.post(`${hostAddress}/users/register`, data, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};
