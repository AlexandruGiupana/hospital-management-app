import express from "express";
import { getAppointments, createAppointment, getAppointmentsOfDoctor } from "../controllers/appointments-controller.js";
import cors from "cors";
import { auth } from "./middleware/auth.js"
const router = express.Router();


// router.get("/", auth, cors(), getAppointments);
router.get("/", cors(), getAppointments);
router.get("/doctor/:id", cors(), getAppointmentsOfDoctor)
router.post("/create", cors(), createAppointment);

export default router;
