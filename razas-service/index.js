const server = require("./src/app");

server.listen(process.env.PORT || 6000, () => {
  console.log(`Razas Services is running in port: ${process.env.PORT || 6000}`);
});
