const server = require("./src/app");

server.listen(process.env.PORT || 4000, () => {
  console.log(`Perros Services is running in port: ${process.env.PORT || 4000}`);
});
