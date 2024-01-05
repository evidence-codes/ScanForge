import { Schema, model } from "mongoose";

interface IQr {
  userId: String;
  url: String;
  image: String;
}

const qrSchema = new Schema<IQr>(
  {
    userId: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const QR = model<IQr>("QR", qrSchema);

export default QR;
export { IQr };
