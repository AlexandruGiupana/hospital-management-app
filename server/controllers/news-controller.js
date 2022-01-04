import { con } from "../db_connection.js";
import { SELECT_ALL_NEWS } from "../sql_queries/news-queries.js";
import { SERVER_ERROR } from "../error-messages/error-messages.js";

export const getNews = (req, res) => {
  con.query(SELECT_ALL_NEWS, (err, result) => {
    if (err) {
      return res.status(500).json({ msg: SERVER_ERROR });
    }
    const resultArray = Object.values(JSON.parse(JSON.stringify(result)));
    return res.json(resultArray);
  });
};
