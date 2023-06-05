const express = require("express");
const {
  mostrarLista,
  agregarTarea,
  modificarTarea,
  obtenerTareasUsuarios,
} = require("../controllers/tareasControllers");
const routes = express.Router();

routes.get("/todos", (req, res) => {
  res.send("Hola mundo");
});

routes.get("/tareas", mostrarLista);
routes.post("/agregarTarea", agregarTarea);
routes.put("/modificar/:id", modificarTarea);
routes.get("/obtenerTareasUsuarios/:id", obtenerTareasUsuarios);

module.exports = routes;
