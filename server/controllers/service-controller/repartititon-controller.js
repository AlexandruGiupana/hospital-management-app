import { con } from "../../db_connection.js";
import {
  ADD_NEW_REPARTITION_QUERY,
  SELECT_SERVICE_BY_ID_QUERY,
} from "../../sql_queries/service-queries/services_queries.js";
import {
  CHECK_DOCTOR_ALREADY_ASSIGNED_QUERY,
  DELETE_REPARTITION_QUERY,
  SELECT_ALL_REPARTITIONS,
  SELECT_REPARTITION_BY_ID_QUERIES,
  SELECT_REPARTITION_OF_DOCTOR_QUERY,
} from "../../sql_queries/service-queries/repartition-queries.js";
import { validateNumberField } from "../../validation/general-validation.js";
import { SELECT_DOCTOR_BY_ID_QUERY } from "../../sql_queries/user-queries/doctors-queries.js";
import {
  DOCTOR_ALREADY_ASSIGNED,
  DOCTOR_DOES_NOT_EXIST,
  INVALID_DOCTOR_ID,
  INVALID_REPARTITION_ID,
  INVALID_SERVICE_ID,
  REPARTITION_DOES_NOT_EXIST,
  SERVICE_DOES_NOT_EXIST,
} from "../../error-messages/error-messages.js";

export const assignMedicalServiceToDoctor = async (req, res) => {
  const { service_id, doctor_id } = req.body;
  if (!validateNumberField(service_id)) {
    return res.status(400).json({ msg: INVALID_SERVICE_ID });
  }
  if (!validateNumberField(doctor_id)) {
    return res.status(400).json({ msg: INVALID_DOCTOR_ID });
  }
  con.query(
    CHECK_DOCTOR_ALREADY_ASSIGNED_QUERY,
    [service_id, doctor_id],
    (err, result) => {
      if (result.length !== 0) {
        return res.status(409).json({ msg: DOCTOR_ALREADY_ASSIGNED });
      } else {
        con.query(SELECT_DOCTOR_BY_ID_QUERY, [doctor_id], (err, result) => {
          if (result.length === 0) {
            return res.status(400).json({ msg: DOCTOR_DOES_NOT_EXIST });
          } else {
            con.query(
              SELECT_SERVICE_BY_ID_QUERY,
              [service_id],
              (err, result) => {
                if (result.length === 0) {
                  return res.status(404).json({ msg: SERVICE_DOES_NOT_EXIST });
                } else {
                  con.query(
                    ADD_NEW_REPARTITION_QUERY,
                    [service_id, doctor_id],
                    (err, result) => {
                      if (err) {
                        return res.send({
                          success: false,
                          message: "query error",
                          error: err,
                        });
                      }
                      res.json({
                        service: {
                          service_id: service_id,
                          doctor_id: doctor_id,
                        },
                      });
                    }
                  );
                }
              }
            );
          }
        });
      }
    }
  );
};

export const getAllRepartitions = async (req, res) => {
  con.query(SELECT_ALL_REPARTITIONS, (err, result) => {
    if (err) {
      throw err;
    }
    let resultArray = Object.values(JSON.parse(JSON.stringify(result)));
    res.json(resultArray);
  });
};

export const getIdOfRepartition = async (req, res) => {
  const doctor_id = req.params.doctor_id;
  const health_service_id = req.params.health_service_id;
  con.query(
    CHECK_DOCTOR_ALREADY_ASSIGNED_QUERY,
    [doctor_id, health_service_id],
    (err, result) => {
      if (err) {
        throw err;
      }
      let resultArray = Object.values(JSON.parse(JSON.stringify(result)));
      res.json(resultArray);
    }
  );
};

export const getRepartitionsOfDoctor = (req, res) => {
  const doctor_id = req.params.doctor_id;
  if (!validateNumberField(doctor_id)) {
    return res.status(400).json({ msg: INVALID_DOCTOR_ID });
  }
  con.query(SELECT_DOCTOR_BY_ID_QUERY, [doctor_id], (err, result) => {
    if (result.length !== 1) {
      return res.status(404).json({ msg: DOCTOR_DOES_NOT_EXIST });
    } else {
      con.query(
        SELECT_REPARTITION_OF_DOCTOR_QUERY,
        [doctor_id],
        (err, result) => {
          if (err) {
            throw err;
          }
          let resultArray = Object.values(JSON.parse(JSON.stringify(result)));
          res.json(resultArray);
        }
      );
    }
  });
};

export const deleteRepartition = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  if (!validateNumberField(id)) {
    return res.status(400).json({ msg: INVALID_REPARTITION_ID });
  }
  con.query(SELECT_REPARTITION_BY_ID_QUERIES, [id], (err, result) => {
    if (result.length === 0) {
      return res.status(404).json({ msg: REPARTITION_DOES_NOT_EXIST });
    } else {
      con.query(DELETE_REPARTITION_QUERY, [id], (err, result) => {
        if (err) {
          throw err;
        }
        res.json({
          service: {
            status: "deleted",
          },
        });
      });
    }
  });
};
