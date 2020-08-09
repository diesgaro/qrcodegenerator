const qrcode = require('qrcode');

exports.qr_generator = async (url) => {
    try {
        return (await qrcode.toDataURL(url));
    } catch (err) {
        console.error(err)
    }
};