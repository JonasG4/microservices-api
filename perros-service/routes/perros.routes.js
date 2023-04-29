const express = require("express");
const router = express.Router();
const PerrosModel = require("../models/perros.models");

// Instancia el modelo de la data Perros
const perros = new PerrosModel();

// Muestra en consola el recurso solicitado
const logger = (message) => console.log(`From Perros Services: ${message}`);

//Define una plantilla para las respuestas
const response = (data = [], err = false) => {
  const length = err === false ? data.length : 0;
  return {
    service: "Perros",
    architecture: "microservices",
    length: length,
    data: data,
  };
};

router.get("/", (req, res) => {
  const perrosList = perros.findAll();
  logger("Get all Perros data");
  return res.send(response(perrosList));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const perroFound = perros.findById(id);
  // Si no existe un registro con el id, responderá con un not found
  if (!perroFound) {
    return res
      .status(404)
      .send(response(`No se encontró ningun registro con el id: ${id}`, true));
  }
  logger("Get by id: Perro data");
  return res.send(response(perroFound));
});

router.get("/nombre/", (req, res) => {
  const { min = 0, max = 9999 } = req.query;
  const listaPerros = perros.findByPeso(min, max);

  // Si no existe un registro con el id, responderá con un not found
  if (!listaPerros) {
    return res
      .status(404)
      .send(
        response(
          `No se encontró ningun registro con un peso entre ${min} y ${max}}`,
          true
        )
      );
  }

  logger("Get by peso: Perro data");
  return res.send(response(listaPerros));
});

module.exports = router;
