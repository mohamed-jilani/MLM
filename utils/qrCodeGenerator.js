const QRCode = require('qrcode');

exports.generateQRCode = async (data) => {
  try {
    const url = await QRCode.toDataURL(data);
    return url;
  } catch (error) {
    throw new Error('Erreur lors de la génération du QR Code');
  }
};
