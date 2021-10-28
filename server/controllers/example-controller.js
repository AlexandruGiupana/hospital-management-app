import { con } from "../db_connection.js";

export const getMessage = async (req, res) => {
  con.query("SELECT * FROM test", (err, result) => {
    if (err) {
      throw err;
    }
    let resultArray = Object.values(JSON.parse(JSON.stringify(result)));
    res.json(resultArray);
  });
};
