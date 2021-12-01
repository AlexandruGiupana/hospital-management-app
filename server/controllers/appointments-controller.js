import { con } from "../db_connection.js";
import {
  DELETE_APPOINTMENT_QUERY, INSERT_APPOINTMENT_DOCTOR_QUERY,
  INSERT_APPOINTMENT_QUERY,
  SELECT_ALL_APPOINTMENTS_OF_PATIENT,
  SELECT_ALL_APPOINTMENTS_QUERY,
  SELECT_APPOINTMENT_BY_ID_QUERY,
  SELECT_APPOINTMENTS_DATA_OF_DOCTOR_QUERY,
  UPDATE_APPOINTMENT_QUERY
} from "../sql_queries/appointments-queries.js";
import { validateNumberField } from "../validation/general-validation.js";
import { SELECT_DOCTOR_BY_ID_QUERY } from "../sql_queries/doctors-queries.js";
import { SELECT_PATIENT_BY_ID } from "../sql_queries/patient_queries.js";
import {
  checkDateOrder,
  validate_information,
  validateDate,
} from "../validation/appointment-validation.js";
import { SELECT_SERVICE_REPARTITION_BY_ID_QUERY } from "../sql_queries/services_queries.js";
import { SELECT_ROOM_BY_ID_QUERY } from "../sql_queries/room-queries.js";

export const getAppointments = async (req, res) => {
  con.query(SELECT_ALL_APPOINTMENTS_QUERY, (err, result) => {
    if (err) {
      throw err;
    }
    let resultArray = Object.values(JSON.parse(JSON.stringify(result)));
    return res.json(resultArray);
  });
};

export const getAppointmentsOfDoctor = async (req, res) => {
  const doctor_id = req.params.id;
  if (!validateNumberField(doctor_id)) {
    return res.status(400).json({ msg: "Invalid value for id" });
  }
  con.query(SELECT_DOCTOR_BY_ID_QUERY, [doctor_id], (err, result) => {
    if (result.length !== 1) {
      return res.status(404).json({ msg: "Doctor does not exist" });
    } else {
      con.query(
        SELECT_APPOINTMENTS_DATA_OF_DOCTOR_QUERY,
        [doctor_id],
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

export const getAppointmentsOfPatient = async (req, res) => {
  const patient_id = req.params.id;
  if (!validateNumberField(patient_id)) {
    return res.status(400).json({ msg: "Invalid value for id" });
  }
  con.query(SELECT_PATIENT_BY_ID, [patient_id], (err, result) => {
    if (result.length !== 1) {
      return res.status(404).json({ msg: "Patient does not exist" });
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
    return res.status(400).json({ msg: "Invalid value for patient id" });
  }
  if (!validateNumberField(service_rep_id)) {
    return res
      .status(400)
      .json({ msg: "Invalid value for patient service repartition id" });
  }
  if (!validateNumberField(hospital_room_id)) {
    return res.status(400).json({ msg: "Invalid value for hospital room id" });
  }
  if (!validate_information(additional_information)) {
    return res.status(400).json({ msg: "Invalid value for information" });
  }
  if (!validateDate(start_date)) {
    return res.status(400).json({ msg: "Invalid value for start date" });
  }
  if (!validateDate(end_date)) {
    return res.status(400).json({ msg: "Invalid value for end date" });
  }
  if (!checkDateOrder(start_date, end_date)) {
    return res.status(400).json({ msg: "Start date bigger than end date" });
  }

  con.query(SELECT_PATIENT_BY_ID, [patient_id], (err, result) => {
    if (result.length !== 1) {
      return res.status(404).json({ msg: "Patient does not exist" });
    } else {
      con.query(
        SELECT_SERVICE_REPARTITION_BY_ID_QUERY,
        [service_rep_id],
        (err, result) => {
          if (result.length !== 1) {
            return res
              .status(404)
              .json({ msg: "Health service repartition does not exist" });
          } else {
            con.query(
              SELECT_ROOM_BY_ID_QUERY,
              [hospital_room_id],
              (err, result) => {
                if (result.length !== 1) {
                  return res.status(404).json({ msg: "Room does not exist" });
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
  console.log(req.body)
  if (!validateNumberField(service_rep_id)) {
    return res
      .status(400)
      .json({ msg: "Invalid value for patient service repartition id" });
  }
  if (!validateNumberField(hospital_room_id)) {
    return res.status(400).json({ msg: "Invalid value for hospital room id" });
  }
  if (!validate_information(additional_information)) {
    return res.status(400).json({ msg: "Invalid value for information" });
  }
  if (!validateDate(start_date)) {
    return res.status(400).json({ msg: "Invalid value for start date" });
  }
  if (!validateDate(end_date)) {
    return res.status(400).json({ msg: "Invalid value for end date" });
  }
  if (!checkDateOrder(start_date, end_date)) {
    return res.status(400).json({ msg: "Start date bigger than end date" });
  }
  con.query(
    SELECT_SERVICE_REPARTITION_BY_ID_QUERY,
    [service_rep_id],
    (err, result) => {
      if (result.length !== 1) {
        return res
          .status(404)
          .json({ msg: "Health service repartition does not exist" });
      } else {
        con.query(
          SELECT_ROOM_BY_ID_QUERY,
          [hospital_room_id],
          (err, result) => {
            if (result.length !== 1) {
              return res.status(404).json({ msg: "Room does not exist" });
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
                    throw err;
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
    return res.status(400).json({ msg: "Invalid value for appointment id" });
  }
  if (!validateNumberField(hospital_room_id)) {
    return res.status(400).json({ msg: "Invalid value for hospital room id" });
  }
  if (!validate_information(additional_information)) {
    return res.status(400).json({ msg: "Invalid value for information" });
  }
  if (!validateDate(start_date)) {
    return res.status(400).json({ msg: "Invalid value for start date" });
  }
  if (!validateDate(end_date)) {
    return res.status(400).json({ msg: "Invalid value for end date" });
  }
  if (!checkDateOrder(start_date, end_date)) {
    return res.status(400).json({ msg: "Start date bigger than end date" });
  }

  con.query(SELECT_APPOINTMENT_BY_ID_QUERY, [appointment_id], (err, result) => {
    if (result.length !== 1) {
      return res.status(404).json({ msg: "Appointment does not exist" });
    } else {
      con.query(SELECT_ROOM_BY_ID_QUERY, [hospital_room_id], (err, result) => {
        if (result.length !== 1) {
          return res.status(404).json({ msg: "Room does not exist" });
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
            (err, result) => {
              if (err) {
                throw err;
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
    return res.status(400).json({ msg: "Invalid value for appointment id" });
  }
  con.query(SELECT_APPOINTMENT_BY_ID_QUERY, [id], (err, result) => {
    if (result.length !== 1) {
      return res.status(404).json({ msg: "Appointment does not exist" });
    } else {
      con.query(DELETE_APPOINTMENT_QUERY, [id], (err, result) => {
        if (err) {
          throw err;
        } else {
          return res.json({
            appointmnt: {
              status: "deleted",
            },
          });
        }
      });
    }
  });
};
