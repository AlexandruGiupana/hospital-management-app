import express from "express";
import { googleLogin } from "../controllers/auth.js";
import cors from "cors";

const router = express.Router();

router.post('/googlelogin', cors(), googleLogin)

export default router;