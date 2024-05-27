const path = require('path');
const { readJsonFile, writeJsonFile,getID} = require('../datos/datos');
const { verificarDato} = require('../datos/datosUser');
const userPath = path.join(__dirname, '../../data/', 'user.json');
const linksFilePath = path.join(__dirname, '../../data/', 'links.json');

exports.addNewLink = (linkData) => {
    try {
        console.log(linkData);
        if (!linkData.correo || !linkData.tag || !linkData.link) {
            return {
                status: 400,
                error: 'Falta un dato'
            };
        }
        // Buscar al usuario proporcionado
        const comprobador = verificarDato(userPath, "correo", linkData.correo);
        // Comprobar si el usuario existe y la clave coincide
        if (!comprobador) {
            return {
                status: 400,
                error: 'Usuario invalido'
            };
        }
        const id = getID(linksFilePath);
        const newuser = {
            id: id,
            correo: linkData.correo,
            tag: linkData.tag,
            link: linkData.link
        };
        //Me gustaria poner esta logia en datosUser
        const users = readJsonFile(linksFilePath);
        users.push(newuser);
        writeJsonFile(users, linksFilePath);
        //hasta aqui
        return {
            status: 200,
            mensaje: 'Link agregado exitosamente'
        };
    } catch (error) {
        console.error('Error al agregar el link:', error);
        return {
            status: 500,
            error: 'Error interno del servidor'
        };
    }
};