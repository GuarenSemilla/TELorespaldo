import Router from 'koa-router'
import getHealth from './health/health'
import {getAllProducts,addNewItem} from './product/product'
import login from './product/pruebaPost'
import getPrueba from './product/prueba'



const router = new Router()

router.get('/health', getHealth)

router.get('/products/inventario', getAllProducts)

router.post('/products/agregar', addNewItem)

// Endpoint 1 
router.get('/prueba/', getPrueba)



export default router