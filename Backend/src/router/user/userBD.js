const { Usuario } = require('../../database.js'); // Asegúrate de ajustar la ruta

// Obtener todos los usuarios
exports.getAllUsers = async (ctx) => {
  try {
    const usuarios = await Usuario.find();
    ctx.status = 200;
    ctx.body = usuarios;
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    ctx.status = 500;
    ctx.body = { error: 'Error al obtener los usuarios' };
  }
};

// Obtener un usuario por correo
exports.getUser = async (ctx) => {
  const correo = ctx.params.correo; // Obtener el parámetro de la URL
  try {
    const usuario = await Usuario.findOne({ correo: correo });
    if (!usuario) {
      ctx.status = 404;
      ctx.body = { error: 'Usuario no encontrado' };
    } else {
      ctx.status = 200;
      ctx.body = usuario;
    }
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    ctx.status = 500;
    ctx.body = { error: 'Error al obtener el usuario' };
  }
};

// Registrar un nuevo usuario
exports.registrarUser = async (ctx) => {
  const { nombre, correo, clave } = ctx.request.body;

  // Verificar si todos los campos requeridos están presentes
  if (!nombre || !correo || !clave) {
    ctx.status = 400;
    ctx.body = { error: 'Todos los campos (nombre, correo, clave) son obligatorios.' };
    return;
  }

  // Crear un nuevo usuario
  const nuevoUsuario = new Usuario({
    nombre,
    correo,
    clave
  });

  try {
    // Guardar el usuario en la base de datos
    const usuarioGuardado = await nuevoUsuario.save();
    ctx.status = 201;
    ctx.body = usuarioGuardado;
  } catch (err) {
    console.error('Error al guardar el usuario:', err);

    if (err.name === 'ValidationError') {
      ctx.status = 400;
      ctx.body = { error: 'Error de validación de datos.', details: err.message };
    } else if (err.code === 11000) { // Código de error de duplicación de clave en MongoDB
      ctx.status = 409;
      ctx.body = { error: 'El correo ya está registrado.' };
    } else {
      ctx.status = 500;
      ctx.body = { error: 'Error al guardar el usuario' };
    }
  }
};

// Iniciar sesión
exports.loginUser = async (ctx) => {
  const { correo, clave } = ctx.request.body;

  // Verificar si todos los campos requeridos están presentes
  if (!correo || !clave) {
    ctx.status = 400;
    ctx.body = { error: 'Todos los campos (correo, clave) son obligatorios.' };
    return;
  }

  try {
    // Buscar el usuario por correo
    const usuario = await Usuario.findOne({ correo: correo });
    if (!usuario) {
      ctx.status = 404;
      ctx.body = { error: 'Usuario no encontrado' };
      return;
    }

    // Verificar la contraseña
    if(clave !== usuario.clave) {
      ctx.status = 401;
      ctx.body = { error: 'Contraseña incorrecta' };
      return;
    }

    // Responder con el usuario autenticado
    ctx.status = 200;
    ctx.body = { mensaje: 'Inicio de sesión exitoso', usuario: usuario };
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    ctx.status = 500;
    ctx.body = { error: 'Error al iniciar sesión' };
  }
};
