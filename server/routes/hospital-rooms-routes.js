import express from "express";

import cors from "cors";
import {createRoom, getRooms, updateRoom, deleteRoom} from "../../client/src/services/rooms-services";
const router = express.Router();


router.get("/rooms", cors(), getRooms);
router.post("/create", cors(), createRoom);
router.put("/update", cors(), updateRoom);
router.delete("/delete", cors(), deleteRoom);

export default router;
