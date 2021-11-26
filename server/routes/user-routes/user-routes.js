import express from "express";
import { con } from "../../db_connection.js";
import { User } from "../../models/user.js";
import bcrypt from "bcryptjs";
import config from "config";
import jsonWebToken from "jsonwebtoken"
import cors from "cors";

const router = express.Router();

router.post("/register", cors(), (req, res) => {
  const {
    email, password, account_type, first_name, last_name, address, city, county, postal_code, phone_number, cnp
  } = req.body;
  if (!email || !password || !first_name || !last_name || !address || !city || !county || !postal_code || !phone_number || !cnp) {
    return res.status(400).json({msg: "Please enter all fields"});
  }
  let sql = "SELECT * FROM users WHERE email = ? ";
  con.query(sql, [email], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length !== 0) {
      return res.status(400).json({msg: "Email already assigned to a user"})
    }
    let sql_2 = "SELECT * FROM users WHERE phone_number = ? ";
    con.query(sql_2, [phone_number], (err, result) => {
      if (err) {
        throw err;
      }
      if (result.length !== 0) {
        return res.status(400).json({ msg: "Phone number already assigned to a user" })
      }
    });
    let sql_3 = "SELECT * FROM users WHERE cnp = ? ";
    con.query(sql_3, [cnp], (err, result) => {
      if (err) {
        throw err;
      }
      if (result.length !== 0) {
        return res.status(400).json({ msg: "CNP already assigned to a user" })
      }
    })
    const newUser = new User(email, password, account_type, first_name, last_name, address, city, county, postal_code, phone_number, cnp);
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) {
          throw err;
        } else {
          newUser.password = hash;
          let sql = "INSERT INTO users (email, password, account_type, first_name, last_name, address, city, county, postal_code, phone_number, cnp) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
          con.query(sql, [newUser.email, newUser.password, newUser.account_type, newUser.first_name, newUser.last_name,
            newUser.address, newUser.city, newUser.county, newUser.postal_code, newUser.phone_number, newUser.cnp], (err, result) => {
            if (err) {
              throw err;
            }
            jsonWebToken.sign(
              {id: newUser.id},
              config.get("jwtSecret"),
              {expiresIn: 3600},
              (err, token) => {
                if (err) {
                  throw err;
                }
                res.json({
                  user: {
                    id: newUser.id,
                    email: newUser.email,
                    account_type: newUser.account_type,
                    first_name: newUser.first_name,
                    last_name: newUser.last_name,
                    address: newUser.address,
                    city: newUser.city,
                    county: newUser.county,
                    postal_code: newUser.postal_code,
                    phone_number: newUser.phone_number,
                    cnp: newUser.cnp
                  },
                  token
                })
              }
            )
          })
        }
      })
    })
  })
})



export default router;