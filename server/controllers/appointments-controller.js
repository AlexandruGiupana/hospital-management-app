import { con } from "../db_connection.js";

export const getAppointments = async (req, res) => {
  con.query("SELECT * FROM appointments", (err, result) => {
    if (err) {
      throw err;
    }
    let resultArray = Object.values(JSON.parse(JSON.stringify(result)));
    res.json(resultArray);
  });
};

export const getAppointmentsOfDoctor = async (req, res) => {
  const doctor_id = req.params.id;
  let sql =
    "SELECT users.first_name, users.last_name, users.phone_number, services.service_name, appointments.start_date, appointments.end_date, appointments.additional_information FROM appointments inner join users on appointments.patient_id = users.id inner join services on services.id = appointments.service_id inner join hospital_rooms on hospital_rooms.id = appointments.hospital_room_id where doctor_id = ?";
  con.query(sql, [doctor_id], (err, result) => {
    if (err) {
      throw err;
    }
    let resultArray = Object.values(JSON.parse(JSON.stringify(result)));
    res.json(resultArray);
  });
};

export const createAppointment = async (req, res) => {
  const {
    patient_id, doctor_id, service_id, hospital_room_id, additional_information, start_date, end_date
  } = req.body;
  let sql = "INSERT INTO appointments (patient_id, doctor_id, service_id, hospital_room_id, additional_information, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?, ?)";
  con.query(sql, [patient_id, doctor_id, service_id, hospital_room_id, additional_information, start_date, end_date], (err, result) => {
    if (err) {
      throw err;
    }
    res.json({
      appointment: {
        patient_id: patient_id,
        doctor_id: doctor_id,
        service_id: service_id,
        hospital_room_id: hospital_room_id,
        additional_information: additional_information,
        start_date: start_date,
        end_date: end_date
      }
    });
  });
}

