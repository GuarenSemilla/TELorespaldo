import Router from 'koa-router'
import getHealth from './health/health'

import links from './link/link'
//import users from './user/user'
import usersDB from './user/userBD'
import asignaturasDB from './link/asignaturaBD';
import directoriosDB from './link/directorioBD';


const router = new Router()

router.get('/health', getHealth)


router.get('/api/userDB/:correo', usersDB.getUser)  //Obtener cierto usuario por correo
router.get('/api/userDB', usersDB.getAllUsers)    //Obtener todos los usuarios
router.put('/api/userDB', usersDB.registrarUser)//Ingresar un Usuario
router.post('/api/userDB', usersDB.loginUser) //Login

// Nuevas rutas para Asignatura
router.get('/api/asignatura', asignaturasDB.getAllAsignaturas);
router.get('/api/asignatura/:sigla', asignaturasDB.getAsignaturaBySigla);
router.put('/api/asignatura', asignaturasDB.registrarAsignatura);
router.delete('/api/asignatura/:sigla', asignaturasDB.removeAsignatura);

// Nuevas rutas para Directorio
router.get('/api/directorio', directoriosDB.getAllDirectorios);
router.get('/api/directorio/:ruta_del_archivo', directoriosDB.getDirectorioByRuta);
router.put('/api/directorio', directoriosDB.registrarDirectorio);
router.delete('/api/directorio/:ruta_del_archivo', directoriosDB.removeDirectorio);


export default router

/*

router.get('/api/getAllRamos', links.getAllRamos) 
router.get('/api/getData/:sigla', links.getDataBySigla) 
router.get('/api/getAllLinks', links.getAllLinks)
router.get('/api/getOneLink/:ID', links.getOneLink)
router.get('/api/getAllUserLinks/:correo', links.getAllUserLinks)
router.put('/api/addNewLink', links.addNewLink)
router.get('/api/getAllUsers', users.getAllUsers)
router.get('/api/getOneUser/:correo', users.getOneUser)
router.put('/api/userRegistro', users.registrarUser)
router.post('/api/userlogin', users.loginUser)
router.delete('/api/user/:userid', users.removeUser)
*/