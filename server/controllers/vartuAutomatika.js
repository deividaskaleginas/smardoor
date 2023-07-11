const express = require("express");
const multer = require("multer");
const path = require("path");

const {
  getVartuAutomatika,
  createVartuAutomatika,
  deleteVartuAutomatika,
} = require("../database");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/images/vartuAutomatika"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: fileStorage }).single("image");

const getAllServerVartuAutomatika = async (req, res) => {
  const categories = await getVartuAutomatika();
  res.send(categories);
};

const deleteServerVartuAutomatika = async (req, res) => {
  const id = req.params.id;
  await deleteVartuAutomatika(id);
  res.status(201).send("Kategorija deleted");
};

const createServerVartuAutomatika = async (req, res) => {
  const info = {
    title: req.body.title,
    image: req.file.originalname,
    alt: req.body.alt,
    href: req.body.href,
    categoryKey: req.body.categoryKey,
  };
  const category = await createVartuAutomatika(info);
  res.status(201).send(category);
};

module.exports = {
  getAllServerVartuAutomatika,
  deleteServerVartuAutomatika,
  createServerVartuAutomatika,
  upload,
};
