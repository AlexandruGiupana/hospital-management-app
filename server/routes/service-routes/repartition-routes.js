import express from "express";
import cors from "cors";
import { auth } from "../middleware/auth.js";
import {
  assignMedicalServiceToDoctor,
  deleteRepartition,
  getAllRepartitions,
  getIdOfRepartition,
  getRepartitionsOfDoctor,
} from "../../controllers/service-controller/repartititon-controller.js";
const router = express.Router();

router.get("/", auth, getAllRepartitions);
router.get("/id/:doctor_id/:health_service_id", auth, getIdOfRepartition);
router.get("/:doctor_id", auth, getRepartitionsOfDoctor);
router.post("/assign", auth, assignMedicalServiceToDoctor);
router.delete("/delete/:id", auth, deleteRepartition);

export default router;
