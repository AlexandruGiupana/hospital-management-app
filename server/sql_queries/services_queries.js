export const SELECT_ALL_MEDICAL_SERVICES_QUERY =
  "SELECT * FROM health_services";
export const SELECT_ALL_MEDICAL_SERVICES_OF_DOCTOR_QUERY =
  "SELECT DISTINCT health_services.service_name, health_services.id" +
  " FROM health_services_repartition" +
  " INNER JOIN health_services" +
  " ON health_services_repartition.health_service_id = health_services.id" +
  " INNER JOIN users" +
  " ON users.id = health_services_repartition.doctor_id";
export const CREATE_NEW_MEDICAL_SERVICE_QUERY =
  "INSERT INTO health_services (service_name, price) VALUES (?, ?)";
export const DELETE_MEDICAL_SERVICE_QUERY =
  "DELETE FROM health_services WHERE id = ?";
export const EDIT_MEDICAL_SERVICE_QUERY =
  "UPDATE health_services SET service_name = ?, price = ? WHERE id = ?";
export const EDIT_MEDICAL_SERVICE_PRICE_QUERY =
  "UPDATE health_services SET price = ? WHERE id = ?";
export const EDIT_MEDICAL_SERVICE_NAME_QUERY =
  "UPDATE health_services SET service_name = ? WHERE id = ?";
export const ADD_NEW_REPARTITION_QUERY =
  "INSERT INTO health_services_repartition (health_service_id, doctor_id) VALUES (?, ?)";
export const SELECT_SERVICE_BY_ID_QUERY =
  "SELECT * FROM health_services WHERE id = ?";
export const SELECT_DOCTORS_THAT_OFFER_SERVICE_QUERY =
  "SELECT * FROM health_services INNER JOIN health_services_repartition on health_services.id = health_services_repartition.health_service_id WHERE health_services.id = ?";
export const SELECT_SERVICE_REPARTITION_BY_ID_QUERY =
  "SELECT * FROM health_services_repartition WHERE id = ?";
