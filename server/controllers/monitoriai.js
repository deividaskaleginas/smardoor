const express = require("express");
const multer = require("multer");
const path = require("path");

const { getMonitoriai, createMonitoriai } = require("../database");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/images/monitoriai"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
const uploadAllFormFiles = upload.fields([
  { name: "images", maxCount: 5 },
  { name: "instruction", maxCount: 1 },
  { name: "technical_images", maxCount: 5 },
]);

const getAllMonitoriaiFromServer = async (req, res) => {
  const monitoriai = await getMonitoriai();
  res.send(monitoriai);
};

const createMonitoriaiToServer = async (req, res) => {
  const info = {
    title: req.body.title,
    images: JSON.stringify(req.files["images"]),
    alt: req.body.alt,
    price: req.body.price,
    slug: req.body.slug,
    monitor_description: req.body.monitor_description,
    technical_parameters: req.body.technical_parameters,
    instruction: JSON.stringify(req.files["instruction"]),
    videos: req.body.videos,
    technical_images: JSON.stringify(req.files["technical_images"]),
  };

  const monitorius = await createMonitoriai(info);
  res.status(200).send(monitorius);
};

module.exports = {
  getAllMonitoriaiFromServer,
  createMonitoriaiToServer,
  uploadAllFormFiles,
};
