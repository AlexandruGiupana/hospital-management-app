import { con } from "../../db_connection.js";
import {
  DELETE_APPOINTMENT_QUERY,
  INSERT_APPOINTMENT_DOCTOR_QUERY,
  INSERT_APPOINTMENT_QUERY,
  SELECT_ALL_APPOINTMENTS_OF_PATIENT,
  SELECT_ALL_APPOINTMENTS_QUERY,
  SELECT_APPOINTMENT_BY_ID_QUERY,
  SELECT_APPOINTMENTS_DATA_OF_DOCTOR_QUERY,
  SELECT_APPOINTMENTS_FROM_DATE,
  UPDATE_APPOINTMENT_QUERY,
} from "../../sql_queries/user-queries/appointments-queries.js";
import { validateNumberField } from "../../validation/general-validation.js";
import { SELECT_DOCTOR_BY_ID_QUERY } from "../../sql_queries/user-queries/doctors-queries.js";
import { SELECT_PATIENT_BY_ID } from "../../sql_queries/user-queries/patient_queries.js";
import {
  checkDateOrder,
  validate_information,
  validateDate,
} from "../../validation/appointment-validation.js";
import { SELECT_SERVICE_REPARTITION_BY_ID_QUERY } from "../../sql_queries/service-queries/services_queries.js";
import { SELECT_ROOM_BY_ID_QUERY } from "../../sql_queries/room-queries/room-queries.js";
import {
  APPOINTMENT_DOES_NOT_EXIST,
  DOCTOR_DOES_NOT_EXIST,
  INVALID_APPOINTMENT_ID,
  INVALID_DATE,
  INVALID_DOCTOR_ID,
  INVALID_END_DATE,
  INVALID_INFORMATION_NAME,
  INVALID_PATIENT_ID,
  INVALID_REPARTITION_ID,
  INVALID_ROOM_ID,
  INVALID_START_DATE,
  ROOM_DOES_NOT_EXIST,
  SERVER_ERROR,
  SERVICE_DOES_NOT_EXIST,
  SERVICE_REPARTITION_DOES_NOT_EXIST,
} from "../../error-messages/error-messages.js";

export const getAppointments = async (req, res) => {
  con.query(SELECT_ALL_APPOINTMENTS_QUERY, (err, result) => {
    if (err) {
      return res.status(500, SERVER_ERROR);
    }
    let resultArray = Object.values(JSON.parse(JSON.stringify(result)));
    return res.json(resultArray);
  });
};

export const getAppointmentsOfDoctor = async (req, res) => {
  const doctor_id = req.params.id;
  if (!validateNumberField(doctor_id)) {
    return res.status(400).json({ msg: INVALID_DOCTOR_ID });
  }
  con.query(SELECT_DOCTOR_BY_ID_QUERY, [doctor_id], (err, result) => {
    if (result.length !== 1) {
      return res.status(404).json({ msg: DOCTOR_DOES_NOT_EXIST });
    } else {
      con.query(
        SELECT_APPOINTMENTS_DATA_OF_DOCTOR_QUERY,
        [doctor_id],
        (err, result) => {
          if (err) {
            return res.status(500, SERVER_ERROR);
          }
          let resultArray = Object.values(JSON.parse(JSON.stringify(result)));
          return res.json(resultArray);
        }
      );
    }
  });
};

export const getAppointmentsOfDoctorFromDate = (req, res) => {
  const doctor_id = req.params.id;
  const date = req.params.date + "%";
  if (!validateNumberField(doctor_id)) {
    return res.status(400).json({ msg: INVALID_DOCTOR_ID });
  }
  con.query(SELECT_APPOINTMENTS_FROM_DATE, [doctor_id, date], (err, result) => {
    if (err) {
      return res.status(500, SERVER_ERROR);
    } else {
      let resultArray = Object.values(JSON.parse(JSON.stringify(result)));
      return res.json(resultArray);
    }
  });
};

export const getAppointmentsOfPatient = async (req, res) => {
  const patient_id = req.params.id;
  if (!validateNumberField(patient_id)) {
    return res.status(400).json({ msg: INVALID_DOCTOR_ID });
  }
  con.query(SELECT_PATIENT_BY_ID, [patient_id], (err, result) => {
    if (result.length !== 1) {
      return res.status(404).json({ msg: INVALID_PATIENT_ID });
    } else {
      con.query(
        SELECT_ALL_APPOINTMENTS_OF_PATIENT,
        [patient_id],
        (err, result) => {
          if (err) {
            throw err;
          }
          let resultArray = Object.values(JSON.parse(JSON.stringify(result)));
          return res.json(resultArray);
        }
      );
    }
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

  if (!validateNumberField(patient_id)) {
    return res.status(400).json({ msg: INVALID_PATIENT_ID });
  }
  if (!validateNumberField(service_rep_id)) {
    return res.status(400).json({ msg: INVALID_REPARTITION_ID });
  }
  if (!validateNumberField(hospital_room_id)) {
    return res.status(400).json({ msg: INVALID_ROOM_ID });
  }
  if (!validate_information(additional_information)) {
    return res.status(400).json({ msg: INVALID_INFORMATION_NAME });
  }
  if (!validateDate(start_date)) {
    return res.status(400).json({ msg: INVALID_START_DATE });
  }
  if (!validateDate(end_date)) {
    return res.status(400).json({ msg: INVALID_END_DATE });
  }
  if (!checkDateOrder(start_date, end_date)) {
    return res.status(400).json({ msg: INVALID_DATE });
  }

  con.query(SELECT_PATIENT_BY_ID, [patient_id], (err, result) => {
    if (result.length !== 1) {
      return res.status(404).json({ msg: INVALID_PATIENT_ID });
    } else {
      con.query(
        SELECT_SERVICE_REPARTITION_BY_ID_QUERY,
        [service_rep_id],
        (err, result) => {
          if (result.length !== 1) {
            return res
              .status(404)
              .json({ msg: SERVICE_REPARTITION_DOES_NOT_EXIST });
          } else {
            con.query(
              SELECT_ROOM_BY_ID_QUERY,
              [hospital_room_id],
              (err, result) => {
                if (result.length !== 1) {
                  return res.status(404).json({ msg: ROOM_DOES_NOT_EXIST });
                } else {
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
                      return res.json({
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
                }
              }
            );
          }
        }
      );
    }
  });
};

export const createAppointmentDoctor = async (req, res) => {
  const {
    service_rep_id,
    hospital_room_id,
    additional_information,
    start_date,
    end_date,
  } = req.body;
  console.log(req.body);
  if (!validateNumberField(service_rep_id)) {
    return res.status(400).json({ msg: INVALID_REPARTITION_ID });
  }
  if (!validateNumberField(hospital_room_id)) {
    return res.status(400).json({ msg: INVALID_ROOM_ID });
  }
  if (!validate_information(additional_information)) {
    return res.status(400).json({ msg: INVALID_INFORMATION_NAME });
  }
  if (!validateDate(start_date)) {
    return res.status(400).json({ msg: INVALID_START_DATE });
  }
  if (!validateDate(end_date)) {
    return res.status(400).json({ msg: INVALID_END_DATE });
  }
  if (!checkDateOrder(start_date, end_date)) {
    return res.status(400).json({ msg: INVALID_DATE });
  }
  con.query(
    SELECT_SERVICE_REPARTITION_BY_ID_QUERY,
    [service_rep_id],
    (err, result) => {
      if (result.length !== 1) {
        return res.status(404).json({ msg: SERVICE_DOES_NOT_EXIST });
      } else {
        con.query(
          SELECT_ROOM_BY_ID_QUERY,
          [hospital_room_id],
          (err, result) => {
            if (result.length !== 1) {
              return res.status(404).json({ msg: ROOM_DOES_NOT_EXIST });
            } else {
              con.query(
                INSERT_APPOINTMENT_DOCTOR_QUERY,
                [
                  service_rep_id,
                  hospital_room_id,
                  additional_information,
                  start_date,
                  end_date,
                ],
                (err, result) => {
                  if (err) {
                    return res.status(500, SERVER_ERROR);
                  }
                  return res.json({
                    appointment: {
                      service_rep_id: service_rep_id,
                      hospital_room_id: hospital_room_id,
                      additional_information: additional_information,
                      start_date: start_date,
                      end_date: end_date,
                    },
                  });
                }
              );
            }
          }
        );
      }
    }
  );
};

export const updateAppointment = async (req, res) => {
  const {
    hospital_room_id,
    additional_information,
    start_date,
    end_date,
    appointment_id,
  } = req.body;

  if (!validateNumberField(appointment_id)) {
    return res.status(400).json({ msg: INVALID_APPOINTMENT_ID });
  }
  if (!validateNumberField(hospital_room_id)) {
    return res.status(400).json({ msg: INVALID_ROOM_ID });
  }
  if (!validate_information(additional_information)) {
    return res.status(400).json({ msg: INVALID_INFORMATION_NAME });
  }
  if (!validateDate(start_date)) {
    return res.status(400).json({ msg: INVALID_START_DATE });
  }
  if (!validateDate(end_date)) {
    return res.status(400).json({ msg: INVALID_END_DATE });
  }
  if (!checkDateOrder(start_date, end_date)) {
    return res.status(400).json({ msg: INVALID_DATE });
  }

  con.query(SELECT_APPOINTMENT_BY_ID_QUERY, [appointment_id], (err, result) => {
    if (result.length !== 1) {
      return res.status(404).json({ msg: APPOINTMENT_DOES_NOT_EXIST });
    } else {
      con.query(SELECT_ROOM_BY_ID_QUERY, [hospital_room_id], (err, result) => {
        if (result.length !== 1) {
          return res.status(404).json({ msg: ROOM_DOES_NOT_EXIST });
        } else {
          con.query(
            UPDATE_APPOINTMENT_QUERY,
            [
              hospital_room_id,
              additional_information,
              start_date,
              end_date,
              appointment_id,
            ],
            (err) => {
              if (err) {
                return res.status(500, SERVER_ERROR);
              }
              return res.json({
                appointment: {
                  hospital_room_id: hospital_room_id,
                  additional_information: additional_information,
                  start_date: start_date,
                  end_date: end_date,
                },
              });
            }
          );
        }
      });
    }
  });
};

export const deleteAppointment = (req, res) => {
  const id = req.params.id;
  if (!validateNumberField(id)) {
    return res.status(400).json({ msg: INVALID_APPOINTMENT_ID });
  }
  con.query(SELECT_APPOINTMENT_BY_ID_QUERY, [id], (err, result) => {
    if (result.length !== 1) {
      return res.status(404).json({ msg: APPOINTMENT_DOES_NOT_EXIST });
    } else {
      con.query(DELETE_APPOINTMENT_QUERY, [id], (err) => {
        if (err) {
          return res.status(500, SERVER_ERROR);
        } else {
          return res.json({
            appointment: {
              status: "deleted",
            },
          });
        }
      });
    }
  });
};
