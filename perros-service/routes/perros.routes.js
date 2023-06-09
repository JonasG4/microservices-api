const express = require("express");
const router = express.Router();
const PerrosModel = require("../models/perros.models");

// Instancia el modelo de la data Perros
const perros = new PerrosModel();

// Muestra en consola el recurso solicitado
const logger = (message) => console.log(`From Perros Services: ${message}`);

//Define una plantilla para las respuestas
const response = (data = [], status = 200) => {
  const length = status === 200 ? data.length : 0;
  return {
    service: "Perros",
    architecture: "microservices",
    status: status == 200 ? 200 : status,
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
      .send(response(`No se encontró ningun registro con el id: ${id}`, true));
  }
  logger("Get by id: Perro data");
  return res.send(response(perroFound));
});

router.get("/raza/:raza", (req, res) => {
  const { raza } = req.params;
  const perrosList = perros.findByRaza(raza);

  if (perrosList.length < 1) {
    return res.send(
      response(`No se encontó nigun registro con el pais ${pais}`, 404)
    );
  }

  logger("Get by peso: Perro data");
  return res.send(response(perrosList));
});

router.get("/tipos/mas-frecuentes/", (req, res) => {
  const perrosList = perros.findAll();
  const masFrecuentes = perrosList.reduce(
    (acc, current) => ((acc[current.raza] = acc[current.raza] + 1 || 1), acc),
    {}
  );

  return res.send(response(masFrecuentes))

})

module.exports = router;
