import express, { Router } from "express";
import { generator } from "../controllers/qr.controller";

const router = Router();

router.post("/generate", generator);

export default router;
