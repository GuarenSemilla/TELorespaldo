const mongoose = require("mongoose")
const { Schema } = mongoose;

mongoose.connect("mongodb://mongo/mydatabase").then(db => console.log("DB bkn esta conectada: ", db.connection.host)).catch(err => console.error(err))


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
  tipo_de_documento: { type: String, required: true }
});

const Directorio = mongoose.model('Directorio', directorioSchema);


module.exports = {
  Asignatura,
  Directorio,
};


/*
// Crear una nueva asignatura
const nuevaAsignatura = new Asignatura({
  sigla: 'TEL335',
  nombre: 'DISEÑO DE APLICACIONES WEB Y MÓVILES',
  departamento: 'Electronica'
});

nuevaAsignatura.save().then(() => console.log('Asignatura creada'));

// Crear un nuevo directorio de archivo
const nuevoDirectorio = new Directorio({
  ruta_del_archivo: './data/TEL335/Control1.pdf',
  sigla: 'TEL335',
  tipo_de_documento: 'Pauta Certamen'
});

nuevoDirectorio.save().then(() => console.log('Directorio creado'));

*/