const { readJsonFile, writeJsonFile} = require('./datos');

let links = []

const getLinkByID = (dataFilePath,id) => {
    const datos = readJsonFile(dataFilePath);
    for (let i = 0; i < datos.length; i++) {
        if (datos[i].id === id) {
            return {
                "name":datos[i].link 
            };
        }
    }
    console.log("No existe el link");
    return null; // Devolver null si no se encuentra el usuario
};

const getAllUserLinks = (dataFilePath,correo) => {
    const datos = readJsonFile(dataFilePath);
    for (let i = 0; i < datos.length; i++) {
        if (datos[i].correo === correo) {
            links.push(datos[i].link)
        }
    }
    console.log("No existe el usuario");
    return null; // Devolver null si no se encuentra el usuario
};

// Exportar las funciones de acciones
module.exports = {
    getLinkByID,
    getAllUserLinks
};