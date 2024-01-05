import QR, { IQr } from "../models/qr.model";
import qr from "qr-image";

class QR_gen {
  async generate(data: IQr) {
    try {
      const { userId, url, image } = data;
      const qr_svg = qr.image(url.toString(), { type: "png", size: 30 });
      const chunks: any = [];

      qr_svg.on("data", (chunk) => {
        chunks.push(chunk);
      });

      qr_svg.on("end", async () => {
        const qrImageData = Buffer.concat(chunks);
        const base64QR = qrImageData.toString("base64");

        const qrCode = new QR({ userId, url, image: base64QR });
        await qrCode.save();

        return qrCode;
      });
    } catch (err) {
      throw new Error("Failed to generate QR code");
    }
  }
}

export default QR_gen;
