import { con } from "../db_connection.js";
import {
  INSERT_APPOINTMENT_QUERY,
  SELECT_ALL_APPOINTMENTS_QUERY,
  SELECT_APPOINTMENTS_DATA_OF_DOCTOR_QUERY
} from "../sql_queries/appointments-queries.js";

export const getAppointments = async (req, res) => {
  con.query(SELECT_ALL_APPOINTMENTS_QUERY, (err, result) => {
    if (err) {
      throw err;
    }
    let resultArray = Object.values(JSON.parse(JSON.stringify(result)));
    res.json(resultArray);
  });
};

export const getAppointmentsOfDoctor = async (req, res) => {
  const doctor_id = req.params.id;
  con.query(SELECT_APPOINTMENTS_DATA_OF_DOCTOR_QUERY, [doctor_id], (err, result) => {
    if (err) {
      throw err;
    }
    let resultArray = Object.values(JSON.parse(JSON.stringify(result)));
    res.json(resultArray);
  });
};

export const createAppointment = async (req, res) => {
  const {
    patient_id,
    service_rep_id,
    hospital_room_id,
    additional_information,
    start_date,
    end_date,
  } = req.body;
  con.query(
    INSERT_APPOINTMENT_QUERY,
    [
      patient_id,
      service_rep_id,
      hospital_room_id,
      additional_information,
      start_date,
      end_date,
    ],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.json({
        appointment: {
          patient_id: patient_id,
          service_rep_id: service_rep_id,
          hospital_room_id: hospital_room_id,
          additional_information: additional_information,
          start_date: start_date,
          end_date: end_date,
        },
      });
    }
  );
};
