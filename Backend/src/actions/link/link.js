const path = require('path');
import {readJsonFile,writeJsonFile} from '../datos/datos'
import{getLinkByID,getAllUserLinks}from '../datos/datosLink'
const dataFilePath = path.join(__dirname, '../../data/', 'links.json');

const { Asignatura, Directorio } = require('../../database.js');

let links = []

exports.getAllLinks = async () => {
    try {
      const directorios = await Directorio.find();
      return directorios;
    } catch (error) {
      throw new Error('Error al obtener los directorios');
    }
  };

exports.getAllRamos = async () => {
    try {
      const asignatura = await Asignatura.find();
      console.log("Ayuda")
      return asignatura;
    } catch (error) {
      throw new Error('Error al obtener los directorios');
    }
  };
  

exports.getOneLink = (linkID) => {
    return getLinkByID(dataFilePath,linkID);
};

exports.getAllUserLinks = (correo) => {
    return getAllUserLinks(dataFilePath,correo);
};

