import express from "express";
import { getMessage } from "../controllers/example-controller.js";
import cors from "cors";
import { auth } from "./middleware/auth.js"
const router = express.Router();


router.get("/", auth, cors(), getMessage);

export default router;
