import Router from 'koa-router'
import getHealth from './health/health'

import links from './link/link'
import users from './user/user'



const router = new Router()

router.get('/health', getHealth)

router.get('/api/getAllLinks', links.getAllLinks)
router.get('/api/getOneLink/:ID', links.getOneLink)
router.get('/api/getAllUserLinks/:correo', links.getAllUserLinks)
router.put('/api/addNewLink', links.addNewLink)

router.get('/api/getAllUsers', users.getAllUsers)
router.get('/api/getOneUser/:correo', users.getOneUser)
router.put('/api/userRegistro', users.registrarUser)
router.post('/api/userlogin', users.loginUser)
router.delete('/api/user/:userid', users.removeUser)

export default router