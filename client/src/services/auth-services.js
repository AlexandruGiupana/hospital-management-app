import axios from "axios";

export const login = async (data) => {
  try {
    const res = await axios.post("http://localhost:8080/users/login", data, {
      withCredentials: true,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export const logout = async () => {
  try {
    return await axios.get("http://localhost:8080/users/logout", {
      withCredentials: true,
    });
  } catch (err) {
    throw err;
  }
};

export const register = async (data) => {
  try {
    await axios
      .post("http://localhost:8080/users/register", data, {
        withCredentials: true,
      })
      .then((res) => {
        return res;
      });
  } catch (err) {
    throw err;
  }
};
