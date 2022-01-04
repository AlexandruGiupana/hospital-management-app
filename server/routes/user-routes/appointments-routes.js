import express from "express";
import {
  getAppointments,
  createAppointment,
  getAppointmentsOfDoctor,
  getAppointmentsOfPatient,
  updateAppointment,
  deleteAppointment,
  createAppointmentDoctor,
  getAppointmentsOfDoctorFromDate,
} from "../../controllers/user-controllers/appointments-controller.js";
import { auth } from "../middleware/auth.js";
const router = express.Router();

router.get("/", auth, getAppointments);
router.get("/doctor/:id", auth, getAppointmentsOfDoctor);
router.get("/doctor/:id/date/:date", auth, getAppointmentsOfDoctorFromDate);
router.get("/patient/:id", auth, getAppointmentsOfPatient);
router.post("/create", auth, createAppointment);
router.post("/create/doctor", auth, createAppointmentDoctor);
router.put("/update", auth, updateAppointment);
router.delete("/delete/:id", auth, deleteAppointment);

export default router;
