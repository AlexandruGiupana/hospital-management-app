import express from "express";
import { auth } from "../middleware/auth.js";
import {
  deleteAccommodation,
  getAllAccommodatedUsers,
  insertAccommodation,
} from "../../controllers/room-controller/ward-controller.js";

const router = express.Router();

router.get("/", auth, getAllAccommodatedUsers);
router.post("/add-accommodation", auth, insertAccommodation);
router.delete("/delete-accommodation", auth, deleteAccommodation);

export default router;
