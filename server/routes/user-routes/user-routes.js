import express from "express";
import cors from "cors";
import {
  getCsrf,
  logIn,
  logout,
  registerNewUser,
} from "../../controllers/user-controller.js";
import csrfProtection from "../middleware/csrfProtection.js";

const router = express.Router();

router.post("/register", registerNewUser);
router.get("/logout", logout);
router.post("/login", logIn);
router.get("/csrfToken", csrfProtection, getCsrf);

export default router;
