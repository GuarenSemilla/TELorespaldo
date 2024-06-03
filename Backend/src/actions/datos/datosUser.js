const { readJsonFile, writeJsonFile} = require('./datos');

const verificarDato = (dataFilePath,tipodato,dato) => {
    const datos = readJsonFile(dataFilePath);
    switch(tipodato) {
        case 'name':
            for (var i = 0; i < datos.length; i++) {
                if (datos[i].name == dato)
                    {
                    return true
                    }
                //console.log(dato,": ", datos[i].name)
            }
          break;
        case 'correo':
            for (var i = 0; i < datos.length; i++) {
                if (datos[i].correo == dato)
                    {
                    return true
                    }
               // console.log(dato,": ", datos[i].correo)
            }
          break;
        default:
          console.log("Tipo de dato invalido");
          set.status=500
          return{
              "estado": "500",
              "error": "Tipo de dato invalido"
              }
      }
      return false
};

const buscarUsuario = (dataFilePath,correo) => {
    const datos = readJsonFile(dataFilePath);
    for (let i = 0; i < datos.length; i++) {
        if (datos[i].correo === correo) {
            return {
                //"name":datos[i].name 
                "id":datos[i].id ,
                "correo":datos[i].correo,
                "name":datos[i].name 
            };
        }
    }
    console.log("No existe el usuario: ",correo);
    return null; // Devolver null si no se encuentra el usuario
};


const comprobarClave = (dataFilePath,correo,clave) => {
    const datos = readJsonFile(dataFilePath);
    for (let i = 0; i < datos.length; i++) {
        if (datos[i].correo === correo)
            {
            if(datos[i].clave===clave){
                return true;
            }
            else return false;
            }
    }
    console.log("No existe el usuario");
    return null; // Devolver null si no se encuentra el usuario
};

// Exportar las funciones de acciones
module.exports = {
    buscarUsuario,
    verificarDato,
    comprobarClave
};