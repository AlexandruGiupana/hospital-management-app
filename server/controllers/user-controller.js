import { con } from "../db_connection.js";
import bcrypt from "bcryptjs";
import jsonWebToken from "jsonwebtoken";
import config from "config";
import { User } from "../models/user.js";
import { validateNumberField } from "../validation/general-validation.js";
import {
  SELECT_USER_ID_QUERY,
  SELECT_USER_INFORMATION_QUERY,
  UPDATE_USER_INFORMATION_QUERY,
} from "../sql_queries/user-queries.js";

export const logIn = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  let sql = "SELECT * FROM users WHERE email = ? ";
  con.query(sql, [email], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length === 0) {
      return res.status(400).json({ msg: "User does not exist" });
    }
    const user = result[0];
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) {
        return res.status(400).json({ msg: "Credentials are invalid" });
      }
      jsonWebToken.sign(
        { id: user.id },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) {
            throw err;
          }
          res.cookie("token", token, { httpOnly: true });
          return res.json({
            user: {
              id: user.id,
              account_type: user.account_type,
              name: user.name,
              email: user.email,
            },
          });
        }
      );
    });
  });
};

export const registerNewUser = (req, res) => {
  const { email, password, accountType, firstName, lastName, cnp } = req.body;
  if (!accountType || !email || !password || !firstName || !lastName || !cnp) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  let sql = "SELECT * FROM users WHERE email = ? ";
  con.query(sql, [email], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length !== 0) {
      return res.status(400).json({ msg: "Email already assigned to a user" });
    }
    let sql_3 = "SELECT * FROM users WHERE cnp = ? ";
    con.query(sql_3, [cnp], (err, result) => {
      if (err) {
        throw err;
      }
      if (result.length !== 0) {
        return res.status(400).json({ msg: "CNP already assigned to a user" });
      }
    });
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          throw err;
        } else {
          const hashedPassword = hash;
          let sql =
            "INSERT INTO users (email, password, account_type, first_name, last_name, cnp) VALUES (?, ?, ?, ?, ?, ?)";
          con.query(
            sql,
            [email, hashedPassword, accountType, firstName, lastName, cnp],
            (err, result) => {
              if (err) {
                throw err;
              }
              return res.json("User created");
            }
          );
        }
      });
    });
  });
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token", { httpOnly: true });
    res
      .status(200)
      .json({ success: true, message: "User logged out successfully" });
  } catch (err) {
    console.log(err.message);
  }
};

export const getCsrf = async (req, res) => {
  res.status(200).json({ csrfToken: req.csrfToken() });
};

export const getUserInformation = (req, res) => {
  const id = req.params.id;
  if (!validateNumberField(id)) {
    return res.status(400).json({ msg: "Invalid value for user id" });
  }
  con.query(SELECT_USER_INFORMATION_QUERY, [id], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ msg: "There was something wrong with your request" });
    }
    return res
      .status(200)
      .json(Object.values(JSON.parse(JSON.stringify(result))));
  });
};

export const editUserInformation = (req, res) => {
  const id = req.params.id;
  const {
    first_name,
    last_name,
    address,
    city,
    county,
    postal_code,
    phone_number,
    additional_information,
  } = req.body;

  if (!validateNumberField(id)) {
    return res.status(400).json({ msg: "Invalid value for user id" });
  }
  //todo validate

  con.query(SELECT_USER_ID_QUERY, [id], (err, result) => {
    if (result.length !== 1) {
      return res.status(404).json({ msg: "User not found" });
    } else {
      con.query(
        UPDATE_USER_INFORMATION_QUERY,
        [
          first_name,
          last_name,
          address,
          city,
          county,
          postal_code,
          phone_number,
          additional_information,
          id,
        ],
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ msg: "There was something wrong with your request" });
          }
          return res.json("user information was updated");
        }
      );
    }
  });
};
