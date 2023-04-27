const data_sqlite = require("../data/config");

class PremiosModel {
  constructor() {
    this.db = data_sqlite;
  }

  async findAll() {
    const listaPremios = new Promise((resolve, reject) => {
      this.db.all(
        "SELECT id, id_campeon, anio_campeonato, lugar, categoria_ganada, pais_competencia, premio, puntaje FROM campeonatos",
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
}

module.exports = PremiosModel;
