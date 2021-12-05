import express from "express";

import {
  createHospitalRoom,
  editRoom,
  getHospitalRooms,
  deleteRoom,
} from "../controllers/room-controller/hospital-rooms-controller.js";
import { auth } from "./middleware/auth.js";
const router = express.Router();

router.get("/", auth, getHospitalRooms);
router.post("/create", auth, createHospitalRoom);
router.put("/update", auth, editRoom);
router.delete("/delete/:id", auth, deleteRoom);

export default router;
