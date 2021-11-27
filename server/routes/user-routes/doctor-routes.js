import express from "express";
import {
  getAllDoctors,
  createDoctor,
} from "../../controllers/user-controllers/doctor-controller.js";
import cors from "cors";
import { auth } from "../middleware/auth.js";

const router = express.Router();

// router.get("/", auth, cors(), getAppointments);
router.get("/", cors(), getAllDoctors);
router.post("/create", cors(), createDoctor);

export default router;
