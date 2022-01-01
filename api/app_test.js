const express = require("express");
const app = express();

const PORT = 9000;

app.listen(9000);

app.get("/", (req, res) => {
  res.send("APP LOADED...");
});

app.get("/api/delete", (req, res) => {
  res.send({ "status": "DELETED" });
});

app.get("/api/get_cards", (req, res) => {
  res.sendFile("./data_test.json", { root: __dirname });
});

app.use((req, res) => {
  res.redirect("/");
});