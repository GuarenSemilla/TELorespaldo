const path = require('path');
const { readJsonFile, writeJsonFile,verificarDato,obtenerID,comprobarClave} = require('../datos/datos');

const dataFilePath = path.join(__dirname, '../../data/', 'user.json');

exports.loginUser = (userData) => {
    try {
        console.log(userData);
        if (!userData.correo || !userData.clave) {
            return {
                status: 400,
                error: 'Falta un dato'
            };
        }
        // Buscar al usuario proporcionado
        const checkMail = verificarDato(dataFilePath, "correo", userData.correo);
        // Comprobar si el usuario existe y la clave coincide
        if (!checkMail) {
            return {
                status: 400,
                error: 'Correo invalido'//To do: cambiar este error por credenciales invalidas
            };
        }
        else{
            const checkPass = comprobarClave(dataFilePath,userData.correo, userData.clave);
            if (!checkPass) {
                return {
                    status: 400,
                    error: 'Clave incorrecta'//To do: cambiar este error por credenciales invalidas
                    }
                }
            }
        return {
            status: 200,
            mensaje: 'Usuario logeado exitosamente'
        };
    } catch (error) {
        console.error('Error al logear usuario:', error);
        return {
            status: 500,
            error: 'Error interno del servidor'
        };
    }
};

