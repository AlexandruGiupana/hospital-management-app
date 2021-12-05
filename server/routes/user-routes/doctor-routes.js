import express from "express";
import {
  getAllDoctors,
  createDoctor,
} from "../../controllers/user-controllers/doctor-controller.js";
import cors from "cors";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getAllDoctors);
router.post("/create", auth, createDoctor);

export default router;
