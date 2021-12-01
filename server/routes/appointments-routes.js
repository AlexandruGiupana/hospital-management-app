import express from "express";
import {
  getAppointments,
  createAppointment,
  getAppointmentsOfDoctor,
  getAppointmentsOfPatient,
  updateAppointment,
  deleteAppointment, createAppointmentDoctor
} from "../controllers/appointments-controller.js";
import cors from "cors";
import { auth } from "./middleware/auth.js";
const router = express.Router();

// router.get("/", auth, cors(), getAppointments);
router.get("/", cors(), getAppointments);
router.get("/doctor/:id", cors(), getAppointmentsOfDoctor);
router.get("/patient/:id", cors(), getAppointmentsOfPatient);
router.post("/create", cors(), createAppointment);
router.post("/create/doctor", cors(), createAppointmentDoctor);
router.put("/update", cors(), updateAppointment);
router.delete("/delete/:id", cors(), deleteAppointment);

export default router;
