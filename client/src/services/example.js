import axios from "axios";

export const showMessageFromBackend = async () => {
  try {
    return await axios.get("http://localhost:8080/message");
  } catch (err) {
    throw err;
  }
};
