import { Request, Response } from "express";
import QR from "../service/QR-gen.service";

export async function generator(req: Request, res: Response) {
  try {
    const qr = await QR.generate(req.body);
    res.status(200).json({ message: "QR code generated...", data: qr });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
