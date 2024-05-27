const fs = require('fs');
// Función para leer el archivo JSON y devolver los datos
const readJsonFile = (dataFilePath) => {
    try {
        if (fs.existsSync(dataFilePath)) {
            const jsonData = fs.readFileSync(dataFilePath, 'utf-8');
            return JSON.parse(jsonData);
        } else {
            console.error('El archivo JSON no existe en la ruta especificada:', dataFilePath);
            return [];
        }
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
        return [];
    }
};

// Función para escribir datos en el archivo JSON
const writeJsonFile = (data,dataFilePath) => {
    try {
        const jsonData = JSON.stringify(data, null, 2);
        fs.writeFileSync(dataFilePath, jsonData, 'utf-8');
        console.log('Datos escritos correctamente en el archivo JSON:', dataFilePath);
    } catch (error) {
        console.error('Error al escribir en el archivo JSON:', error);
    }
};

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

const buscarUsuario = (correo,dataFilePath) => {
    const datos = readJsonFile(dataFilePath);
    for (let i = 0; i < datos.length; i++) {
        if (datos[i].correo === correo) {
            return {
                "name":datos[i].name 
            };
        }
    }
    console.log("No existe el usuario");
    return null; // Devolver null si no se encuentra el usuario
};


// Exportar las funciones de acciones
module.exports = {
    readJsonFile,
    writeJsonFile,
    buscarUsuario,
    verificarDato
};