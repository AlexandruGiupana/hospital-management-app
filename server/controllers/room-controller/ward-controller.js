import { con } from "../../db_connection.js";
import {
  ADD_TO_WARD,
  DELETE_ACCOMMODATED_USER,
  GET_ACCOMMODATED_USER_ID_BY_EMAIL,
  GET_ALL_ACCOMMODATED_USERS,
  SELECT_WARD,
} from "../../sql_queries/room-queries/wards-queries.js";
import { SELECT_ID_USER_WITH_EMAIL } from "../../sql_queries/user-queries/user-queries.js";
import {
  ROOM_DOES_NOT_EXIST,
  SERVER_ERROR,
  USER_ALREADY_ACCOMMODATED,
  USER_DOES_NOT_EXIST,
} from "../../error-messages/error-messages.js";

export const getAllAccommodatedUsers = async (req, res) => {
  con.query(GET_ALL_ACCOMMODATED_USERS, (err, result) => {
    if (err) {
      return res.status(500, SERVER_ERROR);
    }
    let resultArray = Object.values(JSON.parse(JSON.stringify(result)));
    res.json(resultArray);
  });
};

export const insertAccommodation = async (req, res) => {
  const { user_email, ward_id } = req.body;
  con.query(SELECT_ID_USER_WITH_EMAIL, [user_email], (err, result) => {
    if (err) {
      return res.status(500, SERVER_ERROR);
    } else {
      if (result.length === 0) {
        return res.status(400, USER_DOES_NOT_EXIST);
      } else {
        const id = JSON.parse(JSON.stringify(result))[0].id;
        con.query(
          GET_ACCOMMODATED_USER_ID_BY_EMAIL,
          [user_email],
          (err, result) => {
            if (err) {
              return res.status(500, SERVER_ERROR);
            } else {
              if (result.length > 0) {
                return res.status(409, USER_ALREADY_ACCOMMODATED);
              } else {
                con.query(SELECT_WARD, [ward_id], (err, result) => {
                  if (err) {
                    return res.status(500, SERVER_ERROR);
                  }
                  if (result.length === 0) {
                    return res.status(400, ROOM_DOES_NOT_EXIST);
                  } else {
                    con.query(ADD_TO_WARD, [id, ward_id], (err) => {
                      if (err) {
                        return res.status(500, SERVER_ERROR);
                      } else {
                        return res.json({
                          user_id: id,
                          ward_id: ward_id,
                        });
                      }
                    });
                  }
                });
              }
            }
          }
        );
      }
    }
  });
};

export const deleteAccommodation = (req, res) => {
  const { user_email } = req.body;
  console.log(req.body);
  con.query(GET_ACCOMMODATED_USER_ID_BY_EMAIL, [user_email], (err, result) => {
    if (err) {
      return res.status(500, SERVER_ERROR);
    } else {
      if (result.length === 0) {
        return res.status(400, USER_DOES_NOT_EXIST);
      } else {
        const id = result[0].user_id;
        con.query(DELETE_ACCOMMODATED_USER, [id], (err, result) => {
          if (err) {
            return res.status(500, SERVER_ERROR);
          } else {
            return res.json("deleted");
          }
        });
      }
    }
  });
};
