const express = require("express");
const app = express();

const PORT = 9000;

app.listen(9000);

app.get("/api", (req, res) => {
  res.send("test success");
});

app.use((req, res) => {
  res.redirect("/api");
});