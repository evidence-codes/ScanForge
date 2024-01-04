import express, { Router } from "express";
import {
  getUserInfo,
  forgotPassword,
  deleteUser,
} from "../controllers/user.controller";

const router = Router();

router.get("/get-info", getUserInfo);
router.patch("/change-password", forgotPassword);
router.delete("/delete", deleteUser);

export default router;
