const express = require("express");
const router = express.Router();

const {
  getAllServerTelefonspynes,
  deleteServerTelefonspyne,
  createServerTelefonspyne,
  upload,
} = require("../controllers/telefonspynes");

router.use(express.json());

router
  .route("/")
  .get(getAllServerTelefonspynes)
  .post(upload, createServerTelefonspyne);
router.route("/:id").delete(deleteServerTelefonspyne);

module.exports = router;
