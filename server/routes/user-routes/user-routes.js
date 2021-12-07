import express from "express";
import {
  editUserInformation,
  getCsrf,
  getUserInformation,
  logIn,
  logout,
  registerNewUser,
} from "../../controllers/user-controller.js";
import csrfProtection from "../middleware/csrfProtection.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", registerNewUser);
router.get("/logout", logout);
router.post("/login", logIn);
router.get("/csrfToken", csrfProtection, getCsrf);

router.get("/:id", auth, getUserInformation);
router.put("/update/:id", auth, editUserInformation);

export default router;
