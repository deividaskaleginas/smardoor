const express = require("express");
const router = express.Router();

const {
  getAllServerVartuAutomatika,
  deleteServerVartuAutomatika,
  createServerVartuAutomatika,
  upload,
} = require("../controllers/vartuAutomatika");

router.use(express.json());

router
  .route("/")
  .get(getAllServerVartuAutomatika)
  .post(upload, createServerVartuAutomatika);
router.route("/:id").delete(deleteServerVartuAutomatika);

module.exports = router;
