import { Schema, model } from "mongoose";

interface IQr {
  url: String;
  qr: String;
}

const qrSchema = new Schema<IQr>(
  {
    url: {
      type: String,
      required: true,
    },
    qr: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const QR = model<IQr>("QR", qrSchema);

export default QR;
export { IQr };
