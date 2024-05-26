
import Koa from 'koa'
import bodyParser from 'koa-body'
import router from './router/index'
require('@babel/register');
const cors = require('@koa/cors');
const app = new Koa();

app.use(cors());
app.use(bodyParser({ multipart: true, urlencoded: true }))
router.get('/api/saludo', ctx => {
  ctx.body = { mensaje: '¡Hola desde Koa!' };
});

app.use(router.routes()).use(router.allowedMethods());

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
