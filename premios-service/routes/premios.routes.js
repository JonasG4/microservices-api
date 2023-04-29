const express = require("express");
const router = express.Router();

// Instancia el modelo de la data Premios
const PremiosModel = require("../models/premios.models");
const premios = new PremiosModel();

// Muestra en consola el recurso solicitado
const logger = (message) => console.log(`From Premios Services: ${message}`);

//Define una plantilla para las respuestas
const response = (data = [], err = false) => {
  const length = err === false ? data.length : 0;
  return {
    service: "Premios",
    architecture: "microservices",
    length: length,
    data: data,
  };
};

router.get("/", async (req, res) => {
  const { pais = "", categoria = "" } = req.query;

  const premiosList = await premios.findAll(pais, categoria);

  if (premiosList.length < 1) {
    return res
      .status(404)
      .send(
        response(
          `No se encontró ningun registro con el pais de competencia: ${pais} y la categoria ganada: ${categoria}`,
          true
        )
      );
  }

  logger("Get all Premios data");
  return res.send(response(premiosList));
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const premioFound = await premios.findById(id);

  if (!premioFound) {
    return res
      .status(404)
      .send(response(`No se encontró ningun registro con el id ${id}`, true));
  }

  const perroFound = await premios.findCampeonById(premioFound.id_campeon);

  logger("Get by id: Premio data");
  return res.send(
    response({
      campeonato: premioFound,
      campeon: perroFound,
    })
  );
});

router.get("/puntaje/:puntaje", async (req, res) => {
  const { puntaje } = req.params;

  const premiosList = await premios.findByPuntaje(puntaje);

  if (premiosList.length < 1) {
    return res
      .status(404)
      .send(
        response(
          `No se encontró ningun registro con el puntaje: ${puntaje}`,
          true
        )
      );
  }

  const razasList = []
    premiosList.forEach((premio) => {
      const list = premios.findRazaByPais(premio.pais_competencia);
      return list != undefined;
    })


  console.log(razasList);
  return res.send(response(premiosList));
});

module.exports = router;
