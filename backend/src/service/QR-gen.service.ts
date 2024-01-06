import QR from "../classes/QR-gen";

class QRService {
  private readonly qr: QR;

  constructor() {
    this.qr = new QR();
  }

  generate(data: any) {
    return this.qr.generate(data);
  }

  history(data: any) {
    return this.qr.history(data);
  }

  delete(data: any) {
    return this.qr.delete(data);
  }
}

export default new QRService();
