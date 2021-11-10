import { OAuth2Client } from "google-auth-library";
import mysql from "mysql";
import {con} from "../db_connection.js";

const client = new OAuth2Client("1064248624144-vio6h7qp5hs174g7dlo63469h61g7sl9.apps.googleusercontent.com")

export const googleLogin = (req, res) => {
  const {tokenId} = req.body;
  client.verifyIdToken({
    idToken: tokenId,
    audience: "1064248624144-vio6h7qp5hs174g7dlo63469h61g7sl9.apps.googleusercontent.com"})
      .then(res => {
        const {email_verified, given_name, family_name, email} = res.payload
        if (email_verified) {
          let query = `INSERT INTO users (first_name, last_name, email) VALUES (?, ?, ?)`;
          con.query(query, [given_name, family_name, email], (err) => {
            if (err) throw err;
            console.log("1 record inserted");
          });
        }
      })

}