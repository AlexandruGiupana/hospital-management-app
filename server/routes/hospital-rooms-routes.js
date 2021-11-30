import express from "express";

import cors from "cors";
import {
  createHospitalRoom,
  editRoom,
  getHospitalRooms,
  deleteRoom,
} from "../controllers/room-controller/hospital-rooms-controller.js";
const router = express.Router();

router.get("/", cors(), getHospitalRooms);
router.post("/create", cors(), createHospitalRoom);
router.put("/update", cors(), editRoom);
router.delete("/delete", cors(), deleteRoom);

export default router;
