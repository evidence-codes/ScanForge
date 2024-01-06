import express, { Router } from "express";
import {
  getUserInfo,
  forgotPassword,
  deleteUser,
} from "../controllers/user.controller";
import auth from "../middlewares/auth.middleware";

const router = Router();

router.get("/get-info", auth, getUserInfo);
router.patch("/forgot-password", forgotPassword);
router.patch("/change-password", auth, forgotPassword);
router.delete("/delete", auth, deleteUser);

export default router;
