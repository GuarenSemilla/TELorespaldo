import Router from 'koa-router'
import getHealth from './health/health'

import {getAllRepos,addNewLink} from './link/link'
import users from './user/user'



const router = new Router()

router.get('/health', getHealth)

//router.get('/link/allrepos', getAllRepos)
//router.post('/link/agregar', addNewLink)
//Falta borrar Repositorios.

router.get('/api/users', users.getAllUsers)
router.put('/api/userRegistro', users.registrarUser)
router.put('/api/user', users.createUser)
router.put('/api/userlogin', users.loginUser)
router.delete('/api/user/:userid', users.removeUser)

export default router