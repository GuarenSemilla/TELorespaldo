const mongoose = require("mongoose");
const { Schema } = mongoose;

// Conectar a la base de datos
mongoose.connect("mongodb://mongo/mydatabase")
  .then(db => console.log("DB bkn esta conectada: ", db.connection.host))
  .catch(err => console.error(err));

// Esquema de Asignaturas
const asignaturaSchema = new Schema({
  sigla: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  departamento: { type: String, required: true }
});

const Asignatura = mongoose.model('Asignatura', asignaturaSchema);

// Esquema de Directorios de Archivos
const directorioSchema = new Schema({
  ruta_del_archivo: { type: String, required: true },
  sigla: { type: String, required: true, ref: 'Asignatura' },
  tipo_de_documento: { type: String, required: true },
  autor: { type: String, required: true, ref: 'Usuario' }
});

const Directorio = mongoose.model('Directorio', directorioSchema);

// Esquema de Usuarios
const usuarioSchema = new Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  clave: { type: String, required: true }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);






module.exports = {
  Asignatura,
  Directorio,
  Usuario,
};


/*
// Crear una nueva asignatura
const nuevaAsignatura = new Asignatura({
  sigla: 'INF236',
  nombre: 'ANALISIS Y DISEÑO DE SOFTWARE',
  departamento: 'Informatica'
});

nuevaAsignatura.save().then(() => console.log('Asignatura creada'));


// Crear un nuevo directorio de archivo
const nuevoDirectorio = new Directorio({
  ruta_del_archivo: './data/TEL222/Example_code.pdf',
  sigla: 'INF236',
  tipo_de_documento: 'Ejercicio'
});

nuevoDirectorio.save().then(() => console.log('Directorio creado'));

*/