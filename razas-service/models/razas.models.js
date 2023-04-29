//Importamos la funcion asyncrona csv2json para convertir los datos de csv a json
const csv2json = require("../src/utils/csv2json");
//le pasamos la ruta del archivo csv
const cvs2FilePath = `${__dirname}/../data/raza_info.csv`;

//extramos la data que será una promesas
const data_json = csv2json(cvs2FilePath);

class RazasModel {
  constructor() {
    this.data = data_json;
  }

  async findAll() {
    const listaRazas = await this.data;
    return listaRazas;
  }

  async findById(id) {
    const listaRazas = await this.data;
    const razaFound = listaRazas.filter((raza) => {
      return raza.id == id;
    });

    return razaFound[0];
  }

  async findByPaisOrigen(pais) {
    const response = await this.data;
    const listaRazas = response.filter((raza) => {
      return raza.pais_de_origen == pais;
    });
    return listaRazas;
  }

}

module.exports = RazasModel;
