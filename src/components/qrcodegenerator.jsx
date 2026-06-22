import { QRCodeCanvas } from "qrcode.react";

function QRCodeGenerator() {
  const upiId = "alecebenezer@okaxis";

  const upiLink =
    `upi://pay?pa=${upiId}&pn=Restaurant&cu=INR`;

  return (
    <div>
      <h2>Scan & Pay</h2>

      <QRCodeCanvas
        value={upiLink}
        size={200}
      />
    </div>
  );
}

export default QRCodeGenerator;