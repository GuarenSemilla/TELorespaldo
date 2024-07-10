const { Asignatura } = require('../../database.js');

// Obtener todas las asignaturas
exports.getAllAsignaturas = async (ctx) => {
  try {
    const asignaturas = await Asignatura.find();
    ctx.status = 200;
    ctx.body = asignaturas;
  } catch (error) {
    console.error('Error al obtener las asignaturas:', error);
    ctx.status = 500;
    ctx.body = { error: 'Error al obtener las asignaturas' };
  }
};

// Obtener una asignatura por sigla
exports.getAsignaturaBySigla = async (ctx) => {
  const { sigla } = ctx.params;
  try {
    const asignatura = await Asignatura.findOne({ sigla });
    if (!asignatura) {
      ctx.status = 404;
      ctx.body = { error: 'Asignatura no encontrada' };
    } else {
      ctx.status = 200;
      ctx.body = asignatura;
    }
  } catch (error) {
    console.error('Error al obtener la asignatura:', error);
    ctx.status = 500;
    ctx.body = { error: 'Error al obtener la asignatura' };
  }
};

// Registrar una nueva asignatura
exports.registrarAsignatura = async (ctx) => {
  const { sigla, nombre, departamento } = ctx.request.body;

  // Verificar si todos los campos requeridos están presentes
  if (!sigla || !nombre || !departamento) {
    ctx.status = 400;
    ctx.body = { error: 'Todos los campos (sigla, nombre, departamento) son obligatorios.' };
    return;
  }

  // Crear una nueva asignatura
  const nuevaAsignatura = new Asignatura({
    sigla,
    nombre,
    departamento
  });

  try {
    // Guardar la asignatura en la base de datos
    const asignaturaGuardada = await nuevaAsignatura.save();
    ctx.status = 201;
    ctx.body = asignaturaGuardada;
  } catch (err) {
    console.error('Error al guardar la asignatura:', err);

    if (err.name === 'ValidationError') {
      ctx.status = 400;
      ctx.body = { error: 'Error de validación de datos.', details: err.message };
    } else if (err.code === 11000) { // Código de error de duplicación de clave en MongoDB
      ctx.status = 409;
      ctx.body = { error: 'La sigla ya está registrada.' };
    } else {
      ctx.status = 500;
      ctx.body = { error: 'Error al guardar la asignatura' };
    }
  }
};

// Eliminar una asignatura
exports.removeAsignatura = async (ctx) => {
  const { sigla } = ctx.params;
  try {
    const result = await Asignatura.deleteOne({ sigla });
    if (result.deletedCount === 0) {
      ctx.status = 404;
      ctx.body = { error: 'Asignatura no encontrada' };
    } else {
      ctx.status = 200;
      ctx.body = { message: 'Asignatura eliminada exitosamente' };
    }
  } catch (error) {
    console.error('Error al eliminar la asignatura:', error);
    ctx.status = 500;
    ctx.body = { error: 'Error al eliminar la asignatura' };
  }
};
