const express = require("express");
const router = express.Router();

// Instancia el modelo de la data Razas
const RazasModel = require("../models/razas.models");
const razas = new RazasModel();

// Muestra en consola el recurso solicitado
const logger = (message) => console.log(`From Razas Service: ${message}`);

//Define una plantilla para las respuestas
const response = (data = [], err = false) => {
  const length = err === false ? data.length : 0;
  return {
    service: "Razas",
    architecture: "microservices",
    length: length,
    data: data,
  };
};

router.get("/", async (req, res) => {
  const listaRazas = await razas.findAll();
  logger("Get all: Razas data");
  return res.send(response(listaRazas));
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const razaFound = await razas.findById(id);

  if (!razaFound) {
    return res.send(response(`No se encontó nigun registro con el id ${id}`));
  }

  logger("Get by id: Raza data");
  return res.send(response(razaFound));
});

module.exports = router;