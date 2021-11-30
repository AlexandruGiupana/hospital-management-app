export const SELECT_ALL_REPARTITIONS =
  "SELECT health_services_repartition.id, users.id as doctor_id, users.first_name, users.last_name, health_services.id as health_service_id, health_services.service_name FROM health_services_repartition inner join users on health_services_repartition.doctor_id = users.id inner join health_services on health_services.id = health_services_repartition.health_service_id";
export const DELETE_REPARTITION_QUERY =
  "DELETE FROM health_services_repartition WHERE id = ? ";
export const CHECK_DOCTOR_ALREADY_ASSIGNED_QUERY =
  "SELECT * FROM health_services_repartition WHERE health_service_id = ? and doctor_id = ?";
export const SELECT_REPARTITION_BY_ID_QUERIES =
  "SELECT * FROM health_services_repartition WHERE id = ?";
