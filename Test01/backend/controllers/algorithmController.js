const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");

dotenv.config();

const encryptMessage = async (req, res) => {
  try {
    const { plainText } = req.body;
    const keyHex = process.env.KEYHEX;

    //const { plainText, keyHex } = req.body;

    if (!plainText) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const key = CryptoJS.enc.Hex.parse(keyHex);

    const encryptedText = CryptoJS.TripleDES.encrypt(plainText, key, {
      mode: CryptoJS.mode.ECB,
      // TODO: Find about this
      padding: CryptoJS.pad.Pkcs7,
    }).toString();

    res.json({ encryptedText });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const decryptMessage = async (req, res) => {
  try {
    const { encryptedText } = req.body;
    const keyHex = process.env.KEYHEX;

    //const { encryptedText, keyHex } = req.body;

    if (!encryptedText) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const key = CryptoJS.enc.Hex.parse(keyHex);

    const decryptedText = CryptoJS.TripleDES.decrypt(
      {
        ciphertext: CryptoJS.enc.Base64.parse(encryptedText),
      },
      key,
      {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      }
    ).toString(CryptoJS.enc.Utf8);

    res.json({ decryptedText });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { encryptMessage, decryptMessage };
