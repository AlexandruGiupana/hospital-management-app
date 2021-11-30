import express from "express";
import cors from "cors";
import { auth } from "./middleware/auth.js";
import {
  assignMedicalServiceToDoctor,
  deleteRepartition,
  getAllRepartitions,
  getIdOfRepartition,
} from "../controllers/repartititon-controller.js";
const router = express.Router();

router.get("/", cors(), getAllRepartitions);
router.get("/id/:doctor_id/:health_service_id", cors(), getIdOfRepartition);
router.post("/assign", cors(), assignMedicalServiceToDoctor);
router.delete("/delete", cors(), deleteRepartition);

export default router;
