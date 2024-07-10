const { Directorio } = require('../../database.js');

// Obtener todos los directorios
exports.getAllDirectorios = async (ctx) => {
  try {
    const directorios = await Directorio.find();
    ctx.status = 200;
    ctx.body = directorios;
  } catch (error) {
    console.error('Error al obtener los directorios:', error);
    ctx.status = 500;
    ctx.body = { error: 'Error al obtener los directorios' };
  }
};

// Obtener un directorio por ruta del archivo
exports.getDirectorioByRuta = async (ctx) => {
  const { ruta_del_archivo } = ctx.params;
  try {
    const directorio = await Directorio.findOne({ ruta_del_archivo });
    if (!directorio) {
      ctx.status = 404;
      ctx.body = { error: 'Directorio no encontrado' };
    } else {
      ctx.status = 200;
      ctx.body = directorio;
    }
  } catch (error) {
    console.error('Error al obtener el directorio:', error);
    ctx.status = 500;
    ctx.body = { error: 'Error al obtener el directorio' };
  }
};

// Registrar un nuevo directorio
exports.registrarDirectorio = async (ctx) => {
  const { ruta_del_archivo, sigla, tipo_de_documento, correo } = ctx.request.body;

  // Verificar si todos los campos requeridos están presentes
  if (!ruta_del_archivo || !sigla || !tipo_de_documento || !correo) {
    ctx.status = 400;
    ctx.body = { error: 'Todos los campos (ruta_del_archivo, sigla, tipo_de_documento, correo) son obligatorios.' };
    return;
  }

  // Crear un nuevo directorio
  const nuevoDirectorio = new Directorio({
    ruta_del_archivo,
    sigla,
    tipo_de_documento,
    correo
  });

  try {
    // Guardar el directorio en la base de datos
    const directorioGuardado = await nuevoDirectorio.save();
    ctx.status = 201;
    ctx.body = directorioGuardado;
  } catch (err) {
    console.error('Error al guardar el directorio:', err);

    if (err.name === 'ValidationError') {
      ctx.status = 400;
      ctx.body = { error: 'Error de validación de datos.', details: err.message };
    } else if (err.code === 11000) { // Código de error de duplicación de clave en MongoDB
      ctx.status = 409;
      ctx.body = { error: 'El directorio ya está registrado.' };
    } else {
      ctx.status = 500;
      ctx.body = { error: 'Error al guardar el directorio' };
    }
  }
};

// Eliminar un directorio
exports.removeDirectorio = async (ctx) => {
  const { ruta_del_archivo } = ctx.params;
  try {
    const result = await Directorio.deleteOne({ ruta_del_archivo });
    if (result.deletedCount === 0) {
      ctx.status = 404;
      ctx.body = { error: 'Directorio no encontrado' };
    } else {
      ctx.status = 200;
      ctx.body = { message: 'Directorio eliminado exitosamente' };
    }
  } catch (error) {
    console.error('Error al eliminar el directorio:', error);
    ctx.status = 500;
    ctx.body = { error: 'Error al eliminar el directorio' };
  }
};
