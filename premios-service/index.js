const server = require("./src/app");

server.listen(process.env.PORT || 5000, () => {
  console.log(`Premios Services is running in port: ${process.env.PORT || 5000}`);
});
