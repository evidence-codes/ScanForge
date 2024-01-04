import { Request, Response } from "express";
import Auth from "../service/Auth.service";

export async function register(req: Request, res: Response) {
  try {
    const newUser = await Auth.register(req.body);
    res
      .status(200)
      .json({ message: "User registered successfully", user: newUser });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { user, token } = await Auth.login(req.body);
    res
      .status(200)
      .json({ message: "User logged in successfully", user, token });
  } catch (err: any) {
    res.status(500).json({ err: err.message });
  }
}
