const path = require('path');
import {readJsonFile,writeJsonFile} from '../datos/datos'
const dataFilePath = path.join(__dirname, '../../data/', 'links.json');
/*
let links = []

exports.getLinks = () => {
    const links = readJsonFile(dataFilePath);
    return links
}
exports.addUser = (userData) => {
    const links = readJsonFile(dataFilePath);
    const newuser = {
        name: userData.name,
        userid: userData.userid
    }
    try {
        links.push(newuser);
        writeJsonFile(links,dataFilePath);
    } catch (error) {
        console.error('Error al agregar un nuevo usuario:', error);
        ctx.status = 500;
        ctx.body = { error: 'Error al agregar un nuevo usuario' };
    }
}
exports.removeUser = (userid) => {
    links = links.filter((user) => {
        return user.userid !== userid
    })
}
*/