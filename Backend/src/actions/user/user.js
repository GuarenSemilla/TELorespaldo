const path = require('path');
import {readJsonFile,writeJsonFile,buscarUsuario} from '../datos/datos'
const dataFilePath = path.join(__dirname, '../../data/', 'user.json');

let users = []

exports.getAllUsers = () => {
    const users = readJsonFile(dataFilePath);
    return users
};
exports.getOneUser = (correo) => {
    return buscarUsuario(dataFilePath,correo);
};

exports.removeUser = (userid) => {
    users = users.filter((user) => {
        return user.userid !== userid
    })
};

exports.loginUsuario = (ctx) => {
    console.log(ctx.body);
    for (var i = 0; i < users.length; i++) {
        console.log("chi", users[i].name, newuser)
    }
};



