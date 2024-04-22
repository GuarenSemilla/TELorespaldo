import Router from 'koa-router'
import getHealth from './health/health'

import {getAllProducts,addNewItem} from './product/product'

import users from './user/user'



const router = new Router()

router.get('/health', getHealth)

router.get('/products/inventario', getAllProducts)
router.post('/products/agregar', addNewItem)

router.get('/api/users', users.getAllUsers)
router.put('/api/user', users.createUser)
router.delete('/api/user/:rol', users.removeUser)

export default router