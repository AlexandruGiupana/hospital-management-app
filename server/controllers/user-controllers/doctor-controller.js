import { con } from "../../db_connection.js";
import {
  INSERT_DOCTOR,
  SELECT_ALL_DOCTORS_QUERY,
  SELECT_DOCTOR_BY_ID_QUERY,
  UPDATE_USER_TO_DOCTOR,
} from "../../sql_queries/user-queries/doctors-queries.js";
import { SELECT_USER_ID_QUERY } from "../../sql_queries/user-queries/user-queries.js";

export const getAllDoctors = async (req, res) => {
  con.query(SELECT_ALL_DOCTORS_QUERY, (err, result) => {
    if (err) {
      throw err;
    }
    let resultArray = Object.values(JSON.parse(JSON.stringify(result)));
    res.json(resultArray);
  });
};

export const createDoctor = async (req, res) => {
  const { id, job_title } = req.body;
  con.query(SELECT_USER_ID_QUERY, [id], (err, result) => {
    if (result.length !== 1) {
      return res.status(404).json({ msg: "User not found" });
    } else {
      con.query(SELECT_DOCTOR_BY_ID_QUERY, [id], (err, result) => {
        if (result.length === 1) {
          return res.status(404).json({ msg: "User is already a doctor" });
        } else {
          con.query(INSERT_DOCTOR, [id, job_title], (err, result) => {
            if (err) {
              throw err;
            }
          });
          con.query(UPDATE_USER_TO_DOCTOR, [id], (err, result) => {
            if (err) {
              throw err;
            }
          });
          return res.json({
            service: {
              user_id: id,
              job_title: job_title,
            },
          });
        }
      });
    }
  });
};
