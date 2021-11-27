import express from "express";
import {
  createHospitalRoom,
  getHospitalRooms,
} from "../controllers/hospital-rooms-controller.js";
import cors from "cors";
import { auth } from "./middleware/auth.js";
const router = express.Router();

// router.get("/", auth, cors(), getAppointments);
router.get("/", cors(), getHospitalRooms);
router.post("/create", cors(), createHospitalRoom);

export default router;
