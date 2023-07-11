const express = require("express");
const router = express.Router();

const {
  getAllServerCategories,
  deleteServerCategory,
  createServerCategory,
  upload,
} = require("../controllers/categories");

router.use(express.json());

router
  .route("/")
  .get(getAllServerCategories)
  .post(upload, createServerCategory);
router.route("/:id").delete(deleteServerCategory);

module.exports = router;
