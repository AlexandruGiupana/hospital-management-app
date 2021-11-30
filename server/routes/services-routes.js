import express from "express";
import {
  createMedicalService,
  deleteMedicalService,
  editMedicalService,
  getMedicalServices,
  getMedicalServicesOfDoctor,
} from "../controllers/services-controller.js";
import cors from "cors";
import { auth } from "./middleware/auth.js";

const router = express.Router();

// router.get("/", auth, cors(), getAppointments);
router.get("/", cors(), getMedicalServices);
router.post("/create", cors(), createMedicalService);
router.get("/:id", cors(), getMedicalServicesOfDoctor);
router.put("/update", cors(), editMedicalService);
router.delete("/delete", cors(), deleteMedicalService);

export default router;
