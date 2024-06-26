const path = require('path');
const { readJsonFile, writeJsonFile,getID} = require('../datos/datos');
const { verificarDato} = require('../datos/datosUser');
const dataFilePath = path.join(__dirname, '../../data/', 'user.json');

exports.registrarUser = (userData) => {
    try {
        console.log(userData);
        if (!userData.name || !userData.correo || !userData.clave) {
            return {
                status: 400,
                error: 'Falta un dato'
            };
        }

        // Buscar al usuario proporcionado
        const comprobador = verificarDato(dataFilePath, "correo", userData.correo);

        // Comprobar si el usuario existe y la clave coincide
        if (comprobador) {
            return {
                status: 400,
                error: 'Correo ya registrado'
            };
        }
        const id = getID(dataFilePath);
        const newuser = {
            id: id,
            name: userData.name,
            correo: userData.correo,
            clave: userData.clave
        };
        //Me gustaria poner esta logia en datosUser
        const users = readJsonFile(dataFilePath);
        users.push(newuser);
        writeJsonFile(users, dataFilePath);
        //hasta aqui
        return {
            status: 200,
            mensaje: 'Usuario registrado exitosamente'
        };
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        return {
            status: 500,
            error: 'Error interno del servidor'
        };
    }
};

