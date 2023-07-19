const express = require("express");
const router = express.Router();

const { downloadFileFromServer } = require("../controllers/download");

router.use(express.json());

router.route("/").get(downloadFileFromServer);

module.exports = router;
