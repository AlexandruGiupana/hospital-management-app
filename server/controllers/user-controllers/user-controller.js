import { con } from "../../db_connection.js";
import bcrypt from "bcryptjs";
import jsonWebToken from "jsonwebtoken";
import config from "config";
import { validateNumberField } from "../../validation/general-validation.js";
import {
  INSERT_USER,
  SELECT_USER_ID_QUERY,
  SELECT_USER_INFORMATION_QUERY,
  SELECT_USER_WITH_CNP,
  SELECT_USER_WITH_EMAIL,
  UPDATE_USER_INFORMATION_QUERY,
} from "../../sql_queries/user-queries/user-queries.js";
import {
  validateCNP,
  validateEmail,
  validateName,
  validatePhoneNumber,
} from "../../validation/user-validation.js";
import {
  CNP_ALREADY_ASSIGNED,
  EMAIL_ALREADY_ASSIGNED,
  INVALID_CITY_NAME,
  INVALID_CNP_NAME,
  INVALID_COUNTY_NAME,
  INVALID_CREDENTIALS,
  INVALID_EMAIL_NAME,
  INVALID_FIRST_NAME,
  INVALID_ID_VALUE,
  INVALID_INFORMATION_NAME,
  INVALID_LAST_NAME,
  INVALID_PHONE_NUMBER_NAME,
  INVALID_POSTAL_CODE_NAME,
  LOG_OUT_MESSAGE,
  NOT_ALL_FIELDS_WERE_FILLED,
  SERVER_ERROR,
  USER_DOES_NOT_EXIST,
} from "../../error-messages/error-messages.js";

export const logIn = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: NOT_ALL_FIELDS_WERE_FILLED });
  }
  con.query(SELECT_USER_WITH_EMAIL, [email], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length === 0) {
      return res.status(400).json({ msg: USER_DOES_NOT_EXIST });
    }
    const user = result[0];
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) {
        return res.status(400).json({ msg: INVALID_CREDENTIALS });
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
    return res.status(400).json({ msg: NOT_ALL_FIELDS_WERE_FILLED });
  }
  if (!validateName(firstName)) {
    console.log("fn");
    return res.status(400).json({ msg: INVALID_FIRST_NAME });
  }
  if (!validateName(lastName)) {
    console.log("ln");
    return res.status(400).json({ msg: INVALID_LAST_NAME });
  }
  if (!validateCNP(cnp)) {
    console.log("cn");
    return res.status(400).json({ msg: INVALID_CNP_NAME });
  }
  if (!validateEmail(email)) {
    console.log("em");
    return res.status(400).json({ msg: INVALID_EMAIL_NAME });
  }

  con.query(SELECT_USER_WITH_EMAIL, [email], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length !== 0) {
      return res.status(400).json({ msg: EMAIL_ALREADY_ASSIGNED });
    }
    con.query(SELECT_USER_WITH_CNP, [cnp], (err, result) => {
      if (err) {
        throw err;
      }
      if (result.length !== 0) {
        return res.status(400).json({ msg: CNP_ALREADY_ASSIGNED });
      }
    });
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          throw err;
        } else {
          con.query(
            INSERT_USER,
            [email, hash, accountType, firstName, lastName, cnp],
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
    res.status(200).json({ success: true, message: LOG_OUT_MESSAGE });
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
    return res.status(400).json({ msg: INVALID_ID_VALUE });
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
    return res.status(400).json({ msg: INVALID_ID_VALUE });
  }
  if (!validateName(first_name)) {
    return res.status(400).json({ msg: INVALID_FIRST_NAME });
  }
  if (!validateName(last_name)) {
    return res.status(400).json({ msg: INVALID_LAST_NAME });
  }
  if (!validateName(county)) {
    return res.status(400).json({ msg: INVALID_COUNTY_NAME });
  }
  if (!validateName(city)) {
    return res.status(400).json({ msg: INVALID_CITY_NAME });
  }
  if (!validateName(additional_information)) {
    return res.status(400).json({ msg: INVALID_INFORMATION_NAME });
  }
  if (!validatePhoneNumber(phone_number)) {
    return res.status(400).json({ msg: INVALID_PHONE_NUMBER_NAME });
  }
  if (!validatePhoneNumber(postal_code)) {
    return res.status(400).json({ msg: INVALID_POSTAL_CODE_NAME });
  }

  con.query(SELECT_USER_ID_QUERY, [id], (err, result) => {
    if (result.length !== 1) {
      return res.status(404).json({ msg: USER_DOES_NOT_EXIST });
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
            return res.status(500).json({ msg: SERVER_ERROR });
          }
          return res.json("user information was updated");
        }
      );
    }
  });
};
