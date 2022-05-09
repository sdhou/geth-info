const express = require("express");
const app = express();
const fs = require("fs");
const Web3 = require("web3");

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);
