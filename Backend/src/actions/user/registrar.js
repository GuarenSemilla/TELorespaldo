const path = require('path');
import {buscarDato} from '../datos/datos'
const dataFilePath = path.join(__dirname, '../../data/', 'user.json');


exports.registrarUser = (userData) => {
    console.log(userData);
    if
    (
    userData.name  == undefined ||
    userData.correo  == undefined ||
    userData.clave  == undefined 
    ) 
        {
        userData.status=400
        return{
            "estado": "400",
            "error": "Falta un dato"
            }
        }
    console.log("sandia");
    try {
      // Buscar al usuario proporcionado
        const comprobador = buscarDato(dataFilePath,"correo",userData.correo)
       // Comprobar si el usuario existe y la clave coincide
        if(comprobador)
        {
        set.status=400
        return{
            "error":"Correo ya registrado"
            }
        }
       const newuser = {
        name: userData.name,
        userid: userData.userid,
        correo: userData.correo
        }
        const users = readJsonFile(dataFilePath);
        users.push(newuser);
        writeJsonFile(users,dataFilePath);
    } catch(error) {
    userData.status = 500
      return {
        "estado": 500,
        "Error": "error DB",
         error: error.name,
      }
      
  }
  console.log("sandia");
  userData.status = 200
  return {
      "estado": 200,
      "mensaje": "Usuario registrado exitosamente"
  };
};
