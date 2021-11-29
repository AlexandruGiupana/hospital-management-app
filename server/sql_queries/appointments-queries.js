export const SELECT_ALL_APPOINTMENTS_QUERY = "SELECT * FROM appointments";
export const SELECT_APPOINTMENTS_DATA_OF_DOCTOR_QUERY =
  "SELECT appointments.id, appointments.start_date, appointments.end_date, appointments.additional_information, health_services.service_name, patients.id, patients.first_name as patient_first_name, patients.last_name as patient_last_name, doct.id, doct.first_name as doctor_first_name, doct.last_name as doctor_last_name" +
  " FROM appointments" +
  " INNER JOIN users patients" +
  " ON appointments.patient_id = patients.id" +
  " INNER JOIN health_services_repartition" +
  " ON health_services_repartition.id = appointments.service_rep_id" +
  " INNER JOIN users doct" +
  " on doct.id = health_services_repartition.doctor_id" +
  " INNER JOIN health_services" +
  " ON health_services.id = health_services_repartition.health_service_id" +
  " WHERE doct.id = ?"
export const INSERT_APPOINTMENT_QUERY = "INSERT INTO appointments (patient_id, service_rep_id, hospital_room_id, additional_information, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?, ?)"