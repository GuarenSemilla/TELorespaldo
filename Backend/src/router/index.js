import Router from 'koa-router'
import getHealth from './health/health'

import {getAllRepos,addNewLink} from './link/link'
import users from './user/user'



const router = new Router()

router.get('/health', getHealth)

//router.get('/link/allrepos', getAllRepos)
//router.post('/link/agregar', addNewLink)
//Falta borrar Repositorios.

router.get('/api/getAllUsers', users.getAllUsers)
router.get('/api/getOneUser/:correo', users.getOneUser)
router.put('/api/userRegistro', users.registrarUser)
router.put('/api/userlogin', users.loginUser)
router.delete('/api/user/:userid', users.removeUser)

export default router