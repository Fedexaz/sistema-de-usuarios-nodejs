const express = require("express");

const api = require("./routes/api.js")

const server = express();

server.use(express.json());
server.use(api)


server.listen(3000, () => console.log("Servidor iniciado en el puerto 3000"))