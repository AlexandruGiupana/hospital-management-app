import express from "express";
import {
  createMedicalService,
  deleteMedicalService,
  editMedicalService,
  getMedicalServices,
  getMedicalServicesOfDoctor,
} from "../../controllers/service-controller/services-controller.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getMedicalServices);
router.post("/create", auth, createMedicalService);
router.get("/:id", auth, getMedicalServicesOfDoctor);
router.put("/update", auth, editMedicalService);
router.delete("/delete/:id", auth, deleteMedicalService);

export default router;
