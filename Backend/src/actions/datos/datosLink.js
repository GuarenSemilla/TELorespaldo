const { readJsonFile, writeJsonFile} = require('./datos');



const getLinkByID = (dataFilePath,id) => {
    const datos = readJsonFile(dataFilePath);
    if (datos[id-1]){
        return datos[id-1]
    }
    return null; // Devolver null si no se encuentra el usuario
};

const getAllUserLinks = (dataFilePath,correo) => {
    const datos = readJsonFile(dataFilePath);
    const links = []
    for (let i = 0; i < datos.length; i++) {
        if (datos[i].correo === correo) {
            links.push(datos[i].link)
        }
    }
    return links; // Devolver null si no se encuentra el usuario
};

// Exportar las funciones de acciones
module.exports = {
    getLinkByID,
    getAllUserLinks
};