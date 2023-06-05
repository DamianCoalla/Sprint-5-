const tareas = require("../data/tareas");
const knex = require("../config/knexfile");

exports.mostrarLista = async (req, res) => {
  try {
    const resultado = await knex.select("*").from("Sprint 4.tareas");
    res.status(200).json({ tareas: resultado });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.agregarTarea = async (req, res) => {
  const { titulo, prioridad_id, usuario_id, completado } = req.body;

  try {
    const resultado = await knex("Sprint 4.tareas").insert({
      titulo: titulo,
      prioridad_id: prioridad_id,
      usuario_id: usuario_id,
      completado: completado,
    });
    res.status(200).json({
      mensaje: "La tarea se ingresó correctamente en la base de datos",
      resultado,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.modificarTarea = async (req, res) => {
  const id = +req.params.id;
  const titulo = req.body.titulo;
  try {
    const resultado = await knex("Sprint 4.tareas").where({ id: id }).update({
      titulo: titulo,
    });
    res.status(200).json({
      mensaje: "el titulo se modifico aunque no se pq",
      resultado,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.obtenerTareasUsuarios = async (req, res) => {
  const id = +req.params.id;
  try {
    const resultado = await knex
      .select("*")
      .from("Sprint 4.tareas")
      .where({ usuario_id: id });
    res.status(200).json({ tareas: resultado });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.obtenerTarea = async (req, res) => {
  const id = +req.params.id;
  try {
    const resultado = funcionObtenerTarea(id);
    res.status(200).json({ tareas: resultado });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/* async function funcionObtenerTarea(id) {
  const resultado = await knex
    .select("*")
    .from("tarea")
    .where({ usuario_id: id }); //hay q cambiar usuario_id a id
  console.log(resultado);
  return resultado;
}

module.exports = { funcionObtenerTarea }; */
