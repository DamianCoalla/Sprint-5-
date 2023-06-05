const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const tareasRoutes = require("./routes/tareasRoutes");

//creamos el servidor con express // inicia tu server
const app = express();

//middleware *** man in the middle *** son funciones
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());

// colocar rutas // define las rutas
app.use("/api", tareasRoutes);

// levantar el servidor en un puerto // levanta el server
const port = process.env.PORT || 8001;
app.listen(port, () => {
  console.log("Servidor levantado en el puerto 8001");
});
