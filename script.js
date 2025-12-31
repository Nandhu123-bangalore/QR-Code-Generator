const qrBox = document.getElementById("qrBox");

function generateQR() {
  const text = document.getElementById("qrText").value.trim();

  if (text === "") {
    alert("Please enter text or URL");
    return;
  }

  // Clear previous QR
  qrBox.innerHTML = "";

  // Generate QR Code
  new QRCode(qrBox, {
    text: text,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}