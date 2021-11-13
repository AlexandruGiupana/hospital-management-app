import express from "express";
import { con } from "../db_connection.js";
import { User } from "../models/user.js";
import bcrypt from "bcryptjs";
import config from "config";
import jsonWebToken from "jsonwebtoken"
import { auth } from "./middleware/auth.js";
import cors from "cors";

const router = express.Router();


router.post("/", cors(), (req, res) => {
  const {
    email, password
  } = req.body;
  if (!email || !password) {
    return res.status(400).json({msg: "Please enter all fields"});
  }
  let sql = "SELECT * FROM users WHERE email = ? ";
  con.query(sql, [email], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length === 0) {
      return res.status(400).json({msg: "User does not exist"})
    }
    const user = result[0]
    bcrypt.compare(password, user.password)
      .then(isMatch => {
        if (!isMatch) {
          return res.status(400).json({msg: "Credentials are invalid"});
        }
        jsonWebToken.sign(
          {id: user.id},
          config.get("jwtSecret"),
          {expiresIn: 3600},
          (err, token) => {
            if (err) {
              throw err;
            }
            res.json({
              user: {
                id: user.id,
                name: user.name,
                email: user.email
              },
              token
            })
          }
        )
      })
  })
})

router.get("/user", cors(), auth, (req, res) => {
  let sql = "SELECT name, email FROM users WHERE id = ? ";
  con.query(sql, [req.user.id], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length !== 0) {
      res.json(result[0])
    }
  })
})

export default router;