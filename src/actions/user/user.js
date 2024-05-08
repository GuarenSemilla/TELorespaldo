// actions/productActions.js

const fs = require('fs');
const path = require('path');

// Obtener la ruta al archivo JSON 'products.json'
const dataFilePath = path.join(__dirname, '../../data/', 'user.json');


let users = []

// Función para leer el archivo JSON y devolver los datos
const readJsonFile = () => {
    try {
        if (fs.existsSync(dataFilePath)) {
            const jsonData = fs.readFileSync(dataFilePath, 'utf-8');
            return JSON.parse(jsonData);
        } else {
            console.error('El archivo JSON no existe en la ruta especificada:', dataFilePath);
            return [];
        }
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
        return [];
    }
};

// Función para escribir datos en el archivo JSON
const writeJsonFile = (data) => {
    try {
        const jsonData = JSON.stringify(data, null, 2);
        fs.writeFileSync(dataFilePath, jsonData, 'utf-8');
        console.log('Datos escritos correctamente en el archivo JSON:', dataFilePath);
    } catch (error) {
        console.error('Error al escribir en el archivo JSON:', error);
    }
};


exports.getUsers = () => {
    const users = readJsonFile();
    return users
}

exports.addUser = (userData) => {
    const users = readJsonFile();
    const newuser = {
        name: userData.name,
        userid: userData.userid
    }
    try {
        users.push(newuser);
        writeJsonFile(users);
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



