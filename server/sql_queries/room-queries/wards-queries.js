export const ADD_TO_WARD = `INSERT INTO ward_repartition (user_id, ward_id) VALUES (?, ?)`;
export const SELECT_WARD = "SELECT * FROM ward where id = ?";
export const GET_ALL_ACCOMMODATED_USERS =
  "SELECT ward_repartition.id as id, users.id as user_id, users.first_name, users.last_name, ward_id" +
  " FROM ward_repartition" +
  " INNER JOIN users" +
  " ON users.id = user_id";
export const GET_ACCOMMODATED_USER_ID_BY_EMAIL =
  "SELECT user_id" +
  " FROM ward_repartition" +
  " INNER JOIN users" +
  " ON users.id = user_id" +
  " WHERE users.email = ?";
export const DELETE_ACCOMMODATED_USER =
  "DELETE FROM ward_repartition WHERE user_id = ?";
