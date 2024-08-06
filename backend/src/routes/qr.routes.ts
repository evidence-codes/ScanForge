import express, { Router } from "express";
import { deleteCode, generator, getCodes } from "../controllers/qr.controller";
import auth from "../middlewares/auth.middleware";

const router = Router();

router.post("/generate", generator);
router.get("/get-codes", auth, getCodes);
router.delete("/delete", auth, deleteCode);

export default router;
