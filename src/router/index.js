import Router from 'koa-router'
import getHealth from './health/health'
import products from './product/product'
import getPrueba from './product/prueba'


const router = new Router()

router.get('/health', getHealth)


// Endpoint 1 
router.get('/prueba', getPrueba)

// Endpoint 2
router.post('/Login', getPrueba)


// Endpoint 3 


// Endpoint 4 


// Endpoint 5


// Endpoint 6


export default router