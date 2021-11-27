import axios from "axios";

export const login = async (data) => {
  try {
    await axios.post("http://localhost:8080/auth", data).then((res) => {
      if (res.data.token) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
    });
  } catch (err) {
    throw err;
  }
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const register = async (data) => {
  try {
    await axios
      .post("http://localhost:8080/users/register", data)
      .then((res) => {
        return res;
      });
  } catch (err) {
    throw err;
  }
};

export const sendAuthHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.data.token) {
    return { "x-auth-token": user.data.token };
  } else {
    return {};
  }
};
