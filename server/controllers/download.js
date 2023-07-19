const express = require("express");
const path = require("path");

const downloadFileFromServer = async (req, res) => {
  res.download(`../public/images/monitoriai/assa1.jpeg`);
};

module.exports = {
  downloadFileFromServer,
};
