import axios from "axios";
import { hostAddress } from "../../address";

export const login = async (data) => {
  try {
    const res = await axios.post(`${hostAddress}/users/login`, data, {
      withCredentials: true,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export const logout = async () => {
  try {
    return await axios.get(`${hostAddress}/users/logout`, {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const register = async (data) => {
  try {
    await axios
      .post(`${hostAddress}/users/register`, data, {
        withCredentials: true,
      })
      .then((res) => {
        return res;
      });
  } catch (err) {
    throw err;
  }
};
