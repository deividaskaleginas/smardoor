const express = require("express");

const downloadFileFromServer = async (req, res) => {
  const filePath =
    __dirname + "/public/images/monitoriai/" + req.params.filename;

  res.download(filePath, req.params.filename, (err) => {
    console.log(req.params.filename);
    if (err) {
      res.send({
        error: err,
        msg: "Problem downloading the file",
      });
    }
  });
};

module.exports = {
  downloadFileFromServer,
};
