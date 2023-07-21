const express = require("express");

const app = express();

const kategorijos = require("./routes/categories");
const telefonspynes = require("./routes/telefonspynes");
const vartuautomatika = require("./routes/vartuAutomatika");
const monitoriai = require("./routes/monitoriai");
// const download = require("./routes/download");

app.use(express.json());
app.use(express.static("public"));
app.use("./public/images", express.static("images"));

app.use("/kategorijos", kategorijos);
app.use("/telefonspynes", telefonspynes);
app.use("/vartuautomatika", vartuautomatika);
app.use("/monitoriai", monitoriai);
// app.use("/download/:filename", download);

app.get("/download/:filename", (req, res) => {
  const filePath =
    __dirname + "/public/images/monitoriai/" + req.params.filename;

  res.download(filePath, req.params.filename, (err) => {
    if (err) {
      res.send({
        error: err,
        msg: "Problem downloading the file",
      });
    }
  });
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8080, () => {
  console.log("Server is running on PORT 8080");
});
