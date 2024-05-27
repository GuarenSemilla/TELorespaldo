const path = require('path');
const { readJsonFile, writeJsonFile,verificarDato,obtenerID} = require('../datos/datos');

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
        const id = obtenerID(dataFilePath);
        const newuser = {
            id: id+1,
            name: userData.name,
            correo: userData.correo,
            clave: userData.clave
            // No veo "userid" en los datos de usuario proporcionados, asegúrate de que esté en ctx.request.body
        };

        const users = readJsonFile(dataFilePath);
        users.push(newuser);
        writeJsonFile(users, dataFilePath);

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

