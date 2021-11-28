export const SELECT_ALL_ROOMS_QUERY ="SELECT * FROM hospital_rooms";
export const CREATE_NEW_ROOM_QUERY =
    "INSERT INTO hospital_rooms (type, room_number) VALUES (?, ?)";
export const DELETE_ROOM_QUERY =
    "DELETE FROM hospital_rooms WHERE id = ?";
export const EDIT_ROOM_QUERY =
    "UPDATE hospital_rooms SET type = ?, room_number = ? WHERE id = ?";
export const EDIT_ROOM_NUMBER_QUERY =
    "UPDATE hospital_rooms SET room_number = ? WHERE id = ?";
export const EDIT_ROOM_TYPE_QUERY =
    "UPDATE hospital_rooms SET type = ? WHERE id = ?";
export const GET_ROOMS_WITH_APPOINTMENTS =
    "SELECT hospital_room_id FROM appointments WHERE hospital_room_id = ?";
export const GET_ROOM_BY_ROOMNUMBER_OR_TYPE =
    "SELECT room_number FROM hospital_rooms WHERE room_number = ? OR type = ?";

