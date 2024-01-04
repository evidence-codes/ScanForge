import { Request, Response } from "express";
import User from "../service/Users.service";

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
  };
}

export async function getUserInfo(req: AuthenticatedRequest, res: Response) {
  try {
    const user = await User.get(req.user?.id);
  } catch (err: any) {
    res.status(500).json({ error: err?.message });
  }
}

export async function forgotPassword(req: Request, res: Response) {
  try {
    const response = await User.forgot(req.body);
    res.status(200).json({ message: response });
  } catch (err: any) {
    res.status(500).json({ error: err?.message });
  }
}

export async function deleteUser(req: AuthenticatedRequest, res: Response) {
  try {
    const response = await User.delete(req.user?.id);
    res.status(200).json({ message: response });
  } catch (err: any) {
    res.status(500).json({ error: err?.message });
  }
}
