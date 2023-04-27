const express = require("express");
const perros = require("../routes/perros.routes");

const app = express();

app.use("/api/v1/perros", perros);

module.exports = app;
