const express = require("express");
const server = express();
const cors = require('cors');


// Habilitar CORS para todas las rutas
server.use(cors());
server.use(express.json());

// Resto de la configuración de tu servidor Express

// Importar conexion MongoDB
const archivoDB = require("./conexion");

// Importacion del archivo de rutas y modelo usuario
const rutaUsuario = require('./backend/usuario');

server.use('/api/usuario', rutaUsuario);

// Importar Body-parser
// const bodyParser = require('body-parser');
// server.use(bodyParser.json());
// server.use(bodyParser.urlencoded({extended:'true'}));


// Configurar las rutas '/' es la principal
server.get("/", (req, res) => {
  res.end("<h1>Mensaje de NodeJS y Express</h1>");
});
// Configurar servidor basico = levanta servidor en porto 5000
server.listen(5000, () => {
  console.log("El servidor NodeJS esta corriendo ok.");
});
