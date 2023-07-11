const express = require("express");
const multer = require("multer");
const path = require("path");

const {
  getTelefonspynes,
  deleteTelefonspyne,
  createTelefonspyne,
} = require("../database");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/images/telefonspynes"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: fileStorage }).single("image");

const getAllServerTelefonspynes = async (req, res) => {
  const categories = await getTelefonspynes();
  res.send(categories);
};

const deleteServerTelefonspyne = async (req, res) => {
  const id = req.params.id;
  await deleteTelefonspyne(id);
  res.status(201).send("Kategorija deleted");
};

const createServerTelefonspyne = async (req, res) => {
  const info = {
    title: req.body.title,
    image: req.file.originalname,
    alt: req.body.alt,
    href: req.body.href,
    categoryKey: req.body.categoryKey,
  };
  const category = await createTelefonspyne(info);
  res.status(201).send(category);
};

module.exports = {
  getAllServerTelefonspynes,
  deleteServerTelefonspyne,
  createServerTelefonspyne,
  upload,
};
