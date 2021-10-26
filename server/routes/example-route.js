import express from "express";
import { getMessage } from "../controllers/example-controller.js";
import cors from "cors";
const router = express.Router();

router.get("/", cors(), getMessage);

export default router;
