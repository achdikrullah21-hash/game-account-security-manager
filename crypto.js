const CryptoJS = require("crypto-js");

const KEY = "security_game_key_123";

function encrypt(text) {
    return CryptoJS.AES.encrypt(text, KEY).toString();
}

function decrypt(cipher) {
    const bytes = CryptoJS.AES.decrypt(cipher, KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
}

module.exports = { encrypt, decrypt };
