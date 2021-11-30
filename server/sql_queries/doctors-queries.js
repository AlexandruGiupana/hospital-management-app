export const SELECT_ALL_DOCTORS_QUERY =
  "SELECT users.id, users.first_name, users.last_name FROM doctors inner join users on doctors.user_id = users.id";
export const SELECT_DOCTOR_BY_ID_QUERY =
  "SELECT users.id, users.first_name, users.last_name FROM doctors inner join users on doctors.user_id = users.id WHERE doctors.user_id = ?";
