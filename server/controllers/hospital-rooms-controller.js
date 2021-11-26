import { con } from "../db_connection.js";
import { HospitalRoom } from "../models/hospital_room.js";

export const getHospitalRooms = async (req, res) => {
  con.query("SELECT * FROM hospital_rooms", (err, result) => {
    if (err) {
      throw err;
    }
    let resultArray = Object.values(JSON.parse(JSON.stringify(result)));
    res.json(resultArray);
  });
};

export const createHospitalRoom = async (req, res) => {
    const {
      type, room_number
    } = req.body;
    const newHospitalRoom = new HospitalRoom(type, room_number);
    let sql = "INSERT INTO hospital_rooms (type, room_number) VALUES (?, ?)";
    con.query(sql, [type, room_number], (err, result) => {
    if (err) {
      throw err;
    }
    res.json({
      hospital_room: {
        type: newHospitalRoom.type,
        room_number: newHospitalRoom.roomNumber
      }
    });
  });
}