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

  findByRaza(raza) {
    const listaPerros = this.data.filter((perro) => {
      return perro.raza == raza;
    });
    return listaPerros;
  }

  findByNombre(nombre) {
    const listaPerros = this.data.filter((perro) => {
      return perro.nombre_perro.toLowerCase().includes(nombre.toLowerCase());
    });
    return listaPerros;
  }

  findByNombreDueno(nombrDueno) {
    const listaPerros = this.data.filter((perro) => {
      return perro.nombre_dueno == nombrDueno;
    });
    return listaPerros;
  }

  findByPeso(min = 0, max = 9999) {
    const listaPerros = this.data.filter((perro) => {
      return perro.peso > min && perro.peso < max;
    });
    return listaPerros;
  }

  findByPaisOrigenDueno(pais_origen_dueno) {
    const listaPerros = this.data.filter((perro) => {
      return perro.pais_origen_dueno == pais_origen_dueno;
    });
    return listaPerros;
  }
}

module.exports = PerrosModel;
