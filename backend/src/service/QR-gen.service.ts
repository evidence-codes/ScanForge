import QR from "../classes/QR-gen";

class QRService {
  private readonly qr: QR;

  constructor() {
    this.qr = new QR();
  }

  generate(data: any) {
    return this.qr.generate(data);
  }
}

export default new QRService();
