const path = require('path');
import {readJsonFile,writeJsonFile} from '../datos/datos'
const dataFilePath = path.join(__dirname, '../../data/', 'user.json');

let users = []

exports.getUsers = () => {
    const users = readJsonFile(dataFilePath);
    return users
}
exports.addUser = (userData) => {
    const users = readJsonFile(dataFilePath);
    const newuser = {
        name: userData.name,
        userid: userData.userid,
        correo: userData.correo
    }
    try {
        users.push(newuser);
        writeJsonFile(users,dataFilePath);
    } catch (error) {
        console.error('Error al agregar un nuevo usuario:', error);
        ctx.status = 500;
        ctx.body = { error: 'Error al agregar un nuevo usuario' };
    }
}
exports.removeUser = (userid) => {
    users = users.filter((user) => {
        return user.userid !== userid
    })
}
exports.loginUsuario = (ctx) => {
    console.log(ctx.body);
    for (var i = 0; i < users.length; i++) {
        console.log("chi", users[i].name, newuser)
    }
}



