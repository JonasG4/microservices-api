const express = require("express");
const razas = require("../routes/razas.routes");

const app = express();

app.use("/api/v1/razas", razas);

module.exports = app;
