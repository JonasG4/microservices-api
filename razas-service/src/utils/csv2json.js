const csvToJson = require("csvtojson");

async function parseToJson(csvFilePath) {
  const json = await csvToJson().fromFile(csvFilePath);

  return json;
}

module.exports = parseToJson;
