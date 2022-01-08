export const SELECT_USER_WITH_EMAIL = "SELECT * FROM users WHERE email = ? ";
export const SELECT_ID_USER_WITH_EMAIL =
  "SELECT id FROM users WHERE email = ? ";
export const SELECT_USER_WITH_CNP = "SELECT * FROM users WHERE cnp = ? ";
export const INSERT_USER =
  "INSERT INTO users (email, password, account_type, first_name, last_name, cnp) VALUES (?, ?, ?, ?, ?, ?)";

export const SELECT_USER_ID_QUERY = "SELECT id FROM users where id = ?";
export const SELECT_USER_INFORMATION_QUERY =
  "SELECT id, email, account_type, first_name, last_name, address, city, county, postal_code, phone_number, cnp, additional_information FROM users WHERE id = ?";
export const UPDATE_USER_INFORMATION_QUERY =
  "UPDATE users SET first_name = ?, last_name = ?, address = ?, city = ?, county = ?, postal_code = ?, phone_number = ?, additional_information = ? WHERE id = ?";
