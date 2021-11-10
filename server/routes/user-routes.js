import express from "express";
import { con } from "../db_connection.js";
import { User } from "../models/user.js";
import bcrypt from "bcryptjs";
import config from "config";
import jsonWebToken from "jsonwebtoken"

const router = express.Router();

router.post("/", (req, res) => {
  const {
    name, email, password
  } = req.body;
  if (!name || !email || !password) {
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
    const newUser = new User(name, email, password)
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) {
          throw err;
        } else {
          newUser.password = hash;
          let sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
          con.query(sql, [newUser.name, newUser.email, newUser.password], (err, result) => {
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
                    name: newUser.name,
                    email: newUser.email
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