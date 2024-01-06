import QR, { IQr } from "../models/qr.model";
import qr from "qr-image";

class QR_gen {
  async generate(data: IQr) {
    try {
      const { userId, url } = data;
      const qr_svg = qr.imageSync(url.toString(), { type: "png", size: 30 });
      const base64QR = qr_svg.toString("base64");

      const qrCode = new QR({ userId, url, image: base64QR });
      await qrCode.save();

      return qrCode;
    } catch (err) {
      throw new Error("Failed to generate QR code");
    }
  }

  async history(id: String) {
    try {
      const qrs = await QR.find({ userId: id });
      return qrs;
    } catch (err: any) {
      throw new Error("Failed to get codes...");
    }
  }

  async delete(id: String) {
    try {
      const deleted = await QR.findByIdAndDelete(id);
      if (!deleted) {
        throw new Error("QR code not found");
      }
      return deleted;
    } catch (err: any) {
      throw new Error("Could not delete qr code");
    }
  }
}

export default QR_gen;
