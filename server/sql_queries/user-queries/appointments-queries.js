export const SELECT_ALL_APPOINTMENTS_QUERY = "SELECT * FROM appointments";
export const SELECT_APPOINTMENTS_DATA_OF_DOCTOR_QUERY =
  "SELECT appointments.id as appointment_id, appointments.start_date, hospital_rooms.id as room_id, appointments.end_date, appointments.additional_information, health_services.service_name, patients.id, patients.first_name as patient_first_name, patients.last_name as patient_last_name, doct.id, doct.first_name as doctor_first_name, doct.last_name as doctor_last_name" +
  " FROM appointments" +
  " LEFT JOIN users patients" +
  " ON appointments.patient_id = patients.id" +
  " INNER JOIN health_services_repartition" +
  " ON health_services_repartition.id = appointments.service_rep_id" +
  " INNER JOIN users doct" +
  " on doct.id = health_services_repartition.doctor_id" +
  " INNER JOIN health_services" +
  " ON health_services.id = health_services_repartition.health_service_id" +
  " INNER JOIN hospital_rooms" +
  " ON hospital_rooms.id = appointments.hospital_room_id" +
  " WHERE doct.id = ?";
export const INSERT_APPOINTMENT_QUERY =
  "INSERT INTO appointments (patient_id, service_rep_id, hospital_room_id, additional_information, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?)";
export const INSERT_APPOINTMENT_DOCTOR_QUERY =
  "INSERT INTO appointments (service_rep_id, hospital_room_id, additional_information, start_date, end_date) VALUES (?, ?, ?, ?, ?)";
export const SELECT_ALL_APPOINTMENTS_OF_PATIENT =
  "SELECT appointments.id as appointment_id, appointments.start_date, hospital_rooms.id as room_id, hospital_rooms.type, hospital_rooms.room_number, appointments.end_date, appointments.additional_information, health_services.service_name, patients.id, patients.first_name as patient_first_name, patients.last_name as patient_last_name, doct.id, doct.first_name as doctor_first_name, doct.last_name as doctor_last_name" +
  " FROM appointments" +
  " INNER JOIN users patients" +
  " ON appointments.patient_id = patients.id" +
  " INNER JOIN health_services_repartition" +
  " ON health_services_repartition.id = appointments.service_rep_id" +
  " INNER JOIN users doct" +
  " on doct.id = health_services_repartition.doctor_id" +
  " INNER JOIN health_services" +
  " ON health_services.id = health_services_repartition.health_service_id" +
  " INNER JOIN hospital_rooms" +
  " ON hospital_rooms.id = appointments.hospital_room_id" +
  " WHERE patients.id = ?";
export const UPDATE_APPOINTMENT_QUERY =
  "UPDATE appointments SET hospital_room_id = ?,additional_information = ?,start_date = ?,end_date = ? WHERE id = ?";
export const SELECT_APPOINTMENT_BY_ID_QUERY =
  "SELECT * FROM appointments WHERE id = ?";
export const DELETE_APPOINTMENT_QUERY = "DELETE FROM appointments WHERE id = ?";
export const SELECT_APPOINTMENTS_FROM_DATE =
  "SELECT appointments.id as appointment_id, appointments.start_date, hospital_rooms.id as room_id, appointments.end_date, appointments.additional_information, health_services.service_name, patients.id, patients.first_name as patient_first_name, patients.last_name as patient_last_name, doct.id, doct.first_name as doctor_first_name, doct.last_name as doctor_last_name" +
  " FROM appointments" +
  " LEFT JOIN users patients" +
  " ON appointments.patient_id = patients.id" +
  " INNER JOIN health_services_repartition" +
  " ON health_services_repartition.id = appointments.service_rep_id" +
  " INNER JOIN users doct" +
  " on doct.id = health_services_repartition.doctor_id" +
  " INNER JOIN health_services" +
  " ON health_services.id = health_services_repartition.health_service_id" +
  " INNER JOIN hospital_rooms" +
  " ON hospital_rooms.id = appointments.hospital_room_id" +
  " WHERE doct.id = ? AND appointments.start_date LIKE ?";
