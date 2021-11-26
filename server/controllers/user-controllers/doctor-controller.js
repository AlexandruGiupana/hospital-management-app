import { con } from "../../db_connection.js";

export const getAllDoctors = async (req, res) => {
  con.query("SELECT * FROM doctors", (err, result) => {
    if (err) {
      throw err;
    }
    let resultArray = Object.values(JSON.parse(JSON.stringify(result)));
    res.json(resultArray);
  });
};

export const createDoctor = async (req, res) => {
  const {
    user_id, job_title
  } = req.body;
  let sql = "INSERT INTO doctors (user_id, job_title) VALUES (?, ?)";
  con.query(sql, [user_id, job_title], (err, result) => {
    if (err) {
      throw err;
    }
    res.json({
      service: {
        user_id: user_id,
        job_title: job_title
      }
    });
  });
}