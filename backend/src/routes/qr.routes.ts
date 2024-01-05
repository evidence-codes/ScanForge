import express, { Router } from "express";
import { generator } from "../controllers/qr.controller";
import auth from "../middlewares/auth.middleware";

const router = Router();

router.post("/generate", auth, generator);

export default router;
