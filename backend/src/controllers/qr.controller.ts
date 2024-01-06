import { Request, Response } from "express";
import QR from "../service/QR-gen.service";

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
  };
}

export async function generator(req: AuthenticatedRequest, res: Response) {
  try {
    const userId = req.user?.id; // Extract userId from the request
    const qr = await QR.generate({ ...req.body, userId });
    res.status(200).json({ message: "QR code generated...", data: qr });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function getCodes(req: AuthenticatedRequest, res: Response) {
  try {
    const codes = await QR.history(req.user?.id);
    res.status(200).json({ codes });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function deleteCode(req: AuthenticatedRequest, res: Response) {
  try {
    const deletedCode = await QR.delete(req.body);
    res
      .status(200)
      .json({ message: "QR deleted successfully...", deletedCode });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
