const router = require("express").Router();
const {encryptMessage, decryptMessage} = require('../controllers/algorithmController')

router.post("/encrypt", encryptMessage);
router.post("/decrypt", decryptMessage);

module.exports = router;