const express = require("express");
const router = express.Router();

const {
  getAllMonitoriaiFromServer,
  createMonitoriaiToServer,
  uploadAllFormFiles,
} = require("../controllers/monitoriai");

router.use(express.json());

router
  .route("/")
  .get(getAllMonitoriaiFromServer)
  .post(uploadAllFormFiles, createMonitoriaiToServer);

module.exports = router;
