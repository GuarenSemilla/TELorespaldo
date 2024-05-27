const path = require('path');
import {readJsonFile,writeJsonFile} from '../datos/datos'
import{getLinkByID,getAllUserLinks}from '../datos/datosLink'
const dataFilePath = path.join(__dirname, '../../data/', 'links.json');
let links = []

exports.getAllLinks = () => {
    const links = readJsonFile(dataFilePath);
    return links
};

exports.getOneLink = (linkID) => {
    return getLinkByID(dataFilePath,linkID);
};

exports.getAllUserLinks = (correo) => {
    return getAllUserLinks(dataFilePath,correo);
};

