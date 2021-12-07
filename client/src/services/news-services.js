import axios from "axios";

export const getNews = async () => {
  try {
    return await axios.get("http://localhost:8080/news");
  } catch (err) {
    throw err;
  }
};
