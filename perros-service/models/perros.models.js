const data_json = require("../data/datos_perro.json");

class PerrosModel {
  constructor() {
    this.data = data_json;
  }

  findAll() {
    const perros = this.data;

    return perros;
  }

  findById(id) {
    const perro = this.data.filter((perro) => {
      return perro.Id == id;
    });

    return perro[0];
  }
}

module.exports = PerrosModel;
