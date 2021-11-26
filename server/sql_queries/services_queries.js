export const SELECT_ALL_MEDICAL_SERVICES_QUERY = "SELECT * FROM health_services";
export const CREATE_NEW_MEDICAL_SERVICE_QUERY = "INSERT INTO health_services (service_name, price) VALUES (?, ?)";
export const DELETE_MEDICAL_SERVICE_QUERY = "DELETE FROM health_services WHERE id = ?";
export const EDIT_MEDICAL_SERVICE_QUERY = "UPDATE health_services SET service_name = ?, price = ? WHERE id = ?";
export const EDIT_MEDICAL_SERVICE_PRICE_QUERY = "UPDATE health_services SET price = ? WHERE id = ?";
export const EDIT_MEDICAL_SERVICE_NAME_QUERY = "UPDATE health_services SET service_name = ? WHERE id = ?";