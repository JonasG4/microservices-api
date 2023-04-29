const data_sqlite = require("../data/config");
const axios = require("axios");

class PremiosModel {
  constructor() {
    this.db = data_sqlite;
  }

  async findAll(pais, categoria) {
    const listaPremios = new Promise((resolve, reject) => {
      this.db.all(
        `SELECT id, id_campeon, anio_campeonato, lugar, categoria_ganada, pais_competencia, premio, puntaje FROM campeonatos WHERE pais_competencia = '${pais}' AND categoria_ganada = '${categoria}'`,
        (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });

    return listaPremios;
  }

  async findById(id) {
    const premioFound = new Promise((resolve, reject) => {
      this.db.get(
        "SELECT id, id_campeon, anio_campeonato, lugar, categoria_ganada, pais_competencia, premio, puntaje FROM campeonatos WHERE id = ?",
        [id],
        (err, row) => {
          if (err) {
            reject(err);
          } else {
            resolve(row);
          }
        }
      );
    });

    return premioFound;
  }

  async findByPuntaje(puntajeQuantity) {
    const puntaje = "*".repeat(puntajeQuantity);
    console.log(puntaje);
    const premiosList = new Promise((resolve, reject) => {
      this.db.all(
        `SELECT id, id_campeon, anio_campeonato, lugar, categoria_ganada, pais_competencia, premio, puntaje FROM campeonatos WHERE puntaje = '${puntaje}'`,
        (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });

    return premiosList;
  }

  async findCampeonById(id) {
    const response = await axios.get(`http://perros:4000/api/v1/perros/${id}`);
    const perroCampeon = await response.data.data;

    return perroCampeon;
  }
}

module.exports = PremiosModel;
