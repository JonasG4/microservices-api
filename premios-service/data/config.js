const sqlite = require("sqlite3").verbose();
const fs = require("fs");

// Ruta del archivo sql
const sqlFilePath = `${__dirname}/premios.sql`;

//Se crea una instancia de base de datos en memoria
let db = new sqlite.Database(":memory:", (err) => {
  if (err) {
    console.error(`Error al conectarse a la base de datos: ${err.message}`);
  } else {
    console.log(`Conexión exitosa a la base datos`);
  }
});

//Se obtiene el contenido del archivo .sql y se convierte a string
const sql = fs.readFileSync(sqlFilePath).toString();

//Se ejecuta la consulta extraida del archivo
db.exec(sql, (err) => {
  if (err) {
    console.log(`error: ${err.message}`);
  }
});

module.exports = db;
