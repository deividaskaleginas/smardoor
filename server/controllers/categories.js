const express = require("express");
const multer = require("multer");
const path = require("path");

const {
  getCategories,
  createCategory,
  deleteCategory,
} = require("../database");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/images/kategorijos"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: fileStorage }).single("image");

const getAllServerCategories = async (req, res) => {
  const categories = await getCategories();
  res.send(categories);
};

const deleteServerCategory = async (req, res) => {
  const id = req.params.id;
  await deleteCategory(id);
  res.status(201).send("Kategorija deleted");
};

const createServerCategory = async (req, res) => {
  const info = {
    title: req.body.title,
    image: req.file.originalname,
    alt: req.body.alt,
    href: req.body.href,
    categoryKey: req.body.categoryKey,
  };
  const category = await createCategory(info);
  res.status(201).send(category);
};

module.exports = {
  getAllServerCategories,
  deleteServerCategory,
  createServerCategory,
  upload,
};
