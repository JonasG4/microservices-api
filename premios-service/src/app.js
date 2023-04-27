const express = require("express");
const premios = require("../routes/premios.routes")

const app = express();

app.use("/api/v1/premios", premios);

module.exports = app;