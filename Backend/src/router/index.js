import Router from 'koa-router'
import getHealth from './health/health'

import links from './link/link'
import users from './user/user'
import usersDB from './user/userDB'

const router = new Router()

router.get('/health', getHealth)

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


router.get('/api/userDB/:correo', usersDB.getUser)  //Obtener cierto usuario por correo
router.get('/api/userDB', usersDB.getAllUsers)    //Obtener todos los usuarios
router.put('/api/userDB', usersDB.registrarUser)//Ingresar un Usuario
router.post('/api/userDB', usersDB.loginUser) //Login

export default router