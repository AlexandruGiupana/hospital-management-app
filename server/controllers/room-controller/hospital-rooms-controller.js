import { con } from "../../db_connection.js";
import { HospitalRoom } from "../../models/hospital_room.js";
import {
  CREATE_NEW_ROOM_QUERY,
  DELETE_ROOM_QUERY,
  EDIT_ROOM_NUMBER_QUERY,
  EDIT_ROOM_QUERY,
  EDIT_ROOM_TYPE_QUERY,
  GET_ROOM_BY_ROOMNUMBER_OR_TYPE,
  GET_ROOMS_WITH_APPOINTMENTS,
  SELECT_ALL_ROOMS_QUERY,
} from "../../sql_queries/room-queries.js";
import { validateNumberField } from "../../validation/general-validation.js";
import { validateRoomType } from "../../validation/rooms-validation.js";

export const getHospitalRooms = async (req, res) => {
  con.query(SELECT_ALL_ROOMS_QUERY, (err, result) => {
    if (err) {
      throw err;
    }
    let resultArray = Object.values(JSON.parse(JSON.stringify(result)));
    res.json(resultArray);
  });
};

export const createHospitalRoom = async (req, res) => {
  const { type, room_number } = req.body;
  const newHospitalRoom = new HospitalRoom(type, room_number);
  let sql = CREATE_NEW_ROOM_QUERY;
  if (!validateNumberField(room_number)) {
    return res.status(400).json({ msg: "Invalid value for room type" });
  }

  if (!validateRoomType(type)) {
    return res.status(400).json({ msg: "Invalid value for room type" });
  }

  con.query(sql, [type, room_number], (err, result) => {
    if (err) {
      throw err;
    }

    res.json({
      hospital_room: {
        type: newHospitalRoom.type,
        room_number: newHospitalRoom.roomNumber,
      },
    });
  });
};

export const deleteRoom = async (req, res) => {
  const id = req.params.id;
  if (!validateNumberField(id)) {
    return res.status(400).json({ msg: "Invalid value for id" });
  }
  con.query(GET_ROOMS_WITH_APPOINTMENTS, [id], (err, result) => {
    if (result.length > 0) {
      return res
        .status(406)
        .json({ msg: "Selected rooms still have scheduled appointments" });
    } else {
      con.query(DELETE_ROOM_QUERY, [id], (err, result) => {
        if (err) {
          throw err;
        }
        res.json({
          service: {
            status: "deleted",
          },
        });
      });
    }
  });
};

export const editRoom = async (req, res) => {
  const id = Object.keys(req.body)[0];
  const room_number = req.body[id]["room_number"];
  const type = req.body[id]["type"];
  if (!validateNumberField(id)) {
    return res.status(400).json({ msg: "Invalid value for id" });
  }
  con.query(GET_ROOMS_WITH_APPOINTMENTS, [room_number], (err, result) => {
    if (result.length > 0) {
      return res.status(404).json({
        msg: "Error! There are still scheduled appointments in this room",
      });
    } else {
      con.query(
        GET_ROOM_BY_ROOMNUMBER_OR_TYPE,
        [room_number, type],
        (err, result) => {
          if (result.length > 0) {
            return res
              .status(404)
              .json({ msg: "Error! Already exists a room with given number" });
          } else {
            if (!type && room_number) {
              con.query(
                EDIT_ROOM_NUMBER_QUERY,
                [room_number, id],
                (err, result) => {
                  if (err) {
                    throw err;
                  }
                  return res.json({
                    room: {
                      room_number: room_number,
                    },
                  });
                }
              );
            } else if (!room_number && type) {
              con.query(EDIT_ROOM_TYPE_QUERY, [type, id], (err, result) => {
                if (err) {
                  throw err;
                }
                return res.json({
                  room: {
                    type: type,
                  },
                });
              });
            } else {
              con.query(
                EDIT_ROOM_QUERY,
                [type, room_number, id],
                (err, result) => {
                  if (err) {
                    throw err;
                  }
                  return res.json({
                    room: {
                      room_number: room_number,
                      type: type,
                    },
                  });
                }
              );
            }
          }
        }
      );
    }
  });
};