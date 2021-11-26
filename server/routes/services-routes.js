import express from "express";
import {
  assignMedicalServiceToDoctor,
  createMedicalService, deleteMedicalService, editMedicalService,
  getMedicalServices
} from "../controllers/services-controller.js";
import cors from "cors";
import { auth } from "./middleware/auth.js"
const router = express.Router();


// router.get("/", auth, cors(), getAppointments);
router.get("/", cors(), getMedicalServices)
router.post("/create", cors(), createMedicalService);
router.put("/update", cors(), editMedicalService);
router.delete("/delete", cors(), deleteMedicalService);
router.post("/assign", cors(), assignMedicalServiceToDoctor);

export default router;